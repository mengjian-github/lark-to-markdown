import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '飞书文档转公众号 | 在线排版工具',
  description: '专业的飞书文档转微信公众号编辑器，支持一键排版、Markdown 编辑、实时预览。完美支持飞书文档图片、表格、代码块等格式转换，让公众号排版更轻松。',
  keywords: '飞书文档,微信公众号,排版工具,markdown编辑器,在线排版,文档转换,飞书转公众号,公众号编辑器',
  authors: [{ name: '飞书文档转换工具' }],
  openGraph: {
    title: '飞书文档转公众号 | 在线排版工具',
    description: '一键将飞书文档转换为美观的公众号文章，支持图片、表格、代码等完整格式',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://lark-to-markdown.vercel.app" />
      </head>
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
