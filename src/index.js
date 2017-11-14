import React from 'react';
import ReactDOM from 'react-dom';

import HelloMessage from './HelloMessage';

const mountNode = document.getElementById('root');

class App extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(HelloMessage, {name: 'Aaron'}),
      React.createElement(HelloMessage, {name: 'John'}),
      React.createElement(HelloMessage, {name: 'Jane'})
    );
  }
}

ReactDOM.render(React.createElement(App), mountNode);
