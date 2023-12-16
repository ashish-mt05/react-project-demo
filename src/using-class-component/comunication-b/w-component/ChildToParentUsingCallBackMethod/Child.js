import React, { Component } from 'react'

export default class Child extends Component {
  bioData= {
        name:'ashish',
        designation : 'SE',
        salary:10000
  }
  render() {
    return (
      <div>
         {/* 
             //send data to parent when we click on button using callback method.
             //inside callback parameter we can send data to parent.
          */}
         <button onClick={()=> this.props.receivedDataFromChild(this.bioData)}>sendDataToParent</button>
      </div>
    )
  }
}
