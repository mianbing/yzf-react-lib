import React, { Component } from 'react';

import './index.less';

interface Props {
  type: string;
  text: string;
}

class Button extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { type = 'default', text = 'Click Me' } = this.props;
    const types: any = {
      default: {
        color: '#FFF',
        bgColor: '#1890ff',
      },
      danger: {
        color: '#FFF',
        bgColor: '#cf1322',
      },
      warn: {
        color: '#FFF',
        bgColor: '#ff9c6e',
      },
      disable: {
        color: '#999',
        bgColor: '#EEE',
      },
    };
    const { bgColor, color } = types[type];
    return (
      <button
        className="btn"
        style={{ backgroundColor: bgColor, color: color }}
      >
        {text}
      </button>
    );
  }
}

export default Button;
