import React, { Component } from 'react';

import DateInput from '../../DateInput/DateInput';

class RowTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    <input type='checkbox' checked={this.props.checked} />
                </td>
                <td>{this.props.title || '--title--'}</td>
                <td>{this.props.priority || '--priority--'}</td>
                <td><DateInput /></td>
            </tr>
        );
    }
}

export default RowTable;
