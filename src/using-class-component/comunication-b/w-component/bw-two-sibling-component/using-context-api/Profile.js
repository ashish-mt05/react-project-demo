import React, { Component } from 'react'
import UserInfoContext from './UserInfoContext'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <h4>Profile data : </h4>
        {/* 3rd  way to consume context api. */}
        <UserInfoContext.Consumer>
            { 
              (props)=>{
                const {name, email} = props;
                return (
                  <>
                     <p>name : {name}</p>
                     <p>email : {email}</p>
                  </>
                )
              }  
            }
        </UserInfoContext.Consumer>
      </div>
    )
  }
}
