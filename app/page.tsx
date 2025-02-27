'use client';

import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import TurndownService from 'turndown';
import { FiCopy, FiCheck, FiSmartphone, FiMonitor, FiSun, FiDroplet, FiFeather } from 'react-icons/fi';
import '@uiw/react-md-editor/markdown-editor.css';
import Preview from '../components/Preview';
import { ThemeProvider, useTheme, ThemeName } from '../contexts/ThemeContext';

const MDEditor = dynamic(
  () => import('@uiw/react-md-editor').then((mod) => mod.default),
  { ssr: false }
);

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  emDelimiter: '*',
});

// 自定义加粗文本的转换规则
turndownService.addRule('strong', {
  filter: ['strong', 'b'],
  replacement: function (content, node, options) {
    // 检查前后节点是否是 strong 标签
    const prevIsStrong = node.previousSibling?.nodeName?.toLowerCase() === 'strong' ||
                        node.previousSibling?.nodeName?.toLowerCase() === 'b';
    const nextIsStrong = node.nextSibling?.nodeName?.toLowerCase() === 'strong' ||
                        node.nextSibling?.nodeName?.toLowerCase() === 'b';
    
    // 如果前面是 strong，不添加前面的 **
    const prefix = prevIsStrong ? '' : '**';
    // 如果后面是 strong，不添加后面的 **
    const suffix = nextIsStrong ? '' : '**';
    
    // 检查是否需要添加空格
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

// 获取单元格对齐方式的辅助函数
function getCellAlignment(cell: HTMLElement): string {
  const style = cell.getAttribute('style') || '';
  const className = cell.getAttribute('class') || '';
  
  // 优先检查 style 属性中的对齐方式
  if (style.includes('text-align: center') || className.includes('align-center')) {
    return ':---:';
  }
  if (style.includes('text-align: right') || className.includes('align-right')) {
    return '---:';
  }
  if (style.includes('text-align: left') || className.includes('align-left')) {
    return ':---';
  }
  return '---'; // 默认左对齐
}

// 处理图片的辅助函数
function processImage(img: HTMLImageElement): string {
  let src = img.getAttribute('src') || '';
  const alt = img.alt || '';
  const originSrc = img.getAttribute('data-origin-src');
  const tokenSrc = img.getAttribute('data-token-src');
  
  // 获取图片尺寸
  const width = img.getAttribute('width') || img.style.width || '';
  const height = img.getAttribute('height') || img.style.height || '';
  const style = img.getAttribute('style') || '';
  
  // 从 style 中提取宽高（如果存在）
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
  
  // 如果是 base64 图片，直接使用
  if (src.startsWith('data:image')) {
    return `![${alt}](${src})`;
  }
  
  // 处理飞书域名的图片
  if (src.includes('feishu.cn') || src.includes('larksuite.com')) {
    // 确保使用 https
    if (!src.startsWith('http')) {
      src = 'https:' + src;
    }
  }
  
  // 构建 HTML 格式的图片标签以保持尺寸
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

// 处理单元格内容的辅助函数
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

// 配置飞书特殊的代码块规则
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

const defaultContent = `# 飞书文档转公众号排版工具

这是一个强大的**飞书文档转换工具**，可以帮助你快速将飞书文档转换为美观的公众号文章。

## 🚀 核心功能

| 功能 | 描述 | 支持情况 |
|:--|:--|:--:|
| 一键转换 | 从飞书文档直接复制，自动转换为 Markdown | ✓ |
| 实时预览 | 支持手机和电脑两种预览模式 | ✓ |
| 多种主题 | 提供默认、暖色、极简三种主题 | ✓ |
| 完整样式 | 支持图片、表格、代码等富文本格式 | ✓ |

## 📝 使用方法

1. 打开飞书文档，复制需要转换的内容
2. 粘贴到左侧编辑区
3. 右侧实时预览效果
4. 点击复制按钮，粘贴到公众号

## 🎨 支持的样式

### 文本格式化
- **重点内容**使用粗体
- *需要强调*使用斜体
- \`重要代码\`使用行内代码
- ~~已废弃内容~~使用删除线

### 代码展示

\`\`\`javascript
// 支持代码高亮
function formatDocument(content) {
  return markdown.format(content);
}
\`\`\`

### 引用示例

> 💡 小贴士：可以使用快捷键 \`Ctrl+V\` (Windows) 或 \`Command+V\` (Mac) 直接粘贴飞书文档内容。

### 列表功能

#### 无序列表
- 支持基础列表
  - 支持多级列表
  - 自动缩进对齐
- 保持飞书格式

#### 有序列表
1. 第一步：复制飞书内容
2. 第二步：粘贴到编辑器
   1. 自动转换格式
   2. 实时预览效果
3. 第三步：复制到公众号

## 🌈 主题切换

右下角提供了三种主题：
1. ☀️ 默认主题 - 清新简约
2. 💧 暖色主题 - 柔和舒适
3. 🪶 极简主题 - 简约大方

## 📱 预览模式

支持两种预览模式：
- 手机预览 - 直观感受公众号效果
- 电脑预览 - 宽屏编辑更方便

## 🔍 更多信息

访问[项目介绍](https://mp.weixin.qq.com/s/apH33XoZFtNwtRlkoqTX_Q)了解更多信息。

---

## 🎯 后续规划

- [x] 基础功能完善
- [x] 多主题支持
- [ ] 自定义主题
- [ ] 更多预设模板

> 📢 如果你觉得这个工具有帮助，欢迎分享给更多人！
`;

const Home: React.FC = () => {
  const [markdown, setMarkdown] = useState(defaultContent);
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isMobilePreview, setIsMobilePreview] = useState(true);
  const previewRef = useRef<HTMLDivElement>(null);
  const previewWrapperRef = useRef<HTMLDivElement>(null);
  const { themeName, setTheme, currentTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    document.documentElement.setAttribute('data-color-mode', 'light');
  }, []);

  useEffect(() => {
    if (previewWrapperRef.current) {
      previewWrapperRef.current.scrollTop = 0;
    }
  }, [isMobilePreview]);

  const handleCopyToWeixin = async () => {
    try {
      // 创建包含样式的HTML blob
      const blob = new Blob([previewRef.current?.innerHTML || ''], { type: 'text/html' });
      
      // 复制到剪贴板
      await navigator.clipboard.write([
        new ClipboardItem({
          'text/html': blob
        })
      ]);
      
      // 显示成功提示
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('复制失败:', error);
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const html = e.clipboardData.getData('text/html');
    if (html) {
      e.preventDefault();
      const markdownContent = turndownService.turndown(html);
      setMarkdown(markdownContent);
    }
  };

  // 主题切换按钮配置
  const themeButtons = [
    { name: 'default', icon: FiSun, title: '默认主题' },
    { name: 'warm', icon: FiDroplet, title: '暖色主题' },
    { name: 'minimalist', icon: FiFeather, title: '极简主题' },
  ];

  if (!mounted) {
    return (
      <div className="flex h-screen bg-gray-100">
        <div className="w-1/2 p-4 bg-white shadow-lg">
          <div className="h-full bg-gray-100 animate-pulse" />
        </div>
        <div className="w-1/2 p-4">
          <div className="max-w-[780px] mx-auto bg-white p-8 shadow-lg">
            <div className="h-full bg-gray-100 animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* 左侧编辑器 */}
      <div className="w-1/2 p-4 bg-white shadow-lg flex flex-col">
        <h1 className="mb-4 px-4 py-2 flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
          <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          飞书文档转公众号
          <span className="text-sm font-normal text-gray-500">排版工具</span>
        </h1>
        <div className="flex-1 overflow-hidden" data-color-mode="light">
          <MDEditor
            value={markdown}
            onChange={(value) => setMarkdown(value || '')}
            height="100%"
            preview="edit"
            hideToolbar={false}
            visibleDragbar={false}
            enableScroll={true}
            toolbarHeight={48}
            previewOptions={{
              style: {
                display: 'none'
              }
            }}
            textareaProps={{
              placeholder: '在这里输入 Markdown 内容...',
              style: {
                background: 'white',
                padding: 0,
              },
              onPaste: handlePaste,
            }}
          />
        </div>
      </div>

      {/* 右侧预览 */}
      <div ref={previewWrapperRef} className="w-1/2 p-4 overflow-auto bg-gray-50 relative">
        <div className={`transition-all duration-300 ${
          isMobilePreview 
            ? 'mobile-preview mx-auto my-8'
            : 'max-w-[780px] mx-auto bg-white p-8 shadow-lg'
        }`}>
          {isMobilePreview && (
            <div className="phone-notch">
              <div className="phone-speaker"></div>
              <div className="phone-camera"></div>
            </div>
          )}
          
          <div className={`${isMobilePreview ? 'p-4 overflow-auto' : ''}`}>
            <div ref={previewRef} className="flex-1 overflow-auto px-4">
              <Preview content={markdown} />
            </div>
          </div>
        </div>

        {/* 功能按钮组 */}
        <div className="fixed bottom-8 right-8 flex flex-col gap-4">
          {/* 主题切换按钮组 */}
          <div className="flex flex-col gap-2">
            {themeButtons.map(({ name, icon: Icon, title }) => (
              <button
                key={name}
                onClick={() => setTheme(name as ThemeName)}
                title={title}
                className={`w-10 h-10 flex items-center justify-center rounded-full 
                  ${themeName === name 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                  } shadow-lg transition-all duration-75 hover:scale-105`}
              >
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>

          {/* 预览模式切换按钮 */}
          <button
            onClick={() => setIsMobilePreview(!isMobilePreview)}
            title={isMobilePreview ? '切换到电脑预览' : '切换到手机预览'}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-all duration-75 hover:scale-105"
          >
            {isMobilePreview ? (
              <FiMonitor className="w-5 h-5" />
            ) : (
              <FiSmartphone className="w-5 h-5" />
            )}
          </button>

          {/* 复制按钮 */}
          <button
            onClick={handleCopyToWeixin}
            title={copied ? '已复制' : '复制到公众号'}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-all duration-75 hover:scale-105"
          >
            {copied ? (
              <FiCheck className="w-5 h-5" />
            ) : (
              <FiCopy className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

// 包装组件
export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
