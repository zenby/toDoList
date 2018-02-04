import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import AddTask from './components/AddTask';
import Filter from './components/Filter';
import TaskTable from './components/TaskTable';
import { CalendarView } from './components/CalendarView';
import { LoginWindow } from './components/Login'

import { Provider } from 'react-redux';
import store from './config/store'

import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { AppMenu } from './components/Menu';

export class ToDoListWrapper extends Component {
  state = { activeItem: 'Calendar' }
  handleItemClick = (ev, { name }) => {
    this.setState({ activeItem: name })
  }
  menuItems = [
    {
      menuPoint: 'Calendar',
      content: <CalendarView key={'Calendar'} />
    },
    {
      menuPoint: 'Tasks',
      content: <div key={'div_tasks'}>
        <AddTask />
        <Filter />
        <TaskTable />
      </div>
    },
    {
      menuPoint: 'About',
      content: <div key={'div_about'}>
        <h3> Hello from Evgeniy</h3>
      </div>
    }
  ]

  render() {

    return <div>
      <AppMenu activeItem={this.state.activeItem} handleItemClick={this.handleItemClick} />
      {/* <LoginWindow /> */}
      {(this.menuItems.filter(item => item.menuPoint === this.state.activeItem))
        .map(item => item.content)}

    </div>
  }
}

ReactDOM.render(
  <Provider store={store}>
    <ToDoListWrapper />
  </Provider>,
  document.getElementById('root')
);

