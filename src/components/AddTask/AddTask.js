import React, { Component } from 'react';
import DateInput from '../DateInput/DateInput';


class AddTask extends Component {
    render() {
        return (
            <fieldset>
                <legend>Add Task</legend>
                <input type='text' placeholder='Title' readonly />
                <select>
                    <option>High </option>
                    <option selected>Medium </option>
                    <option>Low </option>
                </select>
                <DateInput />
                <br />
                <textarea placeholder='Description' />
                <br />
                <button>Add task</button>
            </fieldset>
        );
    }
}

export default AddTask;
