import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RowTable } from './RowTable';
import { RowHeadTable } from './RowHeadTable'
import { Table } from 'semantic-ui-react';
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
            <fieldset>
                <Table textAlign='center'>
                    <Table.Header>
                        <RowHeadTable setOrder={(order) => this.setState({ order })} />
                    </Table.Header>
                    <Table.Body>
                        {sortedTasks.map((task) =>
                            <RowTable key={task.id}
                                task={task}
                                removeTask={removeTask}
                                updateTask={updateTask} />)}
                    </Table.Body>
                </Table>
            </fieldset>
        );
    }
}

TaskTable.propTypes = {
    tasks: PropTypes.array,
    removeTask: PropTypes.func,
    updateTask: PropTypes.func
};

