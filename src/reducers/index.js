import { combineReducers } from 'redux'
import taskReducer from './tasks';
import filterReducer from './filter';
const reducers = combineReducers({
    //поле для store: имя редюсера, который его обрабатывает
    tasks: taskReducer,
    filter: filterReducer
})
export default reducers;
