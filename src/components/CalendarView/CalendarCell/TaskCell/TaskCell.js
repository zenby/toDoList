import React, { Component } from 'react';
import { List, Icon, Checkbox, Label } from 'semantic-ui-react';
import { removeTask, updateTask } from '../../../../utils/apiWrapper';
import { removeTask_act_cr, updateTask_act_cr } from '../../../../actions/tasks';
import ModalUpdate from '../../../TaskTable/RowTable/ModalUpdate'

import { connect } from 'react-redux';

export class TaskCell extends Component {
    state = {
        showModal: false
    }
    removeTaskFromCell = (id) => {
        removeTask(id).then(itemId => this.props.removeTask_act_cr(itemId));
    }
    changeTaskComplete(value) {
        updateTask(this.props.task.id, { checked: value })
            .then(task => this.props.updateTask_act_cr(task));
    }
    handleOpen = () => this.setState({ showModal: true })
    handleClose = () => this.setState({ showModal: false })
    render() {
        return (
            <List.Item 
            onDoubleClick={this.handleOpen}>
                <Label className='list_item'>
                    <Checkbox
                    className='calendar_checkbox_item'
                        defaultChecked={this.props.task.checked}
                        onChange={(e, data) => this.changeTaskComplete(data.checked)}
                    />
                    {this.props.task.title}
                    <Icon name='remove' size='large' className='remove_icon'
                        onClick={() => this.removeTaskFromCell(this.props.task.id)}
                    />
                </Label>
                <ModalUpdate task={this.props.task}
                    showModal={this.state.showModal}
                    handleClose={this.handleClose}
                    isEnableToEdit={this.props.task.checked}
                />
            </List.Item>
        )
    }
}

const mapDispatchToProps = {
    updateTask_act_cr, removeTask_act_cr
}

export default connect(undefined, mapDispatchToProps)(TaskCell);