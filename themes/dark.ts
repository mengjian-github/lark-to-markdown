import { Theme } from './default';

export const darkTheme: Theme = {
  base: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#e0e0e0',
    letterSpacing: '0.03em',
    textAlign: 'left',
  },
  headings: {
    color: '#bb86fc',
    fontWeight: '600',
    letterSpacing: '0.05em',
    h1: {
      fontSize: '26px',
      margin: '1.8em 0 1em',
      textAlign: 'center',
      borderBottom: '1px solid #bb86fc',
      paddingBottom: '0.5em',
      position: 'relative',
    },
    h2: {
      fontSize: '21px',
      margin: '2em 0 1em',
      borderLeft: '4px solid #bb86fc',
      paddingLeft: '12px',
      color: '#bb86fc',
    },
    h3: {
      fontSize: '18px',
      margin: '1.5em 0 0.8em',
      color: '#03dac6',
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
      color: '#b0b0b0',
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
      background: '#1e1e1e',
      padding: '1em',
      margin: '1.5em 0',
      borderRadius: '4px',
      color: '#e0e0e0',
      overflow: 'auto',
    },
    inline: {
      background: '#2d2d2d',
      padding: '0.2em 0.4em',
      borderRadius: '3px',
      color: '#03dac6',
      fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
    },
  },
  table: {
    width: '100%',
    margin: '1.5em 0',
    fontSize: '0.95em',
    borderCollapse: 'collapse',
    borderSpacing: '0',
    border: '1px solid #444',
    cell: {
      padding: '0.5em 1em',
      border: '1px solid #444',
    },
    header: {
      background: '#2d2d2d',
      fontWeight: 'bold',
      border: '1px solid #444',
    },
  },
  blockquote: {
    margin: '1.5em 0',
    padding: '1em 1.5em',
    background: '#2d2d2d',
    borderRadius: '4px',
    color: '#e0e0e0',
    borderLeft: '4px solid #03dac6',
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
    color: '#bb86fc',
    textDecoration: 'none',
    borderBottom: '1px dotted #bb86fc',
  },
  hr: {
    margin: '2em 0',
    border: '1px solid #444',
  },
  emphasis: {
    strong: {
      color: '#03dac6',
      fontWeight: 'bold',
    },
    em: {
      color: '#bb86fc',
      fontStyle: 'italic',
    },
  },
}; 