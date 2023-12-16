import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
         <p>name : {this.props.bioData.name}</p>
         <p>designation : {this.props.bioData.designation}</p>
         <p>salary : {this.props.bioData.salary}</p>
      </div>
    )
  }
}
