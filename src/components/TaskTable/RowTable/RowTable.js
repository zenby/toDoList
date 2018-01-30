import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'semantic-ui-react';
import { DateInput } from '../../DateInput';
import { ModalUpdate } from './ModalUpdate';

export class RowTable extends Component {
    state = {
        showModal: false
    }
    changeTaskProp(propName, value) {
        this.props.updateTask(this.props.task.id, {
            [propName]: value
        });
    }
    handleOpen = () => this.setState({ showModal: true })
    handleClose = () => this.setState({ showModal: false })

    render() {
        const { task, removeTask, updateTask } = this.props;
        return (
            <Table.Row onDoubleClick={this.handleOpen} >
                <Table.Cell>
                    <input type='checkbox'
                        className="search_checkbox"
                        checked={task.checked}
                        onChange={(ev) =>
                            this.changeTaskProp('checked', ev.target.checked)} />
                </Table.Cell>
                <Table.Cell>{task.title || '--title--'}</Table.Cell>
                <Table.Cell>{task.priority || '--priority--'}</Table.Cell>
                <Table.Cell>
                    <DateInput date={task.date} disabled={true} />
                </Table.Cell>
                <Table.Cell>
                    <Button icon='remove'
                        color='red'
                        onClick={() => removeTask(task.id)}>
                    </Button>
                </Table.Cell>
                <ModalUpdate task={task}
                    showModal={this.state.showModal}
                    handleClose={this.handleClose}
                    isEnableToEdit={task.checked}
                    updateTask={updateTask}
                />
            </Table.Row>
        )
    }
}

RowTable.propTypes = {
    task: PropTypes.object,
    removeTask: PropTypes.func,
    updateTask: PropTypes.func
};

