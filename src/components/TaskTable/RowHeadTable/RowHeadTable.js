import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HeaderElement } from './HeaderElement';
import PropTypes from 'prop-types';

export class RowHeadTable extends Component {
    render() {
        const orderBy = (name) => (order) => this.props.setOrder(`${order ? '' : '-'}${name}`);
        return (<tr>
            {/* <HeaderElement setSort={orderBy('id')} title='id' /> */}
            <HeaderElement setSort={orderBy('checked')} title='Done' />
            <HeaderElement setSort={orderBy('title')} title='Title' />
            <HeaderElement setSort={orderBy('priority')} title='Priority' />
            <HeaderElement setSort={orderBy('date')} title='Date' readonly />
            <th>Remove </th>
        </tr>
        )
    }
}

RowHeadTable.propTypes = {
    setOrder: PropTypes.func
}


