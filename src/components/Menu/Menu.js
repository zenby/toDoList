import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export class AppMenu extends Component {
    handleItemClick = this.props.handleItemClick;
    render() {

        const { activeItem } = this.props
        return (<Menu pointing>
            <Menu.Item name='Calendar'
                active={activeItem === 'Calendar'}
                onClick={this.handleItemClick} />

            <Menu.Item name='Tasks'
                active={activeItem === 'Tasks'}
                onClick={this.handleItemClick} />

            <Menu.Item name='About'
                active={activeItem === 'About'}
                onClick={this.handleItemClick} />

            <Menu.Menu position='right'>
                <Menu.Item name='logout'
                    active={activeItem === '1'}
                    onClick={this.handleItemClick} />
            </Menu.Menu>
        </Menu>
        );
    }
}