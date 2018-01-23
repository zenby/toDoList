import React, { Component } from 'react';
import { DateInput } from '../DateInput';
import PropTypes from 'prop-types';


export class Filter extends Component {
    render() {
        return (
            <fieldset>
                <legend>{this.props.title}</legend>
                <input type='checkbox'
                    checked={this.props.filter.showCompleted}
                    onChange={(ev) => this.props.onFilterUpdate({ showCompleted: ev.target.checked })}>
                </input>
                <span>Show completed </span>
                <DateInput date={this.props.filter.firstDate}
                    onChange={(ev) => this.props.onFilterUpdate({ firstDate: ev.target.value })
                    } />
                <DateInput date={this.props.filter.lastDate}
                    onChange={(ev) => this.props.onFilterUpdate({ lastDate: ev.target.value })
                    } />
                <br />
                <input type='text'
                    placeholder='Text search (title+description)'
                    className='searchInput'
                    onChange={(ev) => this.props.onFilterUpdate({ textSearch: ev.target.value.toLowerCase() })}
                ></input>
            </fieldset>
        );
    }
}

Filter.propTypes = {
    title: PropTypes.string,
    onFilterUpdate: PropTypes.func
}