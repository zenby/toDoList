import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

import { connect } from 'react-redux';
export class CalendarCell extends Component {

    render() {
        //console.dir(this.props.tasks);
        const { isCurrentMonthAndYear, disabled, currentDate, calendarDate } = this.props;
        return <Table.Cell disabled={disabled}
            className={isCurrentMonthAndYear
                && !disabled
                && currentDate.getDate() === calendarDate
                ? 'td-current-date' : ''}
        >{calendarDate}
        </Table.Cell>
    }
}

const mapStateToProps = (state) => ({
    tasks: state.tasks
})

export default connect(mapStateToProps)(CalendarCell);


