import React, { Component } from 'react'
import RepositoriesList from '../repositories/'
import {observer, inject} from 'mobx-react'
import NavBar from '../nav-bar'
import RepositoriesSearchBar from '../repositories/search-bar'

@inject('repositories')
@observer
class RepositoriesPage extends Component {

  constructor(props) {
    super(props);
    this.goToPage = this.goToPage.bind(this);
    this.search = this.search.bind(this);
  }

  goToPage(url){
    const {repositories} = this.props;
    repositories.loadResultsPage(url);
  }

  search(criteria){
    const {repositories} = this.props;
    if (criteria.get('name') !== '')
      repositories.search(criteria)
    else
      repositories.loadAll(criteria);
  }

  render() {
    const {links} = this.props.repositories;
    return (
      <>
        <RepositoriesSearchBar find={this.search}/>
        <h1>Repositories</h1>
        <RepositoriesList />
        <NavBar links={links} move={this.goToPage}/>
      </>
    )
  }
}

export default RepositoriesPage