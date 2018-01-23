const LS_KEY = "LS_KEY"
let id = Date.now();
let tasks;
try {
    tasks = JSON.parse(localStorage.getItem(LS_KEY));
} catch (e) {
    console.error('error on parsing tasks', e);
}

export const getId = () => id++;

tasks = Array.isArray(tasks) ? tasks : [
    { checked: true, title: 'have a nice day', priority: "Normal", date: '2018-01-23' },
    { checked: false, title: 'hometask', priority: "Low", date: '2018-01-23' },
    { checked: true, title: 'kitty', priority: "Normal", date: '2018-01-23' },
    { checked: false, title: 'mom', priority: "High", date: '2018-01-23' },
    { checked: true, title: 'have a nice day', priority: "High", date: '2018-01-23' },
].map(item => ({ ...item, id: getId() }));

const saveTasks = () => localStorage.setItem(LS_KEY, JSON.stringify(tasks));

///get all the Tasks from the list on server
export const getTasks = () => new Promise(resolve =>
    setTimeout(resolve, 0, [...tasks]));

///add new Task to list on server
export const addTask = data => {
    let task = { ...data, id: getId() };
    tasks.push(task);
    saveTasks();
    return new Promise(resolve => setTimeout(resolve, 3000, task));
}

//remove task from list on the server
export const removeTask = id => {
    tasks = tasks.filter(item => item.id !== id);
    saveTasks();
    return new Promise(resolve => setTimeout(resolve, 2000, id));
}

//update task on the server
export const updateTask = (id, changes) => {
    tasks = tasks.map(item => item.id !== id ? item : {
        ...item,
        ...changes
    });
    saveTasks();
    return new Promise((resolve) => setTimeout(resolve, 100, {
        ...tasks.find(item => item.id === id)
    }));
}