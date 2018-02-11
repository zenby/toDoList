import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
export class About extends Component {
    render() {
        return (<div className='login_window'>
            <Card >
                <Image src="https://avatars1.githubusercontent.com/u/32563455?s=460&amp;v=4" />
                <Card.Header textAlign='center'>
                    Dainovich Evgeniy
                </Card.Header>
            </Card>
            <a href='https://www.linkedin.com/in/evgeniy-dainovich/'>linkedIn</a>
        </div>)
    }
}