import React from 'react';
import { uniqueId } from '../../util/util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    }
    this.linkState = this.linkState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = {
      id: uniqueId(),
      title: this.state.title,
      body: this.state.body,
      done: false
    }
    this.props.formMethod(todo);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h3>Add New Todo</h3>
        <label>
          Title:<input onChange={this.linkState('title')} value={this.state.title}/>
        </label>
        <label>
          Body:<input onChange={this.linkState('body')} value={this.state.body}/>
        </label>
        <input type="submit"></input>
      </form>
    );
  }
}

export default TodoForm;
