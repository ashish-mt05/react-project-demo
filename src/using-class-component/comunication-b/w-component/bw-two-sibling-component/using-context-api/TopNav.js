import React, { Component } from 'react'
import UserInfoContext from './UserInfoContext';

export default class TopNav extends Component {
  render() {
    const {name, email} = this.context;
    return (
      <div>
        <h4>TopNav data : </h4>
        <p>Name : {name}</p>
        <p>Email : {email}</p>
    </div>
    )
  }
}
//1st way to consume context api.
TopNav.contextType = UserInfoContext;

// The contextType property on a class can be assigned a Context object created by React.
// createContext(). Using this property lets you consume the nearest current value of that 
// Context type using this.context. You can reference this in any of the lifecycle methods
//  including the render function.
