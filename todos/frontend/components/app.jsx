import React from 'react';
import TodoListContainer from './todos/todo_list_container';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>App.jsx is working.</h1>
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
