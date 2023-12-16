import React, { Component } from 'react'
import Child from './Child';

export default class Parent extends Component {
    constructor() {
        super();
        //define variable in state to recieved data from child
        this.state = {
            bioData: {}
        }
    }
    receivedDataFromChild = (data)=>{
        this.setState({
            bioData : data
        })
    }
    render() {
        return (
            <div>
                <Child receivedDataFromChild={this.receivedDataFromChild}/>
                <hr/>
                <h5>data from child to parent</h5>
                <p>name : {this.state.bioData.name}</p>
                <p>designation : {this.state.bioData.designation}</p>
                <p>salary : {this.state.bioData.salary}</p>
            </div>
        )
    }
}
