import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './components/app';
import Root from './components/root';
import allTodos from './reducers/selectors';
// import { receiveTodos } from './actions/todo_actions';
// import { receiveTodo } from './actions/todo_actions';
//const newTodos = [{id: 1, title: "hello"}, {id: 2, title: "world"}];

document.addEventListener('DOMContentLoaded', function() {
  const store = configureStore();
  window.store = store; //Remove later!
  ReactDOM.render(<Root store={ store }/>, document.getElementById('content'));
});
