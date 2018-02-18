import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { MENUNAMES } from '../ToDoListWrapper';
export class AppMenu extends Component {

    state = {
        activeItem: MENUNAMES[3]
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state;
        const { disabled, loginName } = this.props
        return (<Menu pointing>
            <Link to='/calendar'>
                <Menu.Item name={MENUNAMES[0]}
                    active={activeItem === MENUNAMES[0]}
                    disabled={disabled}
                    onClick={this.handleItemClick}
                />
            </Link>
            <Link to='/tasks'>
                <Menu.Item name={MENUNAMES[1]}
                    active={activeItem === MENUNAMES[1]}
                    disabled={disabled}
                    onClick={this.handleItemClick}
                />
            </Link>
            <Link to='/about'>
                <Menu.Item name={MENUNAMES[2]}
                    active={activeItem === MENUNAMES[2]}
                    onClick={this.handleItemClick}
                />
            </Link>
            <span className='greeting_span'>
                {loginName ? 'Hello, ' + loginName : ''}
            </span>
            <Menu.Menu position='right'>
                <Link to='/'>
                    <Menu.Item name={MENUNAMES[3]}
                        active={activeItem === MENUNAMES[3]}
                        onClick={() => {
                            this.handleItemClick(undefined, { name: 'Login' })
                            this.props.signout()
                        }}
                    />
                </Link>
            </Menu.Menu>
        </Menu>

        );
    }
}