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
      fontSize: '20px',
      margin: '1.2em 0 0.8em',
      textAlign: 'left',
    },
    h2: {
      fontSize: '18px',
      margin: '1.2em 0 0.8em',
      borderLeft: '2px solid #34495e',
      paddingLeft: '10px',
    },
    h3: {
      fontSize: '16px',
      margin: '1em 0 0.8em',
    },
    h4: {
      fontSize: '15px',
      margin: '1em 0 0.8em',
    },
    h5: {
      fontSize: '14px',
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
    margin: '1em auto',
    borderRadius: '2px',
  },
  code: {
    fontFamily: 'Consolas, Monaco, "Courier New", monospace',
    fontSize: '13px',
    lineHeight: '1.6',
    block: {
      background: '#f8f9fa',
      padding: '12px',
      margin: '1em 0',
      borderRadius: '2px',
      color: '#2c3e50',
    },
    inline: {
      background: '#f8f9fa',
      padding: '2px 4px',
      borderRadius: '2px',
      color: '#34495e',
    },
  },
  table: {
    width: '100%',
    margin: '1em 0',
    fontSize: '14px',
    borderColor: '#edf2f7',
    cell: {
      padding: '8px',
    },
    header: {
      background: '#f8f9fa',
      fontWeight: '500',
    },
  },
  blockquote: {
    margin: '1em 0',
    padding: '12px 16px',
    background: '#f8f9fa',
    borderRadius: '2px',
    color: '#7f8c8d',
    borderLeft: '2px solid #34495e',
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
    color: '#34495e',
    textDecoration: 'none',
    borderBottom: '1px solid #34495e',
  },
  hr: {
    margin: '1.5em 0',
    border: '1px solid #edf2f7',
  },
  emphasis: {
    strong: {
      color: '#2c3e50',
      fontWeight: '500',
    },
    em: {
      color: '#7f8c8d',
      fontStyle: 'italic',
    },
  },
}; 