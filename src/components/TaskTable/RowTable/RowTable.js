import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DateInput } from '../../DateInput';
import { ModalExample } from './ModalUpdate';

export class RowTable extends Component {
    changeTaskProp(propName, value) {
        this.props.updateTask(this.props.task.id, {
            [propName]: value
        });
    }

    render() {
        const { task, removeTask } = this.props;
        return (
            <tr>
                <td>
                    <input type='checkbox' checked={task.checked} onChange={(ev) =>
                        this.changeTaskProp('checked', ev.target.checked)} />
                </td>
                <td>{task.title || '--title--'}</td>
                <td>{task.priority || '--priority--'}</td>
                <td><DateInput date={task.date} /></td>
                <td>
                    <button onClick={() =>
                        removeTask(task.id)}>X
                    </button>
                </td>
            </tr>
        );
    }
}

RowTable.propTypes = {
    task: PropTypes.object,
    removeTask: PropTypes.func,
    updateTask: PropTypes.func
};
