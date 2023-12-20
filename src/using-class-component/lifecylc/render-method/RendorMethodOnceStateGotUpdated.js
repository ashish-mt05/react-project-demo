import React, { Component } from 'react'

export default class RendorMethodOnceStateGotUpdated extends Component {
  constructor(){
    super();
    this.state = {
        count : 0
    }
  }
  updateCount = ()=>{
    this.setState({
      count : this.state.count+1
    })
  }
  render() {
    console.log("render method got called once stae got update : " + this.state.count);
    return (
      <div>
        <hr/>
        <p>count : {this.state.count} </p>
        <button onClick={this.updateCount}>incrementCount</button>
      </div>
    )
  }
}
