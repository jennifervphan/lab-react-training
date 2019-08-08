import React, { Component } from 'react';
import NumbersTable from '../components/NumbersTable.jsx';

export default class NumbersTablePage extends Component {
    render() {
        return (
            <div>
                <NumbersTable limit={12} />
            </div>
        )
    }
}
