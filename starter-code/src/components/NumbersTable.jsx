import React, { Component } from 'react'

export default class NumbersTable extends Component {
    numberOfDivs=(limit)=>{
        let divs=(
            <div>2</div>
        ).repeat(limit);
        return divs;
    }
    render() {
        const {limit}=this.props;

        debugger
        return (
            <div>
                {this.numberOfDivs(limit)}
            </div>
        )
    }
}
