import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'
import UsersList from '../users/'
import NavBar from '../nav-bar'
import UsersSearchBar from '../users/search-bar' 

@inject('users')
@observer
class UsersPage extends Component {

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
    const {links} = this.props.users;
    return (
      <>
        <UsersSearchBar find={this.search}/>
        <h1>Users</h1>
        <UsersList />
        <NavBar links={links} move={this.goToPage}/>
      </>
    )
  }
}

export default UsersPage