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
  const [isMobilePreview, setIsMobilePreview] = useState(true);
  const { themeName, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    document.documentElement.setAttribute('data-color-mode', 'light');
  }, []);

  const handleCopyToWeixin = async () => {
    try {
      // 获取预览区域的HTML内容
      const previewElement = document.querySelector('.flex-1.overflow-auto.px-4');
      if (!previewElement) {
        throw new Error('预览元素未找到');
      }
      
      const htmlContent = previewElement.innerHTML || '';
      
      // 处理HTML内容以便复制到微信公众号
      const processedHtml = processHtmlForWeixin(htmlContent);
      
      // 创建包含处理后样式的HTML blob
      const blob = new Blob([processedHtml], { type: 'text/html' });
      
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
        handleCopyToWeixin={handleCopyToWeixin}
      />
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
