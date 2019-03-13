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
            <Link to='/calendar'
                onClick={() => this.handleItemClick(undefined, { name: MENUNAMES[0] })}>
                <Menu.Item name={MENUNAMES[0]}
                    active={activeItem === MENUNAMES[0]}
                    disabled={disabled}
                />
            </Link>
            <Link to='/tasks'
                onClick={() => this.handleItemClick(undefined, { name: MENUNAMES[1] })}>
                <Menu.Item name={MENUNAMES[1]}
                    active={activeItem === MENUNAMES[1]}
                    disabled={disabled}
                />
            </Link>
            <Link to='/about'
                onClick={() => this.handleItemClick(undefined, { name: MENUNAMES[2] })}>
                <Menu.Item name={MENUNAMES[2]}
                    active={activeItem === MENUNAMES[2]}
                />
            </Link>
            <span className='greeting_span'>
                {loginName ? '  Hello, ' + loginName : ''}
            </span>
            <Menu.Menu position='right'>
                <Link to='/' onClick={() => {
                    this.handleItemClick(undefined, { name: 'Login' })
                    this.props.signout()
                }}>
                    <Menu.Item name={MENUNAMES[3]}
                        active={activeItem === MENUNAMES[3]}

                    />
                </Link>
            </Menu.Menu>
        </Menu>

        );
    }
}