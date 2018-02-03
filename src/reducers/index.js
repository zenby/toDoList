import { combineReducers } from 'redux'
import taskReducer from './tasks'
const reducers = combineReducers({
    //поле для store: имя редюсера, который его обрабатывает
    tasks: taskReducer
})
export default reducers;
