import React, { Component } from 'react'
// Rendor method is called(re-rendor) three times automatically:
// 1. once component is ready(First Time)
// 2. when props got updated.Component
// 3. state got updated
export default class RendorMethodOnceComponetGotLoaded extends Component {
  render() {
    //once component is ready(First Time)
    console.log("rendor method")
    return (
      <div>
       RendorMethodDemo
      </div>
    )
  }
}
