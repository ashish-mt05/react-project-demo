import React, { Component } from 'react'

export default class State extends Component {
  constructor() {
    super();
    //define state
    this.state = {
      name: "",
    };
  }
  updateName = (event)=>{
    this.setState({
     name : event.target.value
    })
  }
  render() {
   
    return (
      <React.Fragment>
        <h3>State Example in Class Component</h3>
        <input type='text' onChange={this.updateName}/>
        {/*after updating name in state print name */}
        <p>{this.state.name}</p>
      </React.Fragment>
    )
  }
}
