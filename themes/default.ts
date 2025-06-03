export interface Theme {
  base: {
    fontFamily: string;
    fontSize: string;
    lineHeight: string;
    color: string;
    letterSpacing: string;
    textAlign: string;
  };
  headings: {
    color: string;
    fontWeight: string;
    letterSpacing: string;
    h1: {
      fontSize: string;
      margin: string;
      textAlign: string;
      borderBottom: string;
      paddingBottom: string;
      position: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
    };
    h2: {
      fontSize: string;
      margin: string;
      borderLeft: string;
      paddingLeft: string;
      color: string;
    };
    h3: {
      fontSize: string;
      margin: string;
      color: string;
    };
    h4: {
      fontSize: string;
      margin: string;
    };
    h5: {
      fontSize: string;
      margin: string;
    };
    h6: {
      fontSize: string;
      margin: string;
      color: string;
    };
  };
  paragraph: {
    margin: string;
    lineHeight: string;
  };
  image: {
    maxWidth: string;
    margin: string;
    borderRadius: string;
  };
  code: {
    fontFamily: string;
    fontSize: string;
    lineHeight: string;
    block: {
      background: string;
      padding: string;
      margin: string;
      borderRadius: string;
      color: string;
      overflow?: string;
      fontSize?: string;
      lineHeight?: string;
    };
    inline: {
      background: string;
      padding: string;
      borderRadius: string;
      color: string;
      fontFamily: string;
      fontSize?: string;
    };
  };
  table: {
    width: string;
    margin: string;
    fontSize: string;
    borderCollapse: string;
    borderSpacing: string;
    border: string;
    cell: {
      padding: string;
      border: string;
    };
    header: {
      background: string;
      fontWeight: string;
      border: string;
    };
  };
  blockquote: {
    margin: string;
    padding: string;
    background: string;
    borderRadius: string;
    color: string;
    borderLeft: string;
    fontStyle?: string;
  };
  list: {
    margin: string;
    padding: string;
    item: {
      margin: string;
      lineHeight: string;
    };
    unordered: {
      listStyleType: string;
      nestedLevel1: {
        listStyleType: string;
      };
      nestedLevel2: {
        listStyleType: string;
      };
    };
    ordered: {
      listStyleType: string;
      nestedLevel1: {
        listStyleType: string;
      };
      nestedLevel2: {
        listStyleType: string;
      };
    };
  };
  link: {
    color: string;
    textDecoration: string;
    borderBottom: string;
  };
  hr: {
    margin: string;
    border: string;
  };
  emphasis: {
    strong: {
      color: string;
      fontWeight: string;
    };
    em: {
      color: string;
      fontStyle: string;
    };
  };
}

export const defaultTheme: Theme = {
  base: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#343434',
    letterSpacing: '0.03em',
    textAlign: 'left',
  },
  headings: {
    color: '#1a73e8',
    fontWeight: '600',
    letterSpacing: '0.02em',
    h1: {
      fontSize: '28px',
      margin: '1.5em 0 1em',
      textAlign: 'center',
      borderBottom: '2px solid #1a73e8',
      paddingBottom: '0.5em',
      position: 'relative',
    },
    h2: {
      fontSize: '22px',
      margin: '2em 0 1em',
      borderLeft: '4px solid #1a73e8',
      paddingLeft: '12px',
      color: '#1a73e8',
    },
    h3: {
      fontSize: '18px',
      margin: '1.8em 0 1em',
      color: '#1a73e8',
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
      background: '#f6f8fa',
      color: '#333333',
      overflow: 'auto',
      fontSize: '14px',
      lineHeight: '1.6',
    },
    inline: {
      padding: '0.2em 0.4em',
      borderRadius: '3px',
      background: '#f3f3f3',
      color: '#1a73e8',
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
    border: '1px solid #e0e9fa',
    cell: {
      padding: '10px 16px',
      border: '1px solid #e0e9fa',
    },
    header: {
      background: '#eef3fd',
      fontWeight: '600',
      border: '1px solid #d0e1fa',
    },
  },
  blockquote: {
    margin: '1.8em 0',
    padding: '1em 1.5em',
    borderLeft: '4px solid #1a73e8',
    fontStyle: 'normal',
    color: '#4a5568',
    background: '#f5f9ff',
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
    color: '#1a73e8',
    textDecoration: 'none',
    borderBottom: '1px solid #1a73e8',
  },
  hr: {
    margin: '2em 0',
    border: '1px solid #d0e1fa',
  },
  emphasis: {
    strong: {
      color: '#1a73e8',
      fontWeight: '600',
    },
    em: {
      color: '#1a73e8',
      fontStyle: 'italic',
    },
  },
}; 