import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class DateInput extends Component {
    render() {
        return (
            <input type="date" name="date"
                max="2100-01-01" min="1970-01-01"
                defaultValue={this.props.date}
                onChange={this.props.onChange}
            />
        );
    }
}


