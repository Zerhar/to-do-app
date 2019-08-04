import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import classes from './TodoList.module.scss';

class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);

    }

    delete = (key) => {
        this.props.delete(key);
    }

    createTasks = (item) => {
        return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
    }

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);

        return (
            <ul className={classes.theList}>
                <FlipMove enterAnimation="fade" leaveAnimation="fade">
                    {listItems}
                </FlipMove>
            </ul>
        )
    }
}

export default TodoItems;