import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import filterMiddleware from '../config/Midleware/filterMidleware'
import hashMiddleware from '../config/Midleware/hashMiddleware'


const store = createStore(reducers, applyMiddleware(filterMiddleware, hashMiddleware));
export default store;



