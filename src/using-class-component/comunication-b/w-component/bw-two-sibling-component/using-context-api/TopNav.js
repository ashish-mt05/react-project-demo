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
