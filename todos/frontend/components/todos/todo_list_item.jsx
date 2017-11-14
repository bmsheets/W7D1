import React from 'react';

const TodoListItem = ({ todo, i, removeTodo }) => (
  <div>
    <li key={ i }>{ todo.title }</li>
    <button onClick={removeTodo}>Delete</button>
  </div>
);

export default TodoListItem;
