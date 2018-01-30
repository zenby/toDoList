import React, { Component } from 'react';
import { DateInput } from '../DateInput';
import { Form, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export class AddTask extends Component {
    onSubmit(ev) {
        ev.preventDefault();
        let formData = [...ev.target.querySelectorAll('[name]')]
            .reduce((hash, item) => ({
                ...hash, [item.getAttribute('name')]: item.value
            }), {});
        console.dir(formData);
        if (formData.date && formData.description && formData.title) {
            formData.checked = false;
            this.props.onSubmit(formData);
            ev.target.reset();
        }
    }

    render() {
        let date = new Date();
        let defaultTaskDate = `${date.getFullYear()}-${(date.getMonth() + 1) < 10 ? ("" + date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate()}`;
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

AddTask.propTypes = {
    onSubmit: PropTypes.func
}


