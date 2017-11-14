import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({ todos, receiveTodo }) => (
  <div>
    <h3>Todo List</h3>
    <ul>
      { todos.map((todo, i) => (<TodoListItem todo={ todo } key={ i }/>)) }
    </ul>
    <TodoForm formMethod={receiveTodo}/>
  </div>
);
export default TodoList;
