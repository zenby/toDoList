import React, { Component } from 'react';
import AddTask from './AddTask';
import Filter from './Filter';
import TaskTable from './TaskTable';

import { CalendarView } from './CalendarView';
import { LoginWindow } from './Login'

import { AppMenu } from './Menu';
import { About } from './About';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
export const MENUNAMES = ['Calendar', 'Tasks', 'About', 'Login'];

export class ToDoListWrapper extends Component {
    state = {
        loginName: '',
        isAuthenticated: false
    }

    authenticate(name) {
        MENUNAMES[3] = 'Logout';
        this.setState({ isAuthenticated: true, loginName: name })
    }
    signout() {
        MENUNAMES[3] = 'Login';
        this.setState({ isAuthenticated: false, loginName: '' })
    }
    render() {
        this.authenticate = this.authenticate.bind(this);
        this.signout = this.signout.bind(this);
        return <BrowserRouter>
            <div>
                <AppMenu
                    disabled={!this.state.loginName}
                    loginName={this.state.loginName}
                    isAuthenticated={this.state.isAuthenticated}
                    signout={this.signout}
                />
                <Switch>
                    <Route exact path='/calendar' render={() => {
                        return this.state.isAuthenticated
                            ? <CalendarView />
                            : <Redirect to={`/`} />
                    }} />
                    <Route exact path='/tasks' render={() => {
                        return this.state.isAuthenticated
                            ? (<div>
                                <AddTask />
                                <Filter />
                                <TaskTable /></div>)
                            : <Redirect to={`/`} />
                    }} />
                    <Route exact path='/about' render={() => {
                        return <About />
                    }} />
                    <Route exact path='/' render={() => {
                        return <LoginWindow isAuthenticated={this.state.isAuthenticated}
                            authenticate={this.authenticate}
                        />
                    }} />
                </Switch>
            </div>
        </BrowserRouter>
    }
}
