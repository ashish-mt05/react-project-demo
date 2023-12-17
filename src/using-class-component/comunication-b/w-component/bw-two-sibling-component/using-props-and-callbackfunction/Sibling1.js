import React, { Component } from 'react'

export default class Sibling1 extends Component {
bioData= {
    name:'ashish',
    designation : 'SE',
    salary:10000
}
  render() {
    return (
      <div>
        <p>send data from child1 to parent</p>
        <button onClick={()=>{this.props.recievedDataFromSibling1(this.bioData)}}>sendDataToParent</button>
      </div>
    )
  }
}
