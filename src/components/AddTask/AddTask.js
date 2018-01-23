import React, { Component } from 'react';
import { DateInput } from '../DateInput';
import PropTypes from 'prop-types';


export class AddTask extends Component {
    onSubmit(ev) {
        ev.preventDefault();
        let formData = [...ev.target.querySelectorAll('[name]')]
            .reduce((hash, item) => ({
                ...hash, [item.getAttribute('name')]: item.value
            }), {});
        this.props.onSubmit(formData);
        ev.target.reset();
    }

    render() {
        let date = new Date();
        let defaultTaskDate = `${date.getFullYear()}-${(date.getMonth() + 1) < 10 ? ("" + date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate()}`;
        return (
            <form className='toDoListForm' onSubmit={this.onSubmit.bind(this)}>
                <fieldset>
                    <legend>Add Task</legend>
                    <input type='text' placeholder='Title' name='title' />
                    <select name='priority' defaultValue="Medium">
                        <option value='High'>High </option>
                        <option value='Medium'>Medium </option>
                        <option value='Low'>Low </option>
                    </select>
                    <DateInput date={defaultTaskDate} />
                    <br />
                    <textarea placeholder='Description' name='description' />
                    <br />
                    <button>Add task</button>
                </fieldset>
            </form>
        );
    }
}


