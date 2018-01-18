import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import AddTask from './components/AddTask';
import Filter from './components/Filter/Filter';
import TaskTable from './components/TaskTable/TaskTable';

import registerServiceWorker from './registerServiceWorker';



function App(props) {
  return <div>
    <AddTask />
    <Filter />
    <TaskTable />
  </div>;
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
export default App;