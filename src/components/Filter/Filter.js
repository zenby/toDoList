import React, { Component } from 'react';
import { DateInput } from '../DateInput';
import { Form, Header, Checkbox } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { filterUpdate_act_cr } from '../../actions/filter';

export class Filter extends Component {
    render() {
        const { showCompleted, firstDate, lastDate, textSearch } = this.props.filter;
        return (
            <div>
                <fieldset>
                    <Header as='h3' textAlign='center' >Filter</Header>
                    <Form.Group grouped>

                        <Checkbox
                            label='Show completed'
                            type='checkbox'
                            checked={showCompleted}
                            onChange={(e, data) => this.props.filterUpdate_act_cr({ showCompleted: data.checked })} />

                    </Form.Group>
                    <Form.Group width='equal'>
                        <DateInput date={firstDate}
                            disabled={false}
                            onChange={(ev) => this.props.filterUpdate_act_cr({ firstDate: ev.target.value })} />
                        <DateInput date={lastDate}
                            disabled={false}
                            onChange={(ev) => this.props.filterUpdate_act_cr({ lastDate: ev.target.value })} />
                        <Form.Input
                            className='search_input'
                            placeholder='Search...'
                            icon='search'
                            iconPosition='left'
                            defaultValue={textSearch}
                            onChange={(ev) => this.props.filterUpdate_act_cr({ textSearch: ev.target.value.toLowerCase() })}
                        ></Form.Input>
                    </Form.Group>
                </fieldset>
            </div>
        );
    }
}

const mapStateProps = (state) => ({
    tasks: state.tasks,
    filter: state.filter
})

const mapDispatchToProps = {
    filterUpdate_act_cr
}

export default connect(mapStateProps, mapDispatchToProps)(Filter);
