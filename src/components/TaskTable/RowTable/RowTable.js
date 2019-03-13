import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Input } from 'semantic-ui-react';
import ModalUpdate from './ModalUpdate';
import { removeTask, updateTask } from '../../../utils/apiWrapper';

import { connect } from 'react-redux';
import { removeTask_act_cr, updateTask_act_cr } from '../../../actions/tasks';

export class RowTable extends Component {
    state = {
        showModal: false
    }
    removeTaskFromList = (id) => {
        removeTask(id).then(itemId => this.props.removeTask_act_cr(itemId));
    }
    changeTaskProp(propName, value) {
        updateTask(this.props.task.id, {
            [propName]: value
        }).then(task => this.props.updateTask_act_cr(task));
    }
    handleOpen = () => this.setState({ showModal: true })
    handleClose = () => this.setState({ showModal: false })
    render() {
        const { task } = this.props;
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
                    <Input type='date' readOnly={true} value={task.date} />
                </Table.Cell>
                <Table.Cell>
                    <Button icon='remove'
                        color='red'
                        onClick={() => this.removeTaskFromList(task.id)}>
                    </Button>
                </Table.Cell>
                <ModalUpdate task={task}
                    showModal={this.state.showModal}
                    handleClose={this.handleClose}
                    isEnableToEdit={task.checked}
                />
            </Table.Row>
        )
    }
}

RowTable.propTypes = {
    task: PropTypes.object
};

const mapDispatchToProps = {
    removeTask_act_cr, updateTask_act_cr
}

export default connect(undefined, mapDispatchToProps)(RowTable);