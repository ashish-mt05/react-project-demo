import React, { Component } from 'react'
import UpdateCount from './UpdateCount';

export default class RendorMethodOncePropsGotUpdated extends Component {
  constructor(){
    super();
    this.state = {
        count : 0
    }
  }
  updateCount = ()=>{
     this.setState({
        count : this.state.count + 1
     })
  }
  render() {
    console.log("rendor method "+this.state.count);
    return (
      <div>
         <UpdateCount count={this.state.count} />
         <hr/>
         <button onClick={this.updateCount}>updateCount</button>
         
      </div>
    )
  }
}
