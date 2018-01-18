import React, { Component } from 'react';
import DateInput from '../DateInput/DateInput';


class Filter extends Component {
    render() {
        return (
            <fieldset>
                <legend>Filter</legend>
                <input type='checkbox'></input>
                <span>Show completed </span>
                <DateInput />
                <DateInput />
                <br />
                <input type='text' placeholder='Text search (title+description)' className='searchInput'></input>
            </fieldset>
        );
    }
}

export default Filter;
