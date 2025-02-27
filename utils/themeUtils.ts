import { Theme } from '../themes/default';

export function generateInlineStyles(theme: Theme) {
  return {
    div: {
      fontFamily: theme.base.fontFamily,
      fontSize: theme.base.fontSize,
      lineHeight: theme.base.lineHeight,
      color: theme.base.color,
      letterSpacing: theme.base.letterSpacing,
      textAlign: theme.base.textAlign as 'justify',
    },
    h1: {
      fontWeight: theme.headings.fontWeight,
      color: theme.headings.color,
      fontSize: theme.headings.h1.fontSize,
      margin: theme.headings.h1.margin,
      textAlign: theme.headings.h1.textAlign as 'center',
      lineHeight: '1.5',
      letterSpacing: theme.headings.letterSpacing,
      borderBottom: theme.headings.h1.borderBottom,
      paddingBottom: theme.headings.h1.paddingBottom,
      position: theme.headings.h1.position as 'relative',
    },
    h2: {
      fontWeight: theme.headings.fontWeight,
      color: theme.headings.color,
      fontSize: theme.headings.h2.fontSize,
      margin: theme.headings.h2.margin,
      lineHeight: '1.5',
      letterSpacing: theme.headings.letterSpacing,
      borderLeft: theme.headings.h2.borderLeft,
      paddingLeft: theme.headings.h2.paddingLeft,
    },
    h3: {
      fontWeight: theme.headings.fontWeight,
      color: theme.headings.color,
      fontSize: theme.headings.h3.fontSize,
      margin: theme.headings.h3.margin,
      lineHeight: '1.5',
      letterSpacing: theme.headings.letterSpacing,
    },
    h4: {
      fontWeight: theme.headings.fontWeight,
      color: theme.headings.color,
      fontSize: theme.headings.h4.fontSize,
      margin: theme.headings.h4.margin,
      lineHeight: '1.5',
      letterSpacing: theme.headings.letterSpacing,
    },
    h5: {
      fontWeight: theme.headings.fontWeight,
      color: theme.headings.color,
      fontSize: theme.headings.h5.fontSize,
      margin: theme.headings.h5.margin,
      lineHeight: '1.5',
      letterSpacing: theme.headings.letterSpacing,
    },
    h6: {
      fontWeight: theme.headings.fontWeight,
      color: theme.headings.h6.color,
      fontSize: theme.headings.h6.fontSize,
      margin: theme.headings.h6.margin,
      lineHeight: '1.5',
      letterSpacing: theme.headings.letterSpacing,
    },
    p: {
      margin: theme.paragraph.margin,
      lineHeight: theme.paragraph.lineHeight,
    },
    img: {
      maxWidth: theme.image.maxWidth,
      height: 'auto',
      margin: theme.image.margin,
      display: 'block',
      borderRadius: theme.image.borderRadius,
    },
    pre: {
      fontFamily: theme.code.fontFamily,
      fontSize: theme.code.fontSize,
      lineHeight: theme.code.lineHeight,
      background: theme.code.block.background,
      padding: theme.code.block.padding,
      margin: theme.code.block.margin,
      borderRadius: theme.code.block.borderRadius,
      color: theme.code.block.color,
      overflow: 'auto',
    },
    codeInline: {
      fontFamily: theme.code.fontFamily,
      background: theme.code.inline.background,
      padding: theme.code.inline.padding,
      borderRadius: theme.code.inline.borderRadius,
      fontSize: '0.9em',
      color: theme.code.inline.color,
    },
    codeBlock: {
      fontFamily: theme.code.fontFamily,
    },
    table: {
      borderCollapse: 'collapse' as const,
      width: theme.table.width,
      margin: theme.table.margin,
      fontSize: theme.table.fontSize,
      borderSpacing: theme.table.borderSpacing,
      border: theme.table.border,
    },
    th: {
      border: theme.table.header.border,
      padding: theme.table.cell.padding,
      background: theme.table.header.background,
      fontWeight: theme.table.header.fontWeight,
    },
    td: {
      border: theme.table.cell.border,
      padding: theme.table.cell.padding,
    },
    blockquote: {
      margin: theme.blockquote.margin,
      padding: theme.blockquote.padding,
      background: theme.blockquote.background,
      borderRadius: theme.blockquote.borderRadius,
      color: theme.blockquote.color,
      borderLeft: theme.blockquote.borderLeft,
    },
    ul: {
      margin: theme.list.margin,
      padding: theme.list.padding,
      listStyleType: theme.list.unordered.listStyleType,
    },
    ol: {
      margin: theme.list.margin,
      padding: theme.list.padding,
      listStyleType: theme.list.ordered.listStyleType,
    },
    ulNested1: {
      margin: theme.list.margin,
      padding: theme.list.padding,
      listStyleType: theme.list.unordered.nestedLevel1.listStyleType,
    },
    ulNested2: {
      margin: theme.list.margin,
      padding: theme.list.padding,
      listStyleType: theme.list.unordered.nestedLevel2.listStyleType,
    },
    olNested1: {
      margin: theme.list.margin,
      padding: theme.list.padding,
      listStyleType: theme.list.ordered.nestedLevel1.listStyleType,
    },
    olNested2: {
      margin: theme.list.margin,
      padding: theme.list.padding,
      listStyleType: theme.list.ordered.nestedLevel2.listStyleType,
    },
    li: {
      margin: theme.list.item.margin,
      lineHeight: theme.list.item.lineHeight,
    },
    a: {
      color: theme.link.color,
      textDecoration: theme.link.textDecoration,
      borderBottom: theme.link.borderBottom,
    },
    hr: {
      margin: theme.hr.margin,
      border: 'none',
      borderTop: theme.hr.border,
    },
    strong: {
      color: theme.emphasis.strong.color,
      fontWeight: theme.emphasis.strong.fontWeight,
    },
    em: {
      color: theme.emphasis.em.color,
      fontStyle: theme.emphasis.em.fontStyle,
    },
    code: {
      fontFamily: theme.code.fontFamily,
      fontSize: theme.code.fontSize,
      lineHeight: theme.code.lineHeight,
      background: theme.code.inline.background,
      padding: theme.code.inline.padding,
      borderRadius: theme.code.inline.borderRadius,
      color: theme.code.inline.color,
    },
  };
}

export function applyThemeStyles(content: string, theme: Theme) {
  const styles = generateInlineStyles(theme);
  
  const styleToString = (style: Record<string, string | number>) => {
    return Object.entries(style)
      .map(([key, value]) => `${key.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}:${value}`)
      .join(';');
  };
  
  // 首先处理表格和表格单元格，确保它们具有较高的优先级
  let processedContent = content
    // 处理表格
    .replace(/<table([^>]*)>/g, (match, attrs) => {
      // 拼接完整的表格样式
      const tableStyle = `border-collapse:collapse;width:${theme.table.width};margin:${theme.table.margin};font-size:${theme.table.fontSize};border:${theme.table.border};border-spacing:${theme.table.borderSpacing}`;
      
      // 检查是否已有style属性
      if (attrs && attrs.includes('style=')) {
        // 已有style属性，将新样式添加到现有样式中
        return match.replace(/style="([^"]*)"/, (styleMatch, existingStyle) => {
          return `style="${existingStyle};${tableStyle}"`;
        });
      } else {
        // 没有style属性，添加新的style属性
        return `<table${attrs} style="${tableStyle}">`;
      }
    })
    // 处理表头单元格
    .replace(/<th([^>]*)>/g, (match, attrs) => {
      // 拼接完整的表头单元格样式
      const thStyle = `border:${theme.table.header.border};padding:${theme.table.cell.padding};background:${theme.table.header.background};font-weight:${theme.table.header.fontWeight}`;
      
      // 检查是否已有style属性
      if (attrs && attrs.includes('style=')) {
        // 已有style属性，将新样式添加到现有样式中
        return match.replace(/style="([^"]*)"/, (styleMatch, existingStyle) => {
          return `style="${existingStyle};${thStyle}"`;
        });
      } else {
        // 没有style属性，添加新的style属性
        return `<th${attrs} style="${thStyle}">`;
      }
    })
    // 处理普通单元格
    .replace(/<td([^>]*)>/g, (match, attrs) => {
      // 拼接完整的普通单元格样式
      const tdStyle = `border:${theme.table.cell.border};padding:${theme.table.cell.padding}`;
      
      // 检查是否已有style属性
      if (attrs && attrs.includes('style=')) {
        // 已有style属性，将新样式添加到现有样式中
        return match.replace(/style="([^"]*)"/, (styleMatch, existingStyle) => {
          return `style="${existingStyle};${tdStyle}"`;
        });
      } else {
        // 没有style属性，添加新的style属性
        return `<td${attrs} style="${tdStyle}">`;
      }
    });

  // 处理列表 - 采用新的更健壮的方法
  // 基本思路: 先将所有HTML内容转换为DOM结构，然后遍历处理列表元素
  const parser = new DOMParser();
  const doc = parser.parseFromString(`<div id="root">${processedContent}</div>`, 'text/html');
  const rootElement = doc.getElementById('root');

  // 递归处理列表
  function processLists(element: Element, level = 0, startIndex = 1) {
    // 找出所有直接子列表 - 使用更兼容的方法
    let lists: Element[] = [];
    
    // 遍历子节点，找出ul和ol元素
    Array.from(element.children).forEach(child => {
      if (child.tagName && (child.tagName.toLowerCase() === 'ul' || child.tagName.toLowerCase() === 'ol')) {
        lists.push(child);
      }
    });
    
    lists.forEach((list: Element) => {
      const isOrdered = list.tagName.toLowerCase() === 'ol';
      let index = startIndex;
      
      // 如果是有序列表，检查是否有指定起始索引
      if (isOrdered && list.hasAttribute('start')) {
        index = parseInt(list.getAttribute('start') || '1') || 1;
      }
      
      // 获取原始列表的样式
      const listStyle = list.getAttribute('style') || '';
      
      // 创建替换元素
      const replacementDiv = doc.createElement('div');
      replacementDiv.className = isOrdered ? 'wx-ol' : 'wx-ul';
      
      // 保留原始样式并添加新样式
      const baseStyle = isOrdered ? styleToString(styles.ol) : styleToString(styles.ul);
      replacementDiv.style.cssText = `${listStyle};${baseStyle};padding-left:${level > 0 ? '1em' : '2em'};margin-left:0;`;
      
      // 处理列表项 - 使用更兼容的方法
      let items: Element[] = [];
      
      // 遍历子节点，找出li元素
      Array.from(list.children).forEach(child => {
        if (child.tagName && child.tagName.toLowerCase() === 'li') {
          items.push(child);
        }
      });
      
      items.forEach((item: Element) => {
        // 获取原始列表项的样式
        const itemStyle = item.getAttribute('style') || '';
        
        const itemDiv = doc.createElement('div');
        itemDiv.className = 'wx-li';
        
        // 合并原始样式和新样式
        const baseItemStyle = styleToString({
          ...styles.li,
          position: 'relative',
          display: 'block',
          marginLeft: '0.5em',
          paddingLeft: '1.5em',
          boxSizing: 'border-box'
        });
        
        itemDiv.style.cssText = `${itemStyle};${baseItemStyle}`;
        
        // 创建前缀标记
        const prefixSpan = doc.createElement('span');
        prefixSpan.style.cssText = 'position:absolute;left:0;top:0;';
        
        if (isOrdered) {
          prefixSpan.textContent = `${index++}.`;
        } else {
          prefixSpan.textContent = '•';
          prefixSpan.style.fontWeight = 'bold';
        }
        
        // 复制原始内容
        while (item.firstChild) {
          itemDiv.appendChild(item.firstChild);
        }
        
        // 添加前缀
        itemDiv.insertBefore(prefixSpan, itemDiv.firstChild);
        
        // 递归处理嵌套列表 - 这些嵌套列表现在在itemDiv中
        processLists(itemDiv, level + 1, 1);
        
        replacementDiv.appendChild(itemDiv);
      });
      
      // 替换原列表
      if (list.parentNode) {
        list.parentNode.replaceChild(replacementDiv, list);
      }
    });
  }
  
  if (rootElement) {
    // 开始处理根元素下的所有列表
    processLists(rootElement);
    
    // 获取处理后的HTML
    processedContent = rootElement.innerHTML;
  }

  // 然后处理其他元素
  return processedContent
    .replace(/<div[^>]*>/g, `<div style="${styleToString(styles.div)}">`)
    .replace(/<h1[^>]*>(.*?)<\/h1>/g, `<h1 style="${styleToString(styles.h1)}">$1</h1>`)
    .replace(/<h2[^>]*>(.*?)<\/h2>/g, `<h2 style="${styleToString(styles.h2)}">$1</h2>`)
    .replace(/<h3[^>]*>(.*?)<\/h3>/g, `<h3 style="${styleToString(styles.h3)}">$1</h3>`)
    .replace(/<h4[^>]*>(.*?)<\/h4>/g, `<h4 style="${styleToString(styles.h4)}">$1</h4>`)
    .replace(/<h5[^>]*>(.*?)<\/h5>/g, `<h5 style="${styleToString(styles.h5)}">$1</h5>`)
    .replace(/<h6[^>]*>(.*?)<\/h6>/g, `<h6 style="${styleToString(styles.h6)}">$1</h6>`)
    .replace(/<p[^>]*>(.*?)<\/p>/g, `<p style="${styleToString(styles.p)}">$1</p>`)
    .replace(/<img([^>]*)>/g, (match, attrs) => {
      // 提取原始链接
      const originSrcMatch = attrs.match(/data-origin-src="([^"]+)"/);
      const originSrc = originSrcMatch ? originSrcMatch[1] : '';
      
      // 提取 alt 文本
      const altMatch = attrs.match(/alt="([^"]*)"/);
      const alt = altMatch ? altMatch[1] : '';

      // 使用原始链接
      const src = originSrc || attrs.match(/src="([^"]+)"/)?.[1] || '';
      
      return `<img src="${src}" alt="${alt}" style="${styleToString(styles.img)}" data-type="jpeg" class="rich_pages wxw-img" />`;
    })
    .replace(/<pre[^>]*>([\s\S]*?)<\/pre>/g, `<pre style="${styleToString(styles.pre)}">$1</pre>`)
    .replace(/<code[^>]*>([\s\S]*?)<\/code>/g, (match, content) => {
      // 检查是否在 pre 标签内（代码块）
      const isInPre = match.includes('class="language-') || match.includes('<pre');
      // 如果是代码块使用 codeBlock 样式，否则使用 codeInline 样式
      const style = isInPre ? styles.codeBlock : {
        ...styles.codeInline,
        fontFamily: theme.code.inline.fontFamily,
        fontSize: theme.code.fontSize,
        lineHeight: theme.code.lineHeight,
        background: theme.code.inline.background,
        padding: theme.code.inline.padding,
        borderRadius: theme.code.inline.borderRadius,
        color: theme.code.inline.color,
      };
      return `<code style="${styleToString(style)}">${content}</code>`;
    })
    .replace(/<blockquote[^>]*>(.*?)<\/blockquote>/g, `<blockquote style="${styleToString(styles.blockquote)}">$1</blockquote>`)
    .replace(/<a([^>]*)>(.*?)<\/a>/g, `<a$1 style="${styleToString(styles.a)}">$2</a>`)
    .replace(/<hr[^>]*>/g, `<hr style="${styleToString(styles.hr)}" />`)
    .replace(/<strong[^>]*>(.*?)<\/strong>/g, `<strong style="${styleToString(styles.strong)}">$1</strong>`)
    .replace(/<em[^>]*>(.*?)<\/em>/g, `<em style="${styleToString(styles.em)}">$1</em>`);
}

/**
 * 用于测试列表处理逻辑的函数
 * @param content 包含列表的HTML内容
 * @param theme 主题配置
 * @returns 处理后的HTML
 */
export function testListProcessing(content: string, theme: Theme) {
  return applyThemeStyles(content, theme);
} 