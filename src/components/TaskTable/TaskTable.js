import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RowTable } from './RowTable';
import { RowHeadTable } from './RowHeadTable'
import sortBy from '../../utils/sortBy';

export class TaskTable extends Component {
    state = {
        tasks: [],
        order: 'id'
    }
    render() {
        const {
            tasks = [],
            updateTask,
            removeTask
            } = this.props;
        let sortedTasks = sortBy(tasks, this.state.order);
        return (
            <div>
                <table>
                    <caption>
                        Task list
                    </caption>
                    <tbody>
                        <RowHeadTable setOrder={(order) => this.setState({ order })} />
                        {sortedTasks.map((task) =>
                            <RowTable key={task.id}
                                task={task}
                                removeTask={removeTask}
                                updateTask={updateTask} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

TaskTable.propTypes = {
    tasks: PropTypes.array,
    removeTask: PropTypes.func,
    updateTask: PropTypes.func
};
