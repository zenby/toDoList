import React, { Component } from 'react';
import { DateInput } from '../DateInput';
import { Form, Header } from 'semantic-ui-react';
import { addTask } from '../../utils/apiWrapper'

import { connect } from 'react-redux';
import { addTask_act_cr } from '../../actions/tasks';



export class AddTask extends Component {
    onSubmit(ev) {
        ev.preventDefault();
        let formData = [...ev.target.querySelectorAll('[name]')]
            .reduce((hash, item) => ({
                ...hash, [item.getAttribute('name')]: item.value
            }), {});
        if (formData.date && formData.description && formData.title) {
            formData.checked = false;
            addTask(formData).then(newTask => this.props.addTask_action_cr(newTask))
            ev.target.reset();
        }
    }

    render() {
        let date = new Date();
        let defaultTaskDate = `${date.getFullYear()}-${(date.getMonth() + 1) < 10
            ? ("0" + (date.getMonth() + 1))
            : date.getMonth() + 1}-${date.getDate() < 10
                ? "0" + (date.getDate() + 1)
                : date.getDate()}`;
        return (
            <Form className='toDoListForm' onSubmit={this.onSubmit.bind(this)}>
                <fieldset >
                    <Header as='h3' textAlign='center'> Add Task</Header>
                    <Form.Group>
                        <Form.Input type='text' placeholder='Title' name='title' />
                        <Form.Field control='select'
                            name='priority'
                            defaultValue='Medium'
                            placeholder='Priority'>
                            <option value='High'>High</option>
                            <option value='Medium'>Medium</option>
                            <option value='Low'>Low</option>
                        </Form.Field>
                        <DateInput date={defaultTaskDate} disabled={false} />
                    </Form.Group>
                    <Form.TextArea placeholder='Description' name='description' />
                    <Form.Button
                        color='green'
                        icon='add'
                    ></Form.Button>
                </fieldset>
            </Form>
        );
    }
}
const mapDispatchToProps = {
    addTask_act_cr
}

export default connect(undefined, mapDispatchToProps)(AddTask);

