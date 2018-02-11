import { filterUpdate_act_cr } from '../../actions/filter';
import { getFilterFromHash } from '../../utils/getFilterFromHash'

export default (store) => {
    store.dispatch(filterUpdate_act_cr(getFilterFromHash()))
    window.addEventListener('hashchange', (ev) => {
        store.dispatch(filterUpdate_act_cr(getFilterFromHash()))
    })
    return next => action => next(action)
}