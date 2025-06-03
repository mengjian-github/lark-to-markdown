import { Theme } from './default';

export const warmTheme: Theme = {
  base: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#343434',
    letterSpacing: '0.03em',
    textAlign: 'left',
  },
  headings: {
    color: '#e67e22',
    fontWeight: '600',
    letterSpacing: '0.02em',
    h1: {
      fontSize: '28px',
      margin: '1.5em 0 1em',
      textAlign: 'center',
      borderBottom: '2px solid #e67e22',
      paddingBottom: '0.5em',
      position: 'relative',
    },
    h2: {
      fontSize: '22px',
      margin: '2em 0 1em',
      borderLeft: '4px solid #e67e22',
      paddingLeft: '12px',
      color: '#e67e22',
    },
    h3: {
      fontSize: '18px',
      margin: '1.8em 0 1em',
      color: '#e67e22',
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
    borderRadius: '6px',
  },
  code: {
    fontFamily: 'Consolas, Monaco, "Courier New", monospace',
    fontSize: '14px',
    lineHeight: '1.6',
    block: {
      margin: '1.8em 0',
      padding: '1.2em',
      borderRadius: '6px',
      background: '#fffaf5',
      color: '#d35400',
      overflow: 'auto',
      fontSize: '14px',
      lineHeight: '1.6',
    },
    inline: {
      padding: '0.2em 0.4em',
      borderRadius: '3px',
      background: 'transparent',
      color: '#e67e22',
      fontFamily: 'Consolas, Monaco, "Courier New", monospace',
      fontSize: '85%',
    },
  },
  table: {
    width: '100%',
    margin: '1.5em 0',
    fontSize: '15px',
    borderCollapse: 'collapse',
    borderSpacing: '0',
    border: '1px solid #fae1cd',
    cell: {
      padding: '10px 16px',
      border: '1px solid #fae1cd',
    },
    header: {
      background: '#fcf4ed',
      fontWeight: '600',
      border: '1px solid #f8d3b0',
    },
  },
  blockquote: {
    margin: '1.8em 0',
    padding: '1em 1.5em',
    borderLeft: '4px solid #e67e22',
    fontStyle: 'normal',
    color: '#4a5568',
    background: '#fff9f2',
    borderRadius: '0 6px 6px 0',
  },
  list: {
    margin: '1.2em 0',
    padding: '0 0 0 1.5em',
    item: {
      margin: '0.5em 0',
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
    margin: '2em 0',
    border: '1px solid #fae1cd',
  },
  emphasis: {
    strong: {
      color: '#e67e22',
      fontWeight: '600',
    },
    em: {
      color: '#e67e22',
      fontStyle: 'italic',
    },
  },
}; 