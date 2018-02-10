import React, { Component } from 'react';
import AddTask from './AddTask';
import Filter from './Filter';
import TaskTable from './TaskTable';

import { CalendarView } from './CalendarView';
import { LoginWindow } from './Login'

import { AppMenu } from './Menu';
import { About } from './About';

export const MENUNAMES = ['Calendar', 'Tasks', 'About', 'Login', 'Kisa'];

export class ToDoListWrapper extends Component {
    state = { activeItem: MENUNAMES[3], loginName: '' }
    grantAccess = (name) => {
        this.setState({ loginName: name });
        MENUNAMES[3] = 'Logout';
    };
    removeAccess = () => {
        MENUNAMES[3] = 'Login';
        this.setState({ activeItem: MENUNAMES[3], loginName: '' })
    }
    handleItemClick = (ev, { name }) => {
        this.setState({ activeItem: name })
    }
    menuItems = [
        {
            menuPoint: MENUNAMES[0],
            content: <CalendarView key={MENUNAMES[0]} />
        },
        {
            menuPoint: MENUNAMES[1],
            content: <div key={'div_tasks'}>
                <AddTask />
                <Filter />
                <TaskTable />
            </div>
        },
        {
            menuPoint: MENUNAMES[2],
            content: <About key={MENUNAMES[2]} />
        },
        {
            menuPoint: MENUNAMES[3],
            content: <LoginWindow key={MENUNAMES[3]}
                handleItemClick={this.handleItemClick}
                grantAccess={this.grantAccess} />
        }
    ]
    debugger;
    render() {
        return <div>
            <AppMenu
                activeItem={this.state.activeItem}
                handleItemClick={this.handleItemClick}
                disabled={!this.state.loginName}
                removeAccess={this.removeAccess}
                loginName={this.state.loginName}
            />
            {(this.menuItems.filter(item => item.menuPoint === this.state.activeItem))
                .map(item => item.content)}
        </div>
    }
}
