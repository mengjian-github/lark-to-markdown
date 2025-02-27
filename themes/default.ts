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
    color: '#2a2a2a',
    letterSpacing: '0.03em',
    textAlign: 'left',
  },
  headings: {
    color: '#0e6efd',
    fontWeight: '600',
    letterSpacing: '0.05em',
    h1: {
      fontSize: '26px',
      margin: '1.8em 0 1em',
      textAlign: 'center',
      borderBottom: '1px solid #0e6efd',
      paddingBottom: '0.5em',
      position: 'relative',
    },
    h2: {
      fontSize: '21px',
      margin: '2em 0 1em',
      borderLeft: '4px solid #0e6efd',
      paddingLeft: '12px',
      color: '#0e6efd',
    },
    h3: {
      fontSize: '18px',
      margin: '1.5em 0 0.8em',
      color: '#3695ff',
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
      color: '#555555',
    },
  },
  paragraph: {
    margin: '1em 0',
    lineHeight: '1.75',
  },
  image: {
    maxWidth: '100%',
    margin: '1em auto',
    borderRadius: '4px',
  },
  code: {
    fontFamily: 'Consolas, Monaco, "Courier New", monospace',
    fontSize: '13px',
    lineHeight: '1.6',
    block: {
      margin: '1.5em 0',
      padding: '1em',
      borderRadius: '5px',
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
      color: '#0e6efd',
      fontFamily: 'Consolas, Monaco, "Courier New", monospace',
      fontSize: '85%',
    },
  },
  table: {
    width: '100%',
    margin: '1em 0',
    fontSize: '14px',
    borderCollapse: 'collapse',
    borderSpacing: '0',
    border: '1px solid #e5e7eb',
    cell: {
      padding: '8px 16px',
      border: '1px solid #e5e7eb',
    },
    header: {
      background: '#f9fafb',
      fontWeight: '600',
      border: '1px solid #e5e7eb',
    },
  },
  blockquote: {
    margin: '1.5em 0',
    padding: '0 0 0 1em',
    borderLeft: '4px solid #0e6efd88',
    fontStyle: 'italic',
    color: '#555555',
    background: 'transparent',
    borderRadius: '0',
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
    color: '#1890ff',
    textDecoration: 'none',
    borderBottom: '1px solid #1890ff',
  },
  hr: {
    margin: '1.5em 0',
    border: '1px solid #eaeaea',
  },
  emphasis: {
    strong: {
      color: '#222222',
      fontWeight: '600',
    },
    em: {
      color: '#595959',
      fontStyle: 'italic',
    },
  },
}; 