import React, { Component } from 'react'

export default class Sibling2 extends Component {
  render() {
    return (
      <div>
        <hr/>
        <h4>data from parent(parent to-child2)</h4>
        <p>name : {this.props.bioData.name}</p>
         <p>designation : {this.props.bioData.designation}</p>
         <p>salary : {this.props.bioData.salary}</p>
      </div>
    )
  }
}
