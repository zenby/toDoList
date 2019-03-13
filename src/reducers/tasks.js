import { ADD_TASK, LOAD_TASKS, REMOVE_TASK, UPDATE_TASK } from '../actions/tasks'
const DEFAULT_TASKS = [];

const taskReducer = (state = DEFAULT_TASKS, action) => {
    switch (action.type) {
        case LOAD_TASKS:
            return action.payload;
        case ADD_TASK:
            return [...state, action.payload];
        case UPDATE_TASK:
            return state.map(task => task.id !== action.payload.id ? task : action.payload);
        case REMOVE_TASK:
            return [...state.filter(task => task.id !== action.payload)];
        default:
            return state;
    }
}

export default taskReducer;
