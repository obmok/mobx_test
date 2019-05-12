import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'
import User from './user'
import NavBar from '../nav-bar'
import UsersSearchBar from './search-bar'


@inject('users')
@observer
class Users extends Component {

  constructor(props) {
    super(props);
    this.goToPage = this.goToPage.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    const {users} = this.props;
    if (!users.loaded) users.loadAll();
  }

  goToPage(url){
    const {users} = this.props;
    users.loadResultsPage(url);
  }

  search(criteria){
    const {users} = this.props;
    if (criteria.get('login') !== '')
      users.search(criteria)
    else
      users.loadAll(criteria);
  }

  render() {
    const {links, list, size, loading } = this.props.users;
    let usersJS, usersList, usersLoading
    if (loading)
      usersLoading = 'Loading...'
    else{
      usersJS = size > 0 ? list : null;
      usersList = usersJS ? usersJS.map((user, key) => <User key={key} login={user.login} url={user.html_url} />) : 'No users were found'
    } 
     return (
      <div>
        <UsersSearchBar find={this.search}/>
        <div className='list'>
          {usersList}
          {usersLoading}
        </div>
        <NavBar links={links} move={this.goToPage}/>
      </div>
    )
  }
}

export default Users