import React, { Component } from 'react';


class DateInput extends Component {
    render() {
        var date = new Date();
        return (
            <input type="date" name="calendar"
                max="2100-06-04" min="2000-05-29" value={this.props.date || (date.getDate() + '-' + date.getMonth() + 1 + '-' + date.getFullYear())} />
        );
    }
}

export default DateInput;
