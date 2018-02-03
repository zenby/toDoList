import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { addTask, removeTask, updateTask } from './utils/apiWrapper';
import AddTask from './components/AddTask';
import { Filter } from './components/Filter';
import TaskTable from './components/TaskTable';
import { CalendarView } from './components/CalendarView/CalendarView';

import { Provider } from 'react-redux';
import store from './config/store'

import 'semantic-ui-css/semantic.min.css';
import './App.css';

export class ToDoListWrapper extends Component {

  state = {
    tasks: [],
    filter: {
      showCompleted: true,
      firstDate: '',
      lastDate: '',
      textSearch: ""
    }
  }

  addTask = (taskData) => {
    addTask(taskData).then((taskData) =>
      this.setState({
        tasks: [...this.state.tasks, taskData]
      }))
  }
  removeTask = (id) => {
    let tasks = this.state.tasks;
    this.setState({
      tasks: this.state.tasks.filter(item => item.id !== id)
    })
    removeTask(id).catch(() => this.setState({
      tasks
    }))
  }
  updateTask = (id, changes) => {
    updateTask(id, changes).then((updatedItem) => {
      this.setState({
        tasks: this.state.tasks.map(item => item.id !== id ? item : {
          ...item,
          ...updatedItem
        })
      });
    })
  }
  onFilterUpdate = (changes) => {
    this.setState({
      filter: {
        ...this.state.filter,
        ...changes
      }
    });
  }
  render() {
    const {
      tasks,
      filter,
      filter: { showCompleted, firstDate, lastDate, textSearch }
  } = this.state;

    let conditions;
    const filteredTasks = tasks.filter((item) => {
      conditions = [true];
      if (!showCompleted) {
        conditions.push(!item.checked);
      }
      if (textSearch) {
        conditions.push(`${item.title}${item.description}`.toLowerCase().indexOf(textSearch) > -1);
      }
      if (firstDate) {
        conditions.push(item.date > firstDate);
      }
      if (lastDate) {
        conditions.push(item.date < lastDate);
      }
      return conditions.every(condition => condition);
    });
    return <div>
      <AddTask />
      <Filter title={'Filter'}
        filter={filter}
        onFilterUpdate={this.onFilterUpdate} />
      <TaskTable

        updateTask={this.updateTask} />
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

