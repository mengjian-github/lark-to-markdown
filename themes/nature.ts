import { Theme } from './default';

export const natureTheme: Theme = {
  base: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#343434',
    letterSpacing: '0.03em',
    textAlign: 'left',
  },
  headings: {
    color: '#2e7d32',
    fontWeight: '600',
    letterSpacing: '0.02em',
    h1: {
      fontSize: '28px',
      margin: '1.5em 0 1em',
      textAlign: 'center',
      borderBottom: '2px solid #2e7d32',
      paddingBottom: '0.5em',
      position: 'relative',
    },
    h2: {
      fontSize: '22px',
      margin: '2em 0 1em',
      borderLeft: '4px solid #2e7d32',
      paddingLeft: '12px',
      color: '#2e7d32',
    },
    h3: {
      fontSize: '18px',
      margin: '1.8em 0 1em',
      color: '#2e7d32',
    },
    h4: {
      fontSize: '16px',
      margin: '1.5em 0 0.8em',
    },
    h5: {
      fontSize: '15px',
      margin: '1.2em 0 0.8em',
    },
    h6: {
      fontSize: '14px',
      margin: '1.2em 0 0.8em',
      color: '#4a5568',
    },
  },
  paragraph: {
    margin: '1.2em 0',
    lineHeight: '1.75',
  },
  image: {
    maxWidth: '100%',
    margin: '1.5em auto',
    borderRadius: '4px',
  },
  code: {
    fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
    fontSize: '14px',
    lineHeight: '1.6',
    block: {
      background: '#f1f8e9',
      padding: '1.2em',
      margin: '1.8em 0',
      borderRadius: '4px',
      color: '#3c4a3c',
      overflow: 'auto',
    },
    inline: {
      background: '#e8f5e9',
      padding: '0.2em 0.4em',
      borderRadius: '3px',
      color: '#2e7d32',
      fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
    },
  },
  table: {
    width: '100%',
    margin: '1.5em 0',
    fontSize: '15px',
    borderCollapse: 'collapse',
    borderSpacing: '0',
    border: '1px solid #ddeedf',
    cell: {
      padding: '10px 16px',
      border: '1px solid #ddeedf',
    },
    header: {
      background: '#eef7ef',
      fontWeight: '600',
      border: '1px solid #cce5cf',
    },
  },
  blockquote: {
    margin: '1.8em 0',
    padding: '1em 1.5em',
    borderLeft: '4px solid #2e7d32',
    fontStyle: 'normal',
    color: '#4a5568',
    background: '#f2f8f3',
    borderRadius: '0 4px 4px 0',
  },
  list: {
    margin: '1.2em 0',
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
    color: '#2e7d32',
    textDecoration: 'none',
    borderBottom: '1px dotted #2e7d32',
  },
  hr: {
    margin: '2em 0',
    border: '1px solid #ddeedf',
  },
  emphasis: {
    strong: {
      color: '#2e7d32',
      fontWeight: 'bold',
    },
    em: {
      color: '#2e7d32',
      fontStyle: 'italic',
    },
  },
}; 