import React, { Component } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react';

export class LoginWindow extends Component {
    state = {
        showModal: true
    }
    handleClose = () => this.setState({ showModal: false })
    handleOk = () => {
        let loginData = [...document.querySelector('.login_window').querySelectorAll('[name]')]
            .map(item => item.value);
        if (this.isUserValid(loginData[0], loginData[1])) {
            this.handleClose();
        }
    }
    isUserValid(login, password) {
        return !isNaN(+login) && !isNaN(+password)
            && login.length + 1 === password.length
    }
    render() {
        return (<Modal open={this.state.showModal}
            className='login_window'>
            <Modal.Header>{'Login:'}</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Form onSubmit={this.handleOk}>
                        <Form.Input type='text' placeholder='Account' name='account' />
                        <Form.Input type='password' placeholder='Password' name='password' />
                        <Button color='green'>Ok</Button>
                    </Form>
                </Modal.Description>
            </Modal.Content>
        </Modal>
        )
    }
}