import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  bioData= {
      name:'ashish',
      designation : 'SE',
      salary:10000
  }
  render() {
    return (
      <div>
        <Child bioData={this.bioData}/>
      </div>
    )
  }
}
