import { FILTER_UPDATE } from '../actions/filter';
const DEFAULT_FILTER = {
    showCompleted: true,
    firstDate: '',
    lastDate: '',
    textSearch: ''
};

const filterReducer = (state = DEFAULT_FILTER, action) => {
    switch (action.type) {
        case FILTER_UPDATE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default filterReducer;