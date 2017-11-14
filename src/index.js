import React from 'react';
import ReactDOM from 'react-dom';

import HelloMessage from './HelloMessage';

import style from './app.css';

const mountNode = document.getElementById('root');

class App extends React.Component {
  render() {
    return (
      <div className={style.app}>
        <HelloMessage name='Aaron' />
        <HelloMessage name='John' />
        <HelloMessage name='Jane' />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
