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
    };
    inline: {
      background: string;
      padding: string;
      borderRadius: string;
      color: string;
      fontFamily: string;
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
    color: '#333333',
    letterSpacing: '0.03em',
    textAlign: 'left',
  },
  headings: {
    color: '#1890ff',
    fontWeight: '600',
    letterSpacing: '0.05em',
    h1: {
      fontSize: '24px',
      margin: '1.5em 0 1em',
      textAlign: 'center',
      borderBottom: '1px solid #1890ff',
      paddingBottom: '0.5em',
      position: 'relative',
    },
    h2: {
      fontSize: '20px',
      margin: '2em 0 1em',
      borderLeft: '4px solid #1890ff',
      paddingLeft: '12px',
      color: '#1890ff',
    },
    h3: {
      fontSize: '17px',
      margin: '1.2em 0 0.8em',
      color: '#40a9ff',
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
      color: '#666666',
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
      background: '#f7f7f7',
      padding: '12px',
      margin: '1em 0',
      borderRadius: '4px',
      color: '#333333',
    },
    inline: {
      background: '#f7f7f7',
      padding: '2px 4px',
      borderRadius: '3px',
      color: '#d63384',
      fontFamily: 'Consolas, Monaco, "Courier New", monospace',
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
    margin: '1em 0',
    padding: '12px 16px',
    background: '#fafafa',
    borderRadius: '4px',
    color: '#666666',
    borderLeft: '4px solid #1890ff',
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