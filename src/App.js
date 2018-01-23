import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { AddTask } from './components/AddTask';
import { Filter } from './components/Filter';
import { TaskTable } from './components/TaskTable';
import { getTasks, addTask, removeTask, updateTask } from './utils/apiWrapper';


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
  componentWillMount() {
    getTasks().then((tasks) => this.setState({ tasks }));
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
    updateTask(id, changes).then((updatedItem) => this.setState({
      tasks: this.state.tasks.map(item => item.id !== id ? item : {
        ...item,
        ...updatedItem
      })
    }))
  }

  onFilterUpdate = (changes) => {
    console.dir(this.state);
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

    const filteredTasks = tasks.filter((item) => {
      let conditions = [true];
      if (!showCompleted) {
        conditions.push(!item.checked);
      }
      if (textSearch) {
        conditions.push(item.title.toLowerCase().indexOf(textSearch) > -1
          || item.description.toLowerCase().indexOf(textSearch) > -1);
      }
      if (firstDate) {

        conditions.push(item.date.split('-').join() > firstDate.split('-').join());

      }
      if (lastDate) {
        conditions.push(item.date.split('-').join() < lastDate.split('-').join());
      }

      return conditions.every(condition => condition);
    });
    // const filteredTasks = showCompleted ? tasks : tasks.filter((item) => {
    //   // item.date > firstDate && item.date < lastDate && 

    //   return !item.checked && (~item.description.indexOf(textSearch) || ~item.title.indexOf(textSearch))
    // });

    return <div>
      <AddTask onSubmit={this.addTask} />
      <Filter title={'Filter'}
        filter={filter}
        onFilterUpdate={this.onFilterUpdate} />
      <TaskTable tasks={filteredTasks}
        removeTask={this.removeTask}
        updateTask={this.updateTask} />
    </div>;
  }
}



ReactDOM.render(<ToDoListWrapper />,
  document.getElementById('root')
);

