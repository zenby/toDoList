import React, { Component } from 'react';
import CalendarCell from './CalendarCell';
import { Icon, Table } from 'semantic-ui-react';
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
    changeMonth(value) {
        const { date } = this.state;
        this.setState({ date: new Date(date.getFullYear(), date.getMonth() + value, date.getDate()) })
    }

    renderCalendarHeader() {
        const { date } = this.state;
        return <Table.Header>
            <Table.Row>
                <Table.HeaderCell onClick={() => this.changeMonth(-1)}>
                    <Icon name='chevron left' />
                </Table.HeaderCell>
                <Table.HeaderCell colSpan='5'>
                    {date.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
                </Table.HeaderCell>
                <Table.HeaderCell onClick={() => this.changeMonth(1)}>
                    <Icon name='chevron right' />
                </Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    }

    renderBody(year, month) {
        const { date } = this.state;
        var now = new Date();
        var isCurrentMonthAndYear = now.getFullYear() === date.getFullYear() && now.getMonth() === date.getMonth() ? true : false;

        let calendarDate = new Date(year, month - 1, 1);
        var diff = 2 - calendarDate.getDay();
        diff === 2 ? calendarDate.setDate(-5) : calendarDate.setDate(diff);
        var tableBody = [];
        var tableRow;
        var isChosenMonth;
        var nextDay;
        var maxWeeks = 4;
        for (let week = 1; week <= maxWeeks; week++) {
            tableRow = [];
            for (let day = 0; day < 7; day++) {
                isChosenMonth = calendarDate.getMonth() === month - 1 ? false : true;
                tableRow.push(
                    <CalendarCell
                        currentDate={date}
                        calendarDate={calendarDate.getDate()}
                        isCurrentMonthAndYear={isCurrentMonthAndYear}
                        disabled={isChosenMonth}
                        key={calendarDate.getDate() + 100 * calendarDate.getMonth()}
                    />);
                nextDay = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), calendarDate.getDate() + 1);
                if (nextDay.getDate() > 22 && nextDay.getDay() === 1 && nextDay.getMonth() === month - 1) {
                    maxWeeks++;
                }
                calendarDate.setDate(calendarDate.getDate() + 1);
            }
            tableBody.push(<Table.Row key={week}>{tableRow}</Table.Row>)
        }
        return <Table.Body>
            {tableBody}
        </Table.Body>
    }

    render() {
        return (
            <fieldset>
                <Table textAlign='center' className="calendar_table" celled>
                    {this.renderCalendarHeader()}
                    {this.renderHeader()}
                    {this.renderBody(this.state.date.getFullYear(), this.state.date.getMonth() + 1)}
                </Table>
            </fieldset>

        )
    }
}

