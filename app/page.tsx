'use client';

import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import TurndownService from 'turndown';
import { FiCopy, FiCheck, FiSmartphone, FiMonitor } from 'react-icons/fi';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import Preview from '../components/Preview';

const MDEditor = dynamic(
  () => import('@uiw/react-md-editor').then((mod) => mod.default),
  { ssr: false }
);

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  emDelimiter: '*',
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
  
  // 构建 HTML 格式的图���标签以保持尺寸
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
      markdown += '| ' + alignments.join(' | ') + ' |\n';
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

快速将飞书文档转换为精美的公众号文章！

## 核心功能

1. ✨ 一键转换：从飞书文档直接复制，自动转换为 Markdown
2. 📱 实时预览：支持手机和电脑两种预览模式
3. 🎨 完整样式：完美支持图片、表格、代码块等格式
4. 🚀 一键复制：轻松粘贴到公众号后台

## 使用方法

1. 打开飞书文档，复制需要转换的内容
2. 粘贴到左侧编辑区
3. 右侧实时预览效果
4. 点击复制按钮，粘贴到公众号

## 特色功能

- ✅ 保持图片尺寸和样式
- ✅ 保持表格对齐方式
- ✅ 支持代码高亮
- ✅ 支持 Markdown 语法
`;

export default function Home() {
  const [markdown, setMarkdown] = useState(defaultContent);
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isMobilePreview, setIsMobilePreview] = useState(true);
  const previewRef = useRef<HTMLDivElement>(null);
  const previewWrapperRef = useRef<HTMLDivElement>(null);

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
    if (!previewRef.current) return;
    
    try {
      // 创建一个隔离的容器
      const container = document.createElement('div');
      container.style.cssText = 'all: initial;'; // 重置所有样式
      
      // 创建一个 shadow DOM
      const shadowRoot = container.attachShadow({ mode: 'open' });
      
      // 添加基础样式
      const style = document.createElement('style');
      style.textContent = `
        :host {
          all: initial;
          display: block;
        }
        div {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          font-size: 16px;
          line-height: 1.8;
          color: #333;
          letter-spacing: 0.05em;
          text-align: justify;
        }
        h1, h2, h3, h4, h5 {
          font-weight: bold;
          color: #000;
          margin: 1.5em 0 1em;
          line-height: 1.5;
          letter-spacing: 0.08em;
        }
        h1 {
          font-size: 24px;
          margin-top: 1em;
          text-align: center;
        }
        h2 {
          font-size: 20px;
          border-left: 4px solid #1890ff;
          padding-left: 12px;
        }
        h3 { font-size: 18px; }
        p {
          margin: 1.5em 0;
          line-height: 2;
        }
        img {
          max-width: 100%;
          height: auto;
          margin: 2em auto;
          display: block;
          border-radius: 4px;
        }
        pre {
          background: #f8f9fa;
          padding: 1em;
          margin: 1.5em 0;
          border-radius: 4px;
          overflow-x: auto;
          font-size: 14px;
          line-height: 1.6;
          color: #24292e;
        }
        code {
          font-family: Consolas, Monaco, "Courier New", monospace;
          background: #f0f2f5;
          padding: 0.2em 0.4em;
          border-radius: 3px;
          font-size: 0.9em;
          color: #e83e8c;
        }
        pre code {
          background: none;
          padding: 0;
          color: inherit;
        }
        table {
          border-collapse: collapse;
          width: 100%;
          margin: 2em 0;
          font-size: 15px;
        }
        th, td {
          border: 1px solid #e8e8e8;
          padding: 0.8em;
          text-align: left;
        }
        th {
          background: #f7f7f7;
          font-weight: 600;
        }
        tr:nth-child(even) {
          background: transparent;
        }
        blockquote {
          margin: 2em 0;
          padding: 1em 1.5em;
          background: #f8f9fa;
          border-radius: 4px;
          color: #666;
          position: relative;
        }
        blockquote::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: #1890ff;
          border-radius: 2px;
        }
        ul, ol {
          margin: 1.5em 0;
          padding-left: 2em;
        }
        li {
          margin: 0.5em 0;
          line-height: 1.8;
        }
        a {
          color: #1890ff;
          text-decoration: none;
          border-bottom: 1px solid #1890ff;
        }
        hr {
          margin: 2em 0;
          border: none;
          border-top: 1px solid #e8e8e8;
        }
        /* 强调样式 */
        strong {
          color: #222;
          font-weight: 600;
        }
        em {
          font-style: italic;
          color: #666;
        }
      `;
      
      // 创建内容容器
      const content = document.createElement('div');
      content.innerHTML = previewRef.current.innerHTML;
      
      // 清理内容中的样式和类
      const cleanNode = (node: Element) => {
        node.removeAttribute('class');
        node.removeAttribute('style');
        Array.from(node.children).forEach(child => cleanNode(child));
      };
      cleanNode(content);
      
      // 处理图片路径
      const images = content.querySelectorAll('img');
      images.forEach(img => {
        if (img.src.startsWith('/')) {
          img.src = window.location.origin + img.src;
        }
      });
      
      // 将样式和内容添加到 shadow DOM
      shadowRoot.appendChild(style);
      shadowRoot.appendChild(content);
      
      // 将容器添加到文档中
      document.body.appendChild(container);

      // 构建包含样式的 HTML 字符串
      const htmlContent = `
        <style>
          ${style.textContent}
        </style>
        ${content.innerHTML}
      `;

      // 使用 Clipboard API 复制 HTML 内容
      const blob = new Blob([htmlContent], { type: 'text/html' });
      await navigator.clipboard.write([
        new ClipboardItem({
          'text/html': blob
        })
      ]);
      
      // 清理
      document.body.removeChild(container);
      
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
          <button
            onClick={() => setIsMobilePreview(!isMobilePreview)}
            title={isMobilePreview ? '切换到电脑预览' : '切换到手机预览'}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-500 hover:bg-purple-600 text-white shadow-lg transition-all duration-200 hover:scale-110"
          >
            {isMobilePreview ? (
              <FiMonitor className="w-6 h-6" />
            ) : (
              <FiSmartphone className="w-6 h-6" />
            )}
          </button>
          <button
            onClick={handleCopyToWeixin}
            title={copied ? '复制成功！' : '复制到公众号'}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-all duration-200 hover:scale-110"
          >
            {copied ? (
              <FiCheck className="w-6 h-6" />
            ) : (
              <FiCopy className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
