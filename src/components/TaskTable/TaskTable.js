import React, { Component } from 'react';

import RowTable from './RowTable/RowTable';

class TaskTable extends Component {
    render() {
        return (
            <div>
                <table>
                    <caption>
                        Task list
                    </caption>
                    <tbody>
                        <tr>
                            <th>Done</th>
                            <th>Title</th>
                            <th>Priority</th>
                            <th>Date</th>
                        </tr>
                        <RowTable title='gore' priority='ot yma' checked='checked' />
                        <RowTable title='gore1' />
                        <RowTable />
                        <RowTable />
                        <RowTable />
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TaskTable;
