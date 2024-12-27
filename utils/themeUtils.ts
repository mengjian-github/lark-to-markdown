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
      background: theme.code.block.background,
      padding: theme.code.block.padding,
      margin: theme.code.block.margin,
      borderRadius: theme.code.block.borderRadius,
      overflowX: 'auto' as const,
      fontSize: theme.code.fontSize,
      lineHeight: theme.code.lineHeight,
      color: theme.code.block.color,
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
    },
    th: {
      border: `1px solid ${theme.table.borderColor}`,
      padding: theme.table.cell.padding,
      textAlign: 'left' as const,
      background: theme.table.header.background,
      fontWeight: theme.table.header.fontWeight,
    },
    td: {
      border: `1px solid ${theme.table.borderColor}`,
      padding: theme.table.cell.padding,
      textAlign: 'left' as const,
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
  };
}

export function applyThemeStyles(content: string, theme: Theme) {
  const styles = generateInlineStyles(theme);
  
  const styleToString = (style: Record<string, string | number>) => {
    return Object.entries(style)
      .map(([key, value]) => `${key.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}:${value}`)
      .join(';');
  };
  
  return content
    .replace(/<div[^>]*>/g, `<div style="${styleToString(styles.div)}">`)
    .replace(/<h1[^>]*>(.*?)<\/h1>/g, `<h1 style="${styleToString(styles.h1)}">$1</h1>`)
    .replace(/<h2[^>]*>(.*?)<\/h2>/g, `<h2 style="${styleToString(styles.h2)}">$1</h2>`)
    .replace(/<h3[^>]*>(.*?)<\/h3>/g, `<h3 style="${styleToString(styles.h3)}">$1</h3>`)
    .replace(/<p[^>]*>(.*?)<\/p>/g, `<p style="${styleToString(styles.p)}">$1</p>`)
    .replace(/<img([^>]*)>/g, `<img$1 style="${styleToString(styles.img)}" data-type="jpeg" class="rich_pages wxw-img" />`)
    .replace(/<pre[^>]*>([\s\S]*?)<\/pre>/g, `<pre style="${styleToString(styles.pre)}">$1</pre>`)
    .replace(/<code[^>]*>([\s\S]*?)<\/code>/g, (match, content) => {
      const isInPre = match.includes('class="language-');
      return `<code style="${styleToString(isInPre ? styles.codeBlock : styles.codeInline)}">${content}</code>`;
    })
    .replace(/<table[^>]*>/g, `<table style="${styleToString(styles.table)}">`)
    .replace(/<th[^>]*>(.*?)<\/th>/g, `<th style="${styleToString(styles.th)}">$1</th>`)
    .replace(/<td[^>]*>(.*?)<\/td>/g, `<td style="${styleToString(styles.td)}">$1</td>`)
    .replace(/<blockquote[^>]*>(.*?)<\/blockquote>/g, `<blockquote style="${styleToString(styles.blockquote)}">$1</blockquote>`)
    .replace(/<ul[^>]*>/g, `<ul style="${styleToString(styles.ul)}">`)
    .replace(/<ol[^>]*>/g, `<ol style="${styleToString(styles.ol)}">`)
    .replace(/<li[^>]*>(.*?)<\/li>/g, `<li style="${styleToString(styles.li)}">$1</li>`)
    .replace(/<a([^>]*)>(.*?)<\/a>/g, `<a$1 style="${styleToString(styles.a)}">$2</a>`)
    .replace(/<hr[^>]*>/g, `<hr style="${styleToString(styles.hr)}" />`)
    .replace(/<strong[^>]*>(.*?)<\/strong>/g, `<strong style="${styleToString(styles.strong)}">$1</strong>`)
    .replace(/<em[^>]*>(.*?)<\/em>/g, `<em style="${styleToString(styles.em)}">$1</em>`);
} 