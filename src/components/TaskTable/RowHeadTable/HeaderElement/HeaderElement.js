import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class HeaderElement extends Component {

    drawSortButtons() {
        return (
            <div>
                <label>{this.props.title}</label>
                <div className="sortUp" onClick={() => this.props.setSort(true)} ></div>
                <div className="sortDown" onClick={() => this.props.setSort(false)} ></div>
            </div>
        )
    }

    render() {
        return (
            <th>
                <div>{this.props.setSort && this.drawSortButtons()} </div>
            </th>
        );
    }
}

HeaderElement.propTypes = {
    title: PropTypes.string,
    setSort: PropTypes.func
}