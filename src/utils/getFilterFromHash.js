export const getFilterFromHash = () => {
    var string = window.location.hash.slice(1);
    var array = [...string.split('&').map(item => item.split('_'))];
    array = array.map(item => {
        return { [item[0]]: item[1] }
    })
    var filter = {};
    array.map(item => {
        return filter = { ...filter, ...item }
    })
    filter.showCompleted = filter.showCompleted === 'true';
    return filter;
}