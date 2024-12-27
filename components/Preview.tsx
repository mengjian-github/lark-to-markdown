import React, { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import Image from 'next/image';
import { defaultTheme } from '../themes/default';
import { generateInlineStyles } from '../utils/themeUtils';

interface PreviewProps {
  content: string;
}

interface ComponentProps {
  children?: ReactNode;
  [key: string]: any;
}

const Preview: React.FC<PreviewProps> = ({ content }) => {
  const styles = generateInlineStyles(defaultTheme);
  
  const components: Partial<Components> = {
    h1: ({ children }: ComponentProps) => <h1 style={styles.h1}>{children}</h1>,
    h2: ({ children }: ComponentProps) => <h2 style={styles.h2}>{children}</h2>,
    h3: ({ children }: ComponentProps) => <h3 style={styles.h3}>{children}</h3>,
    h4: ({ children }: ComponentProps) => <h4 style={styles.h4}>{children}</h4>,
    h5: ({ children }: ComponentProps) => <h5 style={styles.h5}>{children}</h5>,
    h6: ({ children }: ComponentProps) => <h6 style={styles.h6}>{children}</h6>,
    p: ({ children }: ComponentProps) => <p style={styles.p}>{children}</p>,
    img: ({ src, alt, ...props }: ComponentProps) => (
      src ? (
        <div style={{ margin: styles.img.margin }}>
          <Image
            src={src}
            alt={alt || ''}
            width={800}
            height={600}
            style={{ ...styles.img, margin: 0 }}
            className="rich_pages wxw-img"
            unoptimized={src.startsWith('data:') || src.includes('feishu.cn') || src.includes('larksuite.com')}
            data-origin-src={src}
          />
        </div>
      ) : null
    ),
    pre: ({ children }: ComponentProps) => <pre style={styles.pre}>{children}</pre>,
    code: ({ inline, children }: ComponentProps & { inline?: boolean }) => (
      <code style={inline ? styles.codeInline : styles.codeBlock}>
        {children}
      </code>
    ),
    table: ({ children }: ComponentProps) => <table style={styles.table}>{children}</table>,
    th: ({ children }: ComponentProps) => <th style={styles.th}>{children}</th>,
    td: ({ children }: ComponentProps) => <td style={styles.td}>{children}</td>,
    blockquote: ({ children }: ComponentProps) => <blockquote style={styles.blockquote}>{children}</blockquote>,
    ul: ({ children, depth = 0 }: ComponentProps & { depth?: number }) => (
      <ul style={depth === 0 ? styles.ul : depth === 1 ? styles.ulNested1 : styles.ulNested2}>
        {children}
      </ul>
    ),
    ol: ({ children, depth = 0 }: ComponentProps & { depth?: number }) => (
      <ol style={depth === 0 ? styles.ol : depth === 1 ? styles.olNested1 : styles.olNested2}>
        {children}
      </ol>
    ),
    li: ({ children }: ComponentProps) => <li style={styles.li}>{children}</li>,
    a: ({ children, href }: ComponentProps) => (
      <a href={href} target="_blank" rel="noopener noreferrer" style={styles.a}>
        {children}
      </a>
    ),
    hr: () => <hr style={styles.hr} />,
    strong: ({ children }: ComponentProps) => <strong style={styles.strong}>{children}</strong>,
    em: ({ children }: ComponentProps) => <em style={styles.em}>{children}</em>,
  };

  return (
    <div style={styles.div}>
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
};

export default Preview;
