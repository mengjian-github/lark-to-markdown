import React from 'react';
import ReactMarkdown from 'react-markdown';

// 创建一个独立的样式，只应用于预览区域
const previewStyles = `
  .markdown-preview {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    line-height: 1.8;
    color: #333;
    letter-spacing: 0.05em;
    text-align: justify;
  }
  
  .markdown-preview h1,
  .markdown-preview h2,
  .markdown-preview h3,
  .markdown-preview h4,
  .markdown-preview h5 {
    font-weight: bold;
    color: #000;
    margin: 1.5em 0 1em;
    line-height: 1.5;
    letter-spacing: 0.08em;
  }

  .markdown-preview h1 {
    font-size: 24px;
    margin-top: 1em;
    text-align: center;
  }

  .markdown-preview h2 {
    font-size: 20px;
    border-left: 4px solid #1890ff;
    padding-left: 12px;
  }

  .markdown-preview h3 {
    font-size: 18px;
  }

  .markdown-preview p {
    margin: 1.5em 0;
    line-height: 2;
  }

  .markdown-preview img {
    max-width: 100%;
    height: auto;
    margin: 2em auto;
    display: block;
    border-radius: 4px;
  }

  .markdown-preview pre {
    background: #f8f9fa;
    padding: 1em;
    margin: 1.5em 0;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 14px;
    line-height: 1.6;
    color: #24292e;
  }

  .markdown-preview code {
    font-family: Consolas, Monaco, "Courier New", monospace;
    background: #f0f2f5;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 0.9em;
    color: #e83e8c;
  }

  .markdown-preview pre code {
    background: none;
    padding: 0;
    color: inherit;
  }

  .markdown-preview table {
    border-collapse: collapse;
    width: 100%;
    margin: 2em 0;
    font-size: 15px;
  }

  .markdown-preview th,
  .markdown-preview td {
    border: 1px solid #e8e8e8;
    padding: 0.8em;
    text-align: left;
  }

  .markdown-preview th {
    background: #f7f7f7;
    font-weight: 600;
  }

  .markdown-preview tr:nth-child(even) {
    background: #fafafa;
  }

  .markdown-preview blockquote {
    margin: 2em 0;
    padding: 1em 1.5em;
    background: #f8f9fa;
    border-radius: 4px;
    color: #666;
    position: relative;
  }

  .markdown-preview blockquote::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #1890ff;
    border-radius: 2px;
  }

  .markdown-preview ul,
  .markdown-preview ol {
    margin: 1.5em 0;
    padding-left: 2em;
  }

  .markdown-preview li {
    margin: 0.5em 0;
    line-height: 1.8;
  }

  .markdown-preview a {
    color: #1890ff;
    text-decoration: none;
    border-bottom: 1px solid #1890ff;
  }

  .markdown-preview hr {
    margin: 2em 0;
    border: none;
    border-top: 1px solid #e8e8e8;
  }

  .markdown-preview strong {
    color: #222;
    font-weight: 600;
  }

  .markdown-preview em {
    font-style: italic;
    color: #666;
  }
`;

interface PreviewProps {
  content: string;
}

const Preview: React.FC<PreviewProps> = ({ content }) => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: previewStyles }} />
      <div className="markdown-preview">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </>
  );
};

export default Preview;
