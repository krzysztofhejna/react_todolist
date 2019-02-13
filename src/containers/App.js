import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

import { hot } from 'react-hot-loader';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
        id: 1,
            text: 'clean the room'
        },
        {
        id: 2,
            text: 'wash the dishes'
        },
        {
        id: 3,
            text: 'feed my cat'
        }
      ],
      value: '',
    };
  }

  addTodo(val){
    const todo = {
      text: val,
      id: uuid.v4(),
    };
    const data = [...this.state.data, todo];
    this.setState({data});
  }

  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addTodo(this.state.value);
    this.setState({value: ''});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className={style.TodoApp}>
        <Title number={this.state.data.length} />
        <TodoList data={this.state.data} taskRemove={this.removeTodo.bind(this)} />
        <TodoForm value={this.state.value} onChange={this.handleChange.bind(this)} onSubmit={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

export default hot(module)(App);
