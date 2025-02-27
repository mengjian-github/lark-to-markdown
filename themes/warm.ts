import { Theme } from './default';

export const warmTheme: Theme = {
  base: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#3d3d3d',
    letterSpacing: '0.03em',
    textAlign: 'left',
  },
  headings: {
    color: '#e67e22',
    fontWeight: '600',
    letterSpacing: '0.05em',
    h1: {
      fontSize: '26px',
      margin: '1.8em 0 1em',
      textAlign: 'center',
      borderBottom: '1px solid #e67e22',
      paddingBottom: '0.5em',
      position: 'relative',
    },
    h2: {
      fontSize: '21px',
      margin: '2em 0 1em',
      borderLeft: '4px solid #e67e22',
      paddingLeft: '12px',
      color: '#e67e22',
    },
    h3: {
      fontSize: '18px',
      margin: '1.5em 0 0.8em',
      color: '#f39c12',
    },
    h4: {
      fontSize: '16px',
      margin: '1.2em 0 0.8em',
    },
    h5: {
      fontSize: '15px',
      margin: '1em 0 0.8em',
    },
    h6: {
      fontSize: '14px',
      margin: '1em 0 0.8em',
      color: '#666666',
    },
  },
  paragraph: {
    margin: '1em 0',
    lineHeight: '1.75',
  },
  image: {
    maxWidth: '100%',
    margin: '1.2em auto',
    borderRadius: '6px',
  },
  code: {
    fontFamily: 'Consolas, Monaco, "Courier New", monospace',
    fontSize: '13px',
    lineHeight: '1.6',
    block: {
      margin: '1.5em 0',
      padding: '1em',
      borderRadius: '5px',
      background: '#fffaf5',
      color: '#c25e00',
      overflow: 'auto',
      fontSize: '14px',
      lineHeight: '1.6',
    },
    inline: {
      padding: '0.2em 0.4em',
      borderRadius: '3px',
      background: 'transparent',
      color: '#d35400',
      fontFamily: 'Consolas, Monaco, "Courier New", monospace',
      fontSize: '85%',
    },
  },
  table: {
    width: '100%',
    margin: '1.2em 0',
    fontSize: '14px',
    borderCollapse: 'collapse',
    borderSpacing: '0',
    border: '1px solid #f0d0b0',
    cell: {
      padding: '8px 16px',
      border: '1px solid #f0d0b0',
    },
    header: {
      background: '#fff8f0',
      fontWeight: '600',
      border: '1px solid #f0d0b0',
    },
  },
  blockquote: {
    margin: '1.5em 0',
    padding: '0 0 0 1em',
    background: 'transparent',
    borderRadius: '0',
    color: '#666666',
    borderLeft: '4px solid rgba(230, 126, 34, 0.5)',
    fontStyle: 'italic',
  },
  list: {
    margin: '1em 0',
    padding: '0 0 0 1.5em',
    item: {
      margin: '0.3em 0',
      lineHeight: '1.75',
    },
    unordered: {
      listStyleType: 'disc',
      nestedLevel1: {
        listStyleType: 'circle',
      },
      nestedLevel2: {
        listStyleType: 'square',
      },
    },
    ordered: {
      listStyleType: 'decimal',
      nestedLevel1: {
        listStyleType: 'lower-alpha',
      },
      nestedLevel2: {
        listStyleType: 'lower-roman',
      },
    },
  },
  link: {
    color: '#d35400',
    textDecoration: 'none',
    borderBottom: '1px solid #d35400',
  },
  hr: {
    margin: '1.5em 0',
    border: '1px solid #f0d0b0',
  },
  emphasis: {
    strong: {
      color: '#d35400',
      fontWeight: '600',
    },
    em: {
      color: '#666666',
      fontStyle: 'italic',
    },
  },
}; 