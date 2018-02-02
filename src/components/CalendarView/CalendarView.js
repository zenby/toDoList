import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Table } from 'semantic-ui-react'
const DAYS = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];

export class CalendarView extends Component {
    state = {
        date: new Date()
    }
    renderHeader() {
        var headerCells = DAYS.map(item => (<Table.HeaderCell key={item}>{item}</Table.HeaderCell>))
        return <Table.Header>
            <Table.Row>
                {headerCells}
            </Table.Row>
        </Table.Header>
    }
    renderCalendarHeader() {
        const { date } = this.state;
        return <Table.Header>
            <Table.Row>
                <Table.HeaderCell onClick={() =>
                    this.setState({ date: new Date(date.getFullYear(), date.getMonth() - 1, 1) })}>
                    <Icon name='chevron left' />
                </Table.HeaderCell>
                <Table.HeaderCell colSpan='5'>
                    {date.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
                </Table.HeaderCell>
                <Table.HeaderCell onClick={() =>
                    this.setState({ date: new Date(date.getFullYear(), date.getMonth() + 1, 1) })}>
                    <Icon name='chevron right' />
                </Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    }

    renderBody(year, month) {
        var currentDate = new Date(year, month - 1, 1);
        var diff = 2 - currentDate.getDay();
        diff === 2 ? currentDate.setDate(-5) : currentDate.setDate(diff);
        var tableBody = [];
        var tableRow = [];
        var isCurrentMonth;
        var nextDay;
        var maxWeeks = 4;
        for (let week = 1; week <= maxWeeks; week++) {
            for (let day = 0; day < 7; day++) {
                isCurrentMonth = currentDate.getMonth() === month - 1 ? false : true;
                tableRow.push(<Table.Cell disabled={isCurrentMonth} key={currentDate.getDate() + '-' + currentDate.getMonth()}>{currentDate.getDate()}</Table.Cell>);
                nextDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
                if (nextDay.getDate() > 22 && nextDay.getDay() === 1 && nextDay.getMonth() === month - 1) {
                    maxWeeks++;
                }
                currentDate.setDate(currentDate.getDate() + 1);
            }
            tableBody.push(<Table.Row key={week}>{tableRow}</Table.Row>)
            tableRow = [];
        }
        return <Table.Body>
            {tableBody}
        </Table.Body>
    }

    render() {
        return (
            <Table textAlign='center' className="calendar_table" celled>
                {this.renderCalendarHeader()}
                {this.renderHeader()}
                {this.renderBody(this.state.date.getFullYear(), this.state.date.getMonth() + 1)}
            </Table>

        )
    }
}

CalendarView.propTypes = {

}