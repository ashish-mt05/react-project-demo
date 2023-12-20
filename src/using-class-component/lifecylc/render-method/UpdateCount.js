import React, { Component } from 'react'

export default class UpdateCount extends Component {
  render() {
    return (
      <div>
        <h3>child component data : </h3>
        <p>count : {this.props.count}</p>
      </div>
    )
  }
}

