let conditions;
export default (tasks, filter) => {
    return tasks.filter((item) => {
        conditions = [true];
        if (!filter.showCompleted) {
            conditions.push(!item.checked);
        }
        if (filter.textSearch) {
            conditions.push(`${item.title}   ${item.description}`.toLowerCase().indexOf(filter.textSearch) > -1);
        }
        if (filter.firstDate) {
            conditions.push(item.date >= filter.firstDate);
            console.log(item.date + '-----' + filter.firstDate)
        }
        if (filter.lastDate) {
            conditions.push(item.date <= filter.lastDate);
        }
        return conditions.every(condition => condition);
    });
}