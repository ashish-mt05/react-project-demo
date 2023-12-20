import React, { Component } from 'react'

export default class ConstructorDemo extends Component {
  constructor(){
    super();
    console.log("constructor one of the method of lifecycle.");
  }
  render() {
    console.log("rendor one of the method of lifecycle.");
    return (
      <div>ConstructorDemo</div>
    )
  }
}
