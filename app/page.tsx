'use client';

import React, { useEffect, useState } from 'react';
import '@uiw/react-md-editor/markdown-editor.css';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import EditorPanel from '../components/EditorPanel';
import PreviewPanel from '../components/PreviewPanel';
import { defaultContent } from '../utils/defaultContent';
import { convertHtmlToMarkdown, processHtmlForWeixin } from '../utils/markdownConverter';

const Home: React.FC = () => {
  const [markdown, setMarkdown] = useState(defaultContent);
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState<string | null>(null);
  const [isCopying, setIsCopying] = useState(false);
  const [isMobilePreview, setIsMobilePreview] = useState(true);
  const { themeName, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    document.documentElement.setAttribute('data-color-mode', 'light');
  }, []);

  const handleCopyToWeixin = async () => {
    // 重置状态
    setCopied(false);
    setCopyError(null);
    setIsCopying(true);
    
    try {
      document.body.style.cursor = 'wait';
      
      // 获取预览内容
      const contentElement = isMobilePreview
        ? document.querySelector('.mobile-preview .markdown-body') || document.querySelector('.mobile-preview .px-2 > div')
        : document.querySelector('.max-w-\\[780px\\] .markdown-body') || document.querySelector('.flex-1.overflow-auto.px-4 > div');
      
        if (!contentElement) {
        throw new Error('无法获取预览内容，请尝试刷新页面或切换预览模式');
      }
      
      const previewContent = contentElement.outerHTML;
      
      // 处理HTML内容以便复制到微信公众号
      const processedHtml = processHtmlForWeixin(previewContent);
      
      // 创建包含处理后样式的HTML blob
      const blob = new Blob([processedHtml], { type: 'text/html' });
      
      // 检查 navigator.clipboard 是否可用
      if (!navigator.clipboard || !navigator.clipboard.write) {
        throw new Error('您的浏览器不支持高级剪贴板功能，请尝试使用Chrome或Edge浏览器');
      }
      
      // 复制到剪贴板
      await navigator.clipboard.write([
        new ClipboardItem({
          'text/html': blob
        })
      ]);
      
      // 显示成功提示
      setCopied(true);
      
      // 添加成功动画效果
      const copyBtn = document.querySelector('.copy-btn') as HTMLElement;
      if (copyBtn) {
        copyBtn.classList.add('copy-success');
        setTimeout(() => copyBtn.classList.remove('copy-success'), 1000);
      }
      
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error('复制失败:', error);
      setCopyError(error instanceof Error ? error.message : '未知错误');
      setTimeout(() => setCopyError(null), 5000);
    } finally {
      document.body.style.cursor = '';
      setIsCopying(false);
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const html = e.clipboardData.getData('text/html');
    if (html) {
      e.preventDefault();
      const markdownContent = convertHtmlToMarkdown(html);
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
      <EditorPanel 
        markdown={markdown}
        onChange={(value) => setMarkdown(value || '')}
        onPaste={handlePaste}
      />

      {/* 右侧预览 */}
      <PreviewPanel 
        markdown={markdown}
        isMobilePreview={isMobilePreview}
        setIsMobilePreview={setIsMobilePreview}
        themeName={themeName}
        setTheme={setTheme}
        copied={copied}
        copyError={copyError}
        isCopying={isCopying}
        handleCopyToWeixin={handleCopyToWeixin}
      />
      
      <style jsx global>{`
        .copy-success {
          animation: pulse 1s;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        .btn-loading {
          position: relative;
          pointer-events: none;
        }
        
        .btn-loading:after {
          content: '';
          position: absolute;
          width: 16px;
          height: 16px;
          top: 50%;
          left: 50%;
          margin-top: -8px;
          margin-left: -8px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-top-color: white;
          animation: spin 0.8s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
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
