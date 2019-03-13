import ReactDOM from 'react-dom';
import React from 'react';
import { ToDoListWrapper } from './components/ToDoListWrapper'
import { Provider } from 'react-redux';
import store from './config/store'

import 'semantic-ui-css/semantic.min.css';
import './App.css';

ReactDOM.render(
  <Provider store={store}>
    <ToDoListWrapper />
  </Provider>,
  document.getElementById('root')
);

