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
    };
    h2: {
      fontSize: string;
      margin: string;
      borderLeft: string;
      paddingLeft: string;
    };
    h3: {
      fontSize: string;
      margin: string;
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
    };
    inline: {
      background: string;
      padding: string;
      borderRadius: string;
      color: string;
    };
  };
  table: {
    width: string;
    margin: string;
    fontSize: string;
    borderColor: string;
    cell: {
      padding: string;
    };
    header: {
      background: string;
      fontWeight: string;
    };
  };
  blockquote: {
    margin: string;
    padding: string;
    background: string;
    borderRadius: string;
    color: string;
    borderLeft: string;
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
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#333',
    letterSpacing: '0.05em',
    textAlign: 'justify',
  },
  headings: {
    color: '#000',
    fontWeight: 'bold',
    letterSpacing: '0.08em',
    h1: {
      fontSize: '24px',
      margin: '1em 0',
      textAlign: 'center',
    },
    h2: {
      fontSize: '20px',
      margin: '1.5em 0 1em',
      borderLeft: '4px solid #1890ff',
      paddingLeft: '12px',
    },
    h3: {
      fontSize: '18px',
      margin: '1.5em 0 1em',
    },
  },
  paragraph: {
    margin: '1.5em 0',
    lineHeight: '2',
  },
  image: {
    maxWidth: '100%',
    margin: '2em auto',
    borderRadius: '4px',
  },
  code: {
    fontFamily: 'Consolas, Monaco, "Courier New", monospace',
    fontSize: '14px',
    lineHeight: '1.6',
    block: {
      background: '#f8f9fa',
      padding: '1em',
      margin: '1.5em 0',
      borderRadius: '4px',
      color: '#24292e',
    },
    inline: {
      background: '#f0f2f5',
      padding: '0.2em 0.4em',
      borderRadius: '3px',
      color: '#e83e8c',
    },
  },
  table: {
    width: '100%',
    margin: '2em 0',
    fontSize: '15px',
    borderColor: '#e8e8e8',
    cell: {
      padding: '0.8em',
    },
    header: {
      background: '#f7f7f7',
      fontWeight: '600',
    },
  },
  blockquote: {
    margin: '2em 0',
    padding: '1em 1.5em',
    background: '#f8f9fa',
    borderRadius: '4px',
    color: '#666',
    borderLeft: '4px solid #1890ff',
  },
  list: {
    margin: '1.5em 0',
    padding: '0 0 0 2em',
    item: {
      margin: '0.5em 0',
      lineHeight: '1.8',
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
    color: '#1890ff',
    textDecoration: 'none',
    borderBottom: '1px solid #1890ff',
  },
  hr: {
    margin: '2em 0',
    border: '1px solid #e8e8e8',
  },
  emphasis: {
    strong: {
      color: '#222',
      fontWeight: '600',
    },
    em: {
      color: '#666',
      fontStyle: 'italic',
    },
  },
}; 