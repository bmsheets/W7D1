import React from 'react';

const TodoListItem = ({ todo, i }) => (
  <li key={ i }>{ todo.title }</li>
);

export default TodoListItem;
