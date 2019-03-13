import { FILTER_UPDATE } from '../../actions/filter';
import { getFilterFromHash } from '../../utils/getFilterFromHash'
var hashObject = getFilterFromHash();
export default (store) => {
    return next => action => {
        if (action.type === FILTER_UPDATE) {
            hashObject = { ...hashObject, ...action.payload };
            window.location.hash =
                `showCompleted_${hashObject.showCompleted}`
                + (hashObject.firstDate ? `&firstDate_${hashObject.firstDate}` : '')
                + (hashObject.lastDate ? `&lastDate_${hashObject.lastDate}` : '')
                + (hashObject.textSearch ? `&textSearch_${hashObject.textSearch}` : '')
        }
        return next(action)
    }
}
