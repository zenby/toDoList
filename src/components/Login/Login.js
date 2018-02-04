import React, { Component } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react';

export class LoginWindow extends Component {
    state = {
        showModal: true
    }
    handleClose = () => this.setState({ showModal: false })
    render() {
        return (<Modal open={this.state.showModal}
            onClose={this.handleClose}>
            <Modal.Header>{'Login:'}</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Form>
                        <Form.Input type='text' placeholder='Account' name='title' />
                        <Form.Input type='password' placeholder='Password' name='title' />
                        <Button color='green'
                            onClick={this.handleClose}
                        >Ok</Button>
                    </Form>

                </Modal.Description>
            </Modal.Content>
        </Modal>
        )
    }
}