import { Theme } from './default';

export const warmTheme: Theme = {
  base: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#4a4a4a',
    letterSpacing: '0.03em',
    textAlign: 'left',
  },
  headings: {
    color: '#2c3e50',
    fontWeight: '600',
    letterSpacing: '0.05em',
    h1: {
      fontSize: '24px',
      margin: '1.5em 0 1em',
      textAlign: 'center',
      borderBottom: '1px solid #e67e22',
      paddingBottom: '0.5em',
      position: 'relative',
    },
    h2: {
      fontSize: '18px',
      margin: '2em 0 1em',
      borderLeft: '4px solid #e67e22',
      paddingLeft: '12px',
    },
    h3: {
      fontSize: '17px',
      margin: '1.2em 0 0.8em',
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
    borderRadius: '6px',
  },
  code: {
    fontFamily: 'Consolas, Monaco, "Courier New", monospace',
    fontSize: '13px',
    lineHeight: '1.6',
    block: {
      background: '#fff8f0',
      padding: '12px',
      margin: '1em 0',
      borderRadius: '6px',
      color: '#c0392b',
    },
    inline: {
      background: '#fff8f0',
      padding: '2px 4px',
      borderRadius: '3px',
      color: '#e67e22',
    },
  },
  table: {
    width: '100%',
    margin: '1em 0',
    fontSize: '14px',
    borderColor: '#f0e0d0',
    cell: {
      padding: '8px',
    },
    header: {
      background: '#fff8f0',
      fontWeight: '600',
    },
  },
  blockquote: {
    margin: '1em 0',
    padding: '12px 16px',
    background: '#fff8f0',
    borderRadius: '6px',
    color: '#d35400',
    borderLeft: '4px solid #e67e22',
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
    color: '#e67e22',
    textDecoration: 'none',
    borderBottom: '1px solid #e67e22',
  },
  hr: {
    margin: '1.5em 0',
    border: '1px solid #f0e0d0',
  },
  emphasis: {
    strong: {
      color: '#d35400',
      fontWeight: '600',
    },
    em: {
      color: '#e67e22',
      fontStyle: 'italic',
    },
  },
}; 