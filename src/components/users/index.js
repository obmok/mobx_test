import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'
import User from './user'
import Loader from '../loader'

@inject('users')
@observer
class UsersList extends Component {

  render() {
    const {list, size, loading } = this.props.users;
    let usersList, usersLoading
    if (loading)
      usersLoading = <Loader/>
    else{
      const usersJS = size > 0 ? list : null;
      usersList = usersJS ? usersJS.map((user, key) => <User key={key} login={user.login} url={user.html_url} />) 
        : <span className='message'>No users were found</span>
    } 
     return (
      <div className='list'>
        {usersList}
        {usersLoading}
      </div>
    )
  }
}

export default UsersList