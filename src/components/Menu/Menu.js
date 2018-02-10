import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { MENUNAMES } from '../ToDoListWrapper';
export class AppMenu extends Component {

    handleItemClick = this.props.handleItemClick;
    render() {
        const { activeItem, disabled, loginName } = this.props
        return (<Menu pointing>
            <Menu.Item name={MENUNAMES[0]}
                active={activeItem === MENUNAMES[0]}
                onClick={this.handleItemClick}
                disabled={disabled} />

            <Menu.Item name={MENUNAMES[1]}
                active={activeItem === MENUNAMES[1]}
                onClick={this.handleItemClick}
                disabled={disabled} />

            <Menu.Item name={MENUNAMES[2]}
                active={activeItem === MENUNAMES[2]}
                onClick={this.handleItemClick} />
            <span className='greeting_span'>
                {loginName ? 'Hello, ' + loginName : ''}
            </span>
            <Menu.Menu position='right'>
                <Menu.Item name={MENUNAMES[3]}
                    active={activeItem === MENUNAMES[3]}
                    onClick={() => {
                        this.handleItemClick(undefined, { name: MENUNAMES[3] });
                        this.props.removeAccess();
                    }} />
            </Menu.Menu>
        </Menu>
        );
    }
}