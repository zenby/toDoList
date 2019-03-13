import React, { Component } from 'react';
import { Table, List } from 'semantic-ui-react';
import TaskCell from './TaskCell'
import { connect } from 'react-redux';


export class CalendarCell extends Component {

    renderTasks(tasks) {
        var array = tasks.map(item => {
            return <TaskCell task={item} key={item.description} />
        })
        return array;

    }
    render() {
        const { disabled, calendarDate } = this.props;
        let searchDate = calendarDate.toLocaleDateString().split('.').reverse().join('-');
        let today = new Date();
        let currentTasks = this.props.tasks.filter(item => {
            if (item.date === searchDate && !disabled) {
                return true
            }
            else return false;
        })

        return <Table.Cell disabled={disabled}
            className={today.getMonth() === calendarDate.getMonth()
                && today.getDate() === calendarDate.getDate()
                && !disabled
                ? 'td-current-date' : ''}
        >{calendarDate.getDate()}
            <List>
                {this.renderTasks(currentTasks)}
            </List>

        </Table.Cell>
    }
}

const mapStateToProps = (state) => ({
    tasks: state.tasks
})

export default connect(mapStateToProps)(CalendarCell);


