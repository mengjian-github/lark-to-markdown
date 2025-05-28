import { Theme } from './default';

export const elegantTheme: Theme = {
  base: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#343434',
    letterSpacing: '0.03em',
    textAlign: 'left',
  },
  headings: {
    color: '#7b2cbf',
    fontWeight: '600',
    letterSpacing: '0.02em',
    h1: {
      fontSize: '28px',
      margin: '1.5em 0 1em',
      textAlign: 'center',
      borderBottom: '2px solid #7b2cbf',
      paddingBottom: '0.5em',
      position: 'relative',
    },
    h2: {
      fontSize: '22px',
      margin: '2em 0 1em',
      borderLeft: '4px solid #7b2cbf',
      paddingLeft: '12px',
      color: '#7b2cbf',
    },
    h3: {
      fontSize: '18px',
      margin: '1.8em 0 1em',
      color: '#7b2cbf',
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
      background: '#f8f7fa',
      padding: '1.2em',
      margin: '1.8em 0',
      borderRadius: '4px',
      color: '#3a2f45',
      overflow: 'auto',
    },
    inline: {
      background: '#f5f0fa',
      padding: '0.2em 0.4em',
      borderRadius: '3px',
      color: '#7b2cbf',
      fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
    },
  },
  table: {
    width: '100%',
    margin: '1.5em 0',
    fontSize: '15px',
    borderCollapse: 'collapse',
    borderSpacing: '0',
    border: '1px solid #e7dcf5',
    cell: {
      padding: '10px 16px',
      border: '1px solid #e7dcf5',
    },
    header: {
      background: '#f2ebfa',
      fontWeight: '600',
      border: '1px solid #d7c5eb',
    },
  },
  blockquote: {
    margin: '1.8em 0',
    padding: '1em 1.5em',
    borderLeft: '4px solid #7b2cbf',
    fontStyle: 'normal',
    color: '#4a5568',
    background: '#f7f4fb',
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
    color: '#7b2cbf',
    textDecoration: 'none',
    borderBottom: '1px dotted #c8b6e2',
  },
  hr: {
    margin: '2em 0',
    border: '1px solid #e7dcf5',
  },
  emphasis: {
    strong: {
      color: '#7b2cbf',
      fontWeight: 'bold',
    },
    em: {
      color: '#7b2cbf',
      fontStyle: 'italic',
    },
  },
}; 