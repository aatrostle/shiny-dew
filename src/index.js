import React from 'react';
import ReactDOM from 'react-dom';

const mountNode = document.getElementById('root');

class HelloMessage extends React.Component {
  render() {
    return React.createElement("div", null, "Hello ", this.props.name);
  }
}

ReactDOM.render(React.createElement(HelloMessage, { name: "Jane" }), mountNode);
