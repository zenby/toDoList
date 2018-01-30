import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Button, Header, Modal, Form, Input, TextArea } from 'semantic-ui-react'
import { DateInput } from '../../../DateInput';


export class ModalUpdate extends Component {
    state = {
        date: this.props.task.date
    }
    getUpdatedTask() {
        let modalWindow = document.querySelector('.modal');
        let modalData = [...modalWindow.querySelectorAll('[name]')]
            .reduce((hash, item) => ({
                ...hash, [item.getAttribute('name')]: item.value
            }), {});
        if (modalData.date && modalData.title && modalData.description) {
            return modalData;
        }
    }

    render() {
        const { task, isEnableToEdit } = this.props;
        return (
            <Modal
                open={this.props.showModal}
                onClose={this.props.handleClose}>
                <Modal.Header>{isEnableToEdit ? 'Observe task:' : 'Edit task:'}</Modal.Header>
                <Modal.Content >
                    <Modal.Description>
                        <Form.Group>
                            <Header as='h3'> Title:</Header>
                            <Input defaultValue={task.title}
                                name='title'
                                disabled={isEnableToEdit} />

                            <Header as='h3'> Date:</Header>
                            <DateInput date={task.date}
                                disabled={isEnableToEdit} />

                            <Header as='h3'> Priority:</Header>
                            <Form.Field control='select'
                                name='priority'
                                defaultValue={task.priority}
                                disabled={isEnableToEdit}>
                                <option value='High'>High</option>
                                <option value='Medium'>Medium</option>
                                <option value='Low'>Low</option>
                            </Form.Field>
                        </Form.Group>
                        <Header as='h3'> Description:</Header>
                        <TextArea
                            name='description'
                            defaultValue={task.description}
                            disabled={isEnableToEdit} />

                    </Modal.Description>
                    <Button color='green'
                        disabled={isEnableToEdit}
                        onClick={() => {
                            console.dir(this.getUpdatedTask());
                            this.props.handleClose();
                            this.props.updateTask(task.id, this.getUpdatedTask());
                        }}
                    >Save
                    </Button>
                </Modal.Content>
            </Modal>
        )
    }
}
ModalUpdate.propTypes = {
    task: PropTypes.object,
    showModal: PropTypes.bool,
    handleClose: PropTypes.func,
    isEnableToEdit: PropTypes.bool,
    updateTask: PropTypes.func
}