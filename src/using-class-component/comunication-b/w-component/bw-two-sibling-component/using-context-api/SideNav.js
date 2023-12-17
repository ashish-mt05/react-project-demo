import React, { Component } from 'react'
import UserInfoContext from './UserInfoContext'

export default class SideNav extends Component {
  //2nd way to consume context api.
  static contextType = UserInfoContext;
  render() {
    //verify data coming or not in context api
    //alert(JSON.stringify(this.context));
    const {name, email} = this.context;
    return (
      <div>
        <h4>SideNav data : </h4>
        <p>Name : {name}</p>
        <p>Email : {email}</p>
      </div>
    )
  }
}
