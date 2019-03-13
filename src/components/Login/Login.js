import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { loginUser } from '../../utils/apiWrapper';
import { Redirect } from 'react-router-dom';

export class LoginWindow extends Component {
    state = {
        response: ''
    }

    handleOk = () => {
        let loginData = [...document.querySelector('.login_window').querySelectorAll('[name]')]
            .map(item => item.value);
        loginUser(loginData[0], loginData[1])
            .then(message => this.setState({ response: message }))
            .then(() => this.props.authenticate(loginData[0]))
            .catch(er => this.setState({ response: er }))
    }

    render() {
        return this.props.isAuthenticated
            ? <Redirect to={'/tasks'} />
            : <fieldset className='login_window'>
                <h3> Login: </h3>
                <Form onSubmit={this.handleOk}>
                    <Form.Input type='text' placeholder='Account' name='account' />
                    <Form.Input type='password' placeholder='Password' name='password' />
                    <Button color='green'>Ok</Button>
                    <span>{this.state.response}</span>
                </Form>
            </fieldset>

    }
}