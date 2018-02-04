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

export class ToDoListWrapper extends Component {

  render() {
    return <div>
      {/* <LoginWindow /> */}
      <AddTask />
      <Filter />
      <TaskTable />
      <CalendarView />
    </div>
  }
}

ReactDOM.render(
  <Provider store={store}>
    <ToDoListWrapper />
  </Provider>,
  document.getElementById('root')
);

