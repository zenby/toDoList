import React, { Component } from 'react';
import RowTable from './RowTable';
import { RowHeadTable } from './RowHeadTable'
import { Table } from 'semantic-ui-react';
import sortBy from '../../utils/sortBy';
import { getTasks } from '../../utils/apiWrapper'

import { connect } from 'react-redux';
import { loadTasks_act_cr } from '../../actions/tasks';

export class TaskTable extends Component {
    state = {
        order: 'id'
    }
    componentWillMount() {
        getTasks().then(tasks => this.props.loadTasks_act_cr(tasks))
    }
    render() {
        const {
            tasks
        } = this.props;

        let sortedTasks = sortBy(tasks, this.state.order);
        return (
            <fieldset>
                <Table textAlign='center' className='task_table' >
                    <Table.Header>
                        <RowHeadTable setOrder={(order) => this.setState({ order })} />
                    </Table.Header>
                    <Table.Body>
                        {sortedTasks.map((task) =>
                            <RowTable key={task.id}
                                task={task} />)}
                    </Table.Body>
                </Table>
            </fieldset>
        );
    }
}

const mapStateProps = (state) => ({
    tasks: state.tasks
})

const mapDispatchToProps = {
    loadTasks_act_cr
}

export default connect(mapStateProps, mapDispatchToProps)(TaskTable);


