import React, { Component } from 'react';
import TodoItem from './TodoItem';
import classes from './TodoList.module.css';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    addItem = (e) => {
        let listArray = this.state.list;
        if (this._inputElement.value !== '') {
            listArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });
            this.setState({
                list: listArray
            });
            this._inputElement.value = '';
            e.preventDefault()
        }

    }

    deleteItem = (key) => {
        let filteredItems = this.state.list.filter((item) => item.key !== key);
        this.setState({
            list: filteredItems
        })
    }

    render() {
        return (
            <div className={classes.todoListMain}>
                <div className={classes.header}>
                    <form onSubmit={this.addItem}>
                        <input
                            ref={(a) => this._inputElement = a}
                            placeholder="enter task" />
                        <button type="submit">Add</button>
                    </form>
                </div>
                <div>
                    <TodoItem
                        entries={this.state.list}
                        delete={this.deleteItem} />
                </div>
            </div>
        )
    }
}