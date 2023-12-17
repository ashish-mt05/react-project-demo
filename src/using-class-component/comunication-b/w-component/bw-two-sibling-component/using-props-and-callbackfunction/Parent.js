import React, { Component } from 'react'
import Sibling1 from './Sibling1';
import Sibling2 from './Sibling2';

// step1: first send data from sibling1 to parent using callback function.
// step2: Then send data from parent to child using props
export default class Parent extends Component {
  constructor(){
    super();
    this.state = {
      bioData : {}
    }
  }
  recievedDataFromSibling1 = (childData)=>{
    this.setState({
      bioData : childData
    })
  }
  render() {
    return (
      <div>
          <Sibling1 recievedDataFromSibling1={this.recievedDataFromSibling1}/>
          <Sibling2 bioData={this.state.bioData}/>
      </div>
    )
  }
}
