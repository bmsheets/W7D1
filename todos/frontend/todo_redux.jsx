import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', function() {
  const store = configureStore();
  window.store = store; //Remove later!
  ReactDOM.render(<h1>Todos App</h1>, document.getElementById('content'));
});
