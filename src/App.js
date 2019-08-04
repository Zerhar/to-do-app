import React, { Component } from 'react';
import TodoList from './components/TodoList';
import classes from './App.module.scss';

export default class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <div className={classes.container}>
          <TodoList />
        </div>
      </div>
    )
  }
}