import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RowTable } from './RowTable';
import { RowHeadTable } from './RowHeadTable'
import { Table } from 'semantic-ui-react';
import sortBy from '../../utils/sortBy';

export class TaskTable extends Component {
    state = {
        tasks: [],
        order: 'id'
    }

    render() {
        const {
            tasks = [],
            updateTask,
            removeTask
        } = this.props;
        let sortedTasks = sortBy(tasks, this.state.order);
        return (
            <fieldset>
                <Table textAlign='center'>
                    <Table.Header>
                        <RowHeadTable setOrder={(order) => this.setState({ order })} />
                    </Table.Header>
                    <Table.Body>
                        {sortedTasks.map((task) =>
                            <RowTable key={task.id}
                                task={task}
                                removeTask={removeTask}
                                updateTask={updateTask} />)}
                    </Table.Body>
                </Table>
            </fieldset>
        );
    }
}

TaskTable.propTypes = {
    tasks: PropTypes.array,
    removeTask: PropTypes.func,
    updateTask: PropTypes.func
};


// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { RowTable } from './RowTable';
// import { RowHeadTable } from './RowHeadTable'
// import { Table } from 'semantic-ui-react';
// import sortBy from '../../utils/sortBy';
// import { Header, Modal } from 'semantic-ui-react'

// export class TaskTable extends Component {
//     state = {
//         tasks: [],
//         order: 'id',
//         modalOpen: false
//     }


//     render() {

//         // const handleOpen = () => {
//         //     console.log('handle open');
//         //     this.setState({ modalOpen: true })
//         // };
//         // const
//         //     handleClose = () => this.setState({ modalOpen: false });
//         const {
//             tasks = [],
//             updateTask,
//             removeTask
//         } = this.props;
//         let sortedTasks = sortBy(tasks, this.state.order);
//         return (
//             <div>
//                 <Table textAlign='center'>
//                     <Table.Header>
//                         <RowHeadTable setOrder={(order) => this.setState({ order })} />
//                     </Table.Header>
//                     <Table.Body>
//                         {sortedTasks.map((task) => (

//                             <Modal trigger={<RowTable onClick={(event) => { console.log(event); this.setState({ modalOpen: true }) }} key={task.id} task={task} removeTask={removeTask} updateTask={updateTask} />}
//                                 open={this.state.modalOpen}
//                                 onClose={() => this.setState({ modalOpen: false })}
//                                 key={task.id}>
//                                 <Modal.Header>Modal</Modal.Header>
//                                 <Modal.Content >
//                                     <Modal.Description>
//                                         <Header>Default Profile Image</Header>
//                                         <p>Is it okay?</p>
//                                     </Modal.Description>
//                                 </Modal.Content>
//                             </Modal>))}
//                     </Table.Body>
//                 </Table>
//             </div>
//         );
//     }
// }

// TaskTable.propTypes = {
//     tasks: PropTypes.array,
//     removeTask: PropTypes.func,
//     updateTask: PropTypes.func
// };
