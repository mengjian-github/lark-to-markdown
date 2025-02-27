import { Theme } from './default';

export const minimalistTheme: Theme = {
  base: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#2c3e50',
    letterSpacing: '0.03em',
    textAlign: 'left',
  },
  headings: {
    color: '#34495e',
    fontWeight: '500',
    letterSpacing: '0.05em',
    h1: {
      fontSize: '24px',
      margin: '2em 0 1em',
      textAlign: 'center',
      borderBottom: '1px solid #eaeaea',
      paddingBottom: '0.5em',
      position: 'relative',
    },
    h2: {
      fontSize: '20px',
      margin: '2em 0 1em',
      borderLeft: '2px solid #34495e',
      paddingLeft: '12px',
      color: '#34495e',
    },
    h3: {
      fontSize: '17px',
      margin: '1.5em 0 0.8em',
      color: '#3498db',
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
      color: '#7f8c8d',
    },
  },
  paragraph: {
    margin: '1em 0',
    lineHeight: '1.75',
  },
  image: {
    maxWidth: '100%',
    margin: '1.5em auto',
    borderRadius: '4px',
  },
  code: {
    fontFamily: 'Consolas, Monaco, "Courier New", monospace',
    fontSize: '13px',
    lineHeight: '1.6',
    block: {
      margin: '1.5em 0',
      padding: '1em',
      borderRadius: '4px',
      background: '#f8f9fa',
      color: '#333333',
      overflow: 'auto',
      fontSize: '14px',
      lineHeight: '1.6',
    },
    inline: {
      padding: '0.2em 0.4em',
      borderRadius: '3px',
      background: '#f5f7fa',
      color: '#3498db',
      fontFamily: 'Consolas, Monaco, "Courier New", monospace',
      fontSize: '85%',
    },
  },
  table: {
    width: '100%',
    margin: '1.5em 0',
    fontSize: '14px',
    borderCollapse: 'collapse',
    borderSpacing: '0',
    border: '1px solid #eaecef',
    cell: {
      padding: '8px 16px',
      border: '1px solid #eaecef',
    },
    header: {
      background: '#f8f9fa',
      fontWeight: '500',
      border: '1px solid #eaecef',
    },
  },
  blockquote: {
    margin: '1.5em 0',
    padding: '0 0 0 1em',
    background: 'transparent',
    borderRadius: '0',
    color: '#7f8c8d',
    borderLeft: '2px solid #e0e0e0',
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
    color: '#3498db',
    textDecoration: 'none',
    borderBottom: '1px solid #e0e0e0',
  },
  hr: {
    margin: '2em 0',
    border: '1px solid #f0f0f0',
  },
  emphasis: {
    strong: {
      color: '#34495e',
      fontWeight: '500',
    },
    em: {
      color: '#7f8c8d',
      fontStyle: 'italic',
    },
  },
}; 