export const ADD_TASK = 'ADD_TASK';
export const LOAD_TASKS = 'LOAD_TASKS';
export const REMOVE_TASK = 'REMOVE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

export const addTask_act_cr = payload => ({
    type: ADD_TASK,
    payload
})
export const loadTasks_act_cr = payload => ({
    type: LOAD_TASKS,
    payload
})
export const removeTask_act_cr = payload => ({
    type: REMOVE_TASK,
    payload
})
export const updateTask_act_cr = payload => ({
    type: UPDATE_TASK,
    payload
})