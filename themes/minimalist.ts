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
    fontWeight: '600',
    letterSpacing: '0.02em',
    h1: {
      fontSize: '28px',
      margin: '1.2em 0 0.8em',
      textAlign: 'center',
      borderBottom: '2px solid #34495e',
      paddingBottom: '0.4em',
      position: 'relative',
    },
    h2: {
      fontSize: '22px',
      margin: '1.8em 0 0.8em',
      borderLeft: '4px solid #34495e',
      paddingLeft: '12px',
      color: '#34495e',
    },
    h3: {
      fontSize: '18px',
      margin: '1.5em 0 0.8em',
      color: '#34495e',
    },
    h4: {
      fontSize: '16px',
      margin: '1.2em 0 0.6em',
    },
    h5: {
      fontSize: '15px',
      margin: '1em 0 0.6em',
    },
    h6: {
      fontSize: '14px',
      margin: '1em 0 0.6em',
      color: '#4a5568',
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
    fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
    fontSize: '0.9em',
    lineHeight: '1.6',
    block: {
      background: '#f8f9fa',
      padding: '1em',
      margin: '1.5em 0',
      borderRadius: '4px',
      color: '#2c3e50',
      overflow: 'auto',
    },
    inline: {
      background: '#f5f7fa',
      padding: '0.2em 0.4em',
      borderRadius: '3px',
      color: '#476582',
      fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
    },
  },
  table: {
    width: '100%',
    margin: '1em 0',
    fontSize: '14px',
    borderCollapse: 'collapse',
    borderSpacing: '0',
    border: '1px solid #e2e8f0',
    cell: {
      padding: '8px 16px',
      border: '1px solid #e2e8f0',
    },
    header: {
      background: '#f7fafc',
      fontWeight: '600',
      border: '1px solid #dae1e7',
    },
  },
  blockquote: {
    margin: '1.5em 0',
    padding: '0.8em 1.2em',
    borderLeft: '4px solid #34495e',
    fontStyle: 'normal',
    color: '#4a5568',
    background: '#f5f7fa',
    borderRadius: '0 4px 4px 0',
  },
  list: {
    margin: '1em 0',
    padding: '0 0 0 2em',
    item: {
      margin: '0.5em 0',
      lineHeight: '1.6',
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
    color: '#34495e',
    textDecoration: 'none',
    borderBottom: '1px dotted #eaecef',
  },
  hr: {
    margin: '1.5em 0',
    border: '1px solid #e2e8f0',
  },
  emphasis: {
    strong: {
      color: '#34495e',
      fontWeight: 'bold',
    },
    em: {
      color: '#7f8c8d',
      fontStyle: 'italic',
    },
  },
}; 