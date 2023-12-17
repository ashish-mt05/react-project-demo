import React, { Component } from 'react'
import TopNav from './TopNav'
import Profile from './Profile'
import UserInfoContext from './UserInfoContext';
import SideNav from './SideNav';

// The consumer components are TopNav and Profile to context api data
// The state the receiving components need is in UserInfoCOntext.Provider
// All child components of UserProvider have direct access to the name, email including TopNav, Page, and Profile
// Direct access means that even though Page is a parent component to Profile, it doesn’t have to be an intermediary component anymore:
export default class Main extends Component {
    userInfo = {
        name: 'ashish',
        email: 'ashish@gmail.com'
    }

    render() {
        return (
            <div>
                <UserInfoContext.Provider value={this.userInfo}>
                    <TopNav />
                    <hr/>
                    <Profile /> 
                    <hr/>
                    <SideNav />
                </UserInfoContext.Provider>
            </div>
        )
    }
}
