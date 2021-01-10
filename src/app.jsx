import ReactDOM from 'react-dom';
import React from 'react';

import App from './components/Hello';

export default () => {
  const container = document.getElementById('root');
  ReactDOM.render(<App />, container);
};
