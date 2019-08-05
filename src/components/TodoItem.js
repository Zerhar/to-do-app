import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import classes from './TodoList.module.css';

export default class TodoItems extends Component {

    deleteKey = (key) => {
        this.props.delete(key);
    }

    addTask = (item) => {
        return <li onClick={() => this.deleteKey(item.key)} key={item.key}>{item.text}</li>
    }

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.addTask);
        return (
            <ul className={classes.theList}>
                <FlipMove enterAnimation="fade" leaveAnimation="fade">
                    {listItems}
                </FlipMove>
            </ul>
        )
    }
}