import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = ({ todos }) => (
  <div>
    <h3>Todo List</h3>
    <ul>
      { todos.map((todo, i) => (<TodoListItem todo={ todo } key={ i }/>)) }
    </ul>
  </div>
);
export default TodoList;
