import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export class DateInput extends Component {
    render() {
        return (
            <Input type="date" name="date"
                className="class_date field"
                min="1970-01-01"
                max="2100-01-01"
                defaultValue={this.props.date}
                onChange={this.props.onChange}
                disabled={this.props.disabled}
            />
        );
    }
}

DateInput.propTypes = {
    date: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
}



