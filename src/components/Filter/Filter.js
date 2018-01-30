import React, { Component } from 'react';
import { DateInput } from '../DateInput';
import { Form, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export class Filter extends Component {
    render() {
        return (
            <div>
                <fieldset>
                    <Header as='h3' textAlign='center' >{this.props.title}</Header>
                    <Form.Group>
                        <input
                            className="search_checkbox"
                            type='checkbox'
                            checked={this.props.filter.showCompleted}
                            onChange={(ev) => this.props.onFilterUpdate({ showCompleted: ev.target.checked })}>
                        </input>
                        <label>Show completed</label>
                        <DateInput date={this.props.filter.firstDate}
                            disabled={false}
                            onChange={(ev) => this.props.onFilterUpdate({ firstDate: ev.target.value })} />
                        <DateInput date={this.props.filter.lastDate}
                            disabled={false}
                            onChange={(ev) => this.props.onFilterUpdate({ lastDate: ev.target.value })} />
                        <Form.Input
                            className='search_input'
                            placeholder='Search...'
                            icon='search'
                            iconPosition='left'
                            onChange={(ev) => this.props.onFilterUpdate({ textSearch: ev.target.value.toLowerCase() })}
                        ></Form.Input>
                    </Form.Group>
                </fieldset>
            </div>
        );
    }
}

Filter.propTypes = {
    title: PropTypes.string,
    onFilterUpdate: PropTypes.func
}