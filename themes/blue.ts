import { Theme } from './default';

export const blueTheme: Theme = {
  base: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#2c3e50',
    letterSpacing: '0.03em',
    textAlign: 'left',
  },
  headings: {
    color: '#1e88e5',
    fontWeight: '600',
    letterSpacing: '0.05em',
    h1: {
      fontSize: '26px',
      margin: '1.8em 0 1em',
      textAlign: 'center',
      borderBottom: '1px solid #1e88e5',
      paddingBottom: '0.5em',
      position: 'relative',
    },
    h2: {
      fontSize: '21px',
      margin: '2em 0 1em',
      borderLeft: '4px solid #1e88e5',
      paddingLeft: '12px',
      color: '#1e88e5',
    },
    h3: {
      fontSize: '18px',
      margin: '1.5em 0 0.8em',
      color: '#42a5f5',
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
      color: '#78909c',
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
      background: '#f5f7fa',
      padding: '1em',
      margin: '1.5em 0',
      borderRadius: '4px',
      color: '#2c3e50',
      overflow: 'auto',
    },
    inline: {
      background: '#e3f2fd',
      padding: '0.2em 0.4em',
      borderRadius: '3px',
      color: '#0d47a1',
      fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
    },
  },
  table: {
    width: '100%',
    margin: '1.5em 0',
    fontSize: '0.95em',
    borderCollapse: 'collapse',
    borderSpacing: '0',
    border: '1px solid #e1e8ed',
    cell: {
      padding: '0.5em 1em',
      border: '1px solid #e1e8ed',
    },
    header: {
      background: '#e3f2fd',
      fontWeight: 'bold',
      border: '1px solid #e1e8ed',
    },
  },
  blockquote: {
    margin: '1.5em 0',
    padding: '1em 1.5em',
    background: '#e3f2fd',
    borderRadius: '4px',
    color: '#2c3e50',
    borderLeft: '4px solid #42a5f5',
    fontStyle: 'italic',
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
    color: '#1e88e5',
    textDecoration: 'none',
    borderBottom: '1px dotted #1e88e5',
  },
  hr: {
    margin: '2em 0',
    border: '1px solid #e1e8ed',
  },
  emphasis: {
    strong: {
      color: '#0d47a1',
      fontWeight: 'bold',
    },
    em: {
      color: '#1e88e5',
      fontStyle: 'italic',
    },
  },
}; 