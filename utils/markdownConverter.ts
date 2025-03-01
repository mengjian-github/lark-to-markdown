import TurndownService from 'turndown';

// 创建Turndown服务实例
const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  emDelimiter: '*',
});

// 自定义加粗文本的转换规则
turndownService.addRule('strong', {
  filter: ['strong', 'b'],
  replacement: function (content, node, options) {
    const prevIsStrong = node.previousSibling?.nodeName?.toLowerCase() === 'strong' || 
                        node.previousSibling?.nodeName?.toLowerCase() === 'b';
    const nextIsStrong = node.nextSibling?.nodeName?.toLowerCase() === 'strong' || 
                        node.nextSibling?.nodeName?.toLowerCase() === 'b';
    
    const prefix = prevIsStrong ? '' : '**';
    const suffix = nextIsStrong ? '' : '**';
    
    const needSpaceBefore = !prevIsStrong && node.previousSibling && 
      node.previousSibling.nodeType === 3 && 
      !node.previousSibling.nodeValue?.endsWith(' ');
    
    const needSpaceAfter = !nextIsStrong && node.nextSibling && 
      node.nextSibling.nodeType === 3 && 
      !node.nextSibling.nodeValue?.startsWith(' ');

    return (needSpaceBefore ? ' ' : '') + 
           prefix + content.trim() + suffix + 
           (needSpaceAfter ? ' ' : '');
  }
});

// 获取单元格对齐方式
function getCellAlignment(cell: HTMLElement): string {
  const style = cell.getAttribute('style') || '';
  const className = cell.getAttribute('class') || '';
  
  if (style.includes('text-align: center') || className.includes('align-center')) {
    return ':---:';
  }
  if (style.includes('text-align: right') || className.includes('align-right')) {
    return '---:';
  }
  return ':---'; // 默认左对齐
}

// 处理图片
function processImage(img: HTMLImageElement): string {
  let src = img.getAttribute('src') || '';
  const alt = img.alt || '';
  const originSrc = img.getAttribute('data-origin-src');
  const tokenSrc = img.getAttribute('data-token-src');
  
  // 获取图片尺寸
  const width = img.getAttribute('width') || img.style.width || '';
  const height = img.getAttribute('height') || img.style.height || '';
  const style = img.getAttribute('style') || '';
  
  // 从style中提取宽高
  const widthMatch = style.match(/width:\s*(\d+)px/);
  const heightMatch = style.match(/height:\s*(\d+)px/);
  const styleWidth = widthMatch ? widthMatch[1] : '';
  const styleHeight = heightMatch ? heightMatch[1] : '';
  
  // 优先使用飞书的原始图片链接
  if (originSrc) {
    src = originSrc;
  } else if (tokenSrc) {
    src = tokenSrc;
  }
  
  // 如果是base64图片，直接使用
  if (src.startsWith('data:image')) {
    return `![${alt}](${src})`;
  }
  
  // 处理飞书域名的图片
  if (src.includes('feishu.cn') || src.includes('larksuite.com')) {
    if (!src.startsWith('http')) {
      src = 'https:' + src;
    }
  }
  
  // 构建HTML格式的图片标签以保持尺寸
  const actualWidth = width || styleWidth;
  const actualHeight = height || styleHeight;
  
  if (actualWidth || actualHeight) {
    const sizeStyle = [];
    if (actualWidth) sizeStyle.push(`width: ${actualWidth}px`);
    if (actualHeight) sizeStyle.push(`height: ${actualHeight}px`);
    return `<img src="${src}" alt="${alt}" style="${sizeStyle.join('; ')}" />`;
  }
  
  return `![${alt}](${src})`;
}

// 处理单元格内容
function processCellContent(cell: HTMLElement): string {
  // 处理图片
  const img = cell.querySelector('img');
  if (img) {
    return processImage(img);
  }

  // 处理加粗
  const boldText = Array.from(cell.querySelectorAll('strong, b')).map(b => b.textContent).join(' ');
  if (boldText) {
    return `**${boldText}**`;
  }

  // 处理普通文本
  const text = cell.textContent?.trim() || '';
  return text.replace(/\|/g, '\\|'); // 转义表格中的竖线
}

// 配置图片转换规则
turndownService.addRule('image', {
  filter: 'img',
  replacement: function(content, node) {
    const img = node as HTMLImageElement;
    return processImage(img);
  }
});

// 配置代码块规则
turndownService.addRule('codeBlock', {
  filter: function(node: HTMLElement): boolean {
    if (node.nodeName !== 'PRE') return false;
    const code = node.firstChild as HTMLElement | null;
    return !!(code && code.nodeName === 'CODE');
  },
  replacement: function(content: string, node: Node) {
    const code = node.firstChild as HTMLElement;
    const className = code?.getAttribute('class') || '';
    const lang = className.replace('language-', '') || '';
    const text = code?.textContent || '';
    return '\n```' + lang + '\n' + text + '\n```\n';
  }
});

// 配置表格转换规则
turndownService.addRule('table', {
  filter: 'table',
  replacement: function(content: string, node: Node) {
    const table = node as HTMLTableElement;
    let markdown = '\n';
    
    // 处理表头
    const headerRow = table.querySelector('tr');
    if (headerRow) {
      const headers = Array.from(headerRow.querySelectorAll('th,td')).map(cell => {
        return processCellContent(cell as HTMLElement);
      });
      
      // 获取每列的对齐方式
      const alignments = Array.from(headerRow.querySelectorAll('th,td')).map(cell => {
        return getCellAlignment(cell as HTMLElement);
      });

      markdown += '| ' + headers.join(' | ') + ' |\n';
      markdown += '|' + alignments.join('|') + '|\n';
    }

    // 处理表格内容
    const rows = Array.from(table.querySelectorAll('tr')).slice(1);
    rows.forEach(row => {
      const cells = Array.from(row.querySelectorAll('td')).map(cell => {
        return processCellContent(cell as HTMLElement);
      });
      markdown += '| ' + cells.join(' | ') + ' |\n';
    });

    return markdown + '\n';
  }
});

/**
 * 将HTML内容转换为Markdown
 */
export function convertHtmlToMarkdown(html: string): string {
  return turndownService.turndown(html);
}

/**
 * 处理HTML内容以便复制到微信公众号
 */
export function processHtmlForWeixin(htmlContent: string): string {
  // 创建临时DOM元素用于处理HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;
  
  // 尝试智能识别主要内容区
  const contentRoot = tempDiv.querySelector('.markdown-body') || 
                      tempDiv.querySelector('div[style] > div') ||
                      tempDiv.querySelector('div > div > div') ||
                      tempDiv;
  
  // 移除可能干扰内容的UI元素
  const uiSelectors = ['.toolbar', '.status-bar-content', '.phone-status-bar', '.phone-home-indicator'];
  uiSelectors.forEach(selector => {
    contentRoot.querySelectorAll(selector).forEach(el => el.parentNode?.removeChild(el));
  });
  
  // 处理列表项中的文本节点
  contentRoot.querySelectorAll('li').forEach(li => {
    Array.from(li.childNodes).forEach(node => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
        const span = document.createElement('span');
        span.style.display = 'inline';
        span.textContent = node.textContent;
        node.parentNode?.replaceChild(span, node);
      }
    });
  });
  
  // 处理图片元素
  contentRoot.querySelectorAll('img').forEach(img => {
    img.style.maxWidth = img.style.maxWidth || '100%';
    img.style.display = img.style.display || 'block';
    img.style.margin = img.style.margin || '10px auto';
  });
  
  // 处理代码块
  contentRoot.querySelectorAll('pre').forEach(pre => {
    if (pre instanceof HTMLElement) {
      pre.style.backgroundColor = '#f6f8fa';
      pre.style.borderRadius = '3px';
      pre.style.padding = '16px';
      pre.style.overflow = 'auto';
      pre.style.fontSize = '14px';
      pre.style.lineHeight = '1.45';
      pre.style.fontFamily = 'SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace';
    }
  });
  
  // 处理表格
  contentRoot.querySelectorAll('table').forEach(table => {
    if (table instanceof HTMLElement) {
      table.style.borderCollapse = 'collapse';
      table.style.width = '100%';
      table.style.margin = '16px 0';
      
      table.querySelectorAll('th, td').forEach(cell => {
        if (cell instanceof HTMLElement) {
          cell.style.border = cell.style.border || '1px solid #dfe2e5';
          cell.style.padding = cell.style.padding || '8px 12px';
        }
      });
      
      table.querySelectorAll('th').forEach(th => {
        if (th instanceof HTMLElement) {
          th.style.backgroundColor = '#f6f8fa';
          th.style.fontWeight = 'bold';
        }
      });
    }
  });
  
  // 添加内联样式表
  const style = document.createElement('style');
  style.textContent = `
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; }
    p { margin: 10px 0; }
    img { max-width: 100%; display: block; margin: 10px auto; }
    code { background-color: rgba(0, 0, 0, 0.05); padding: 0.2em 0.4em; border-radius: 3px; font-family: monospace; }
    pre { background-color: #f6f8fa; padding: 16px; overflow: auto; border-radius: 3px; margin: 16px 0; }
    blockquote { padding-left: 1em; border-left: 4px solid #ddd; color: #666; margin: 16px 0; }
    table { border-collapse: collapse; width: 100%; margin: 16px 0; }
    th, td { border: 1px solid #dfe2e5; padding: 8px 12px; }
    th { background-color: #f6f8fa; }
  `;
  
  // 返回带样式的HTML
  return style.outerHTML + (contentRoot === tempDiv ? contentRoot.innerHTML : contentRoot.outerHTML);
}

export default turndownService; 