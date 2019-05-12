import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'
import Repository from './repository'
import NavBar from '../nav-bar'
import RepositoriesSearchBar from './search-bar'

@inject('repositories')
@observer
class Repositories extends Component {

  constructor(props) {
    super(props);
    this.goToPage = this.goToPage.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    const {repositories} = this.props;
    if (!repositories.loaded) repositories.loadAll();
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
    const {links, list, size, loading } = this.props.repositories;
    let repositoriesJS, repositoriesList, repositoriesLoading
    if (loading)
      repositoriesLoading = 'Loading...'
    else{
      repositoriesJS = size > 0 ? list : null;
      repositoriesList = repositoriesJS ? repositoriesJS.map((repository, key) => <Repository key={key} id={key} name={repository.full_name} url={repository.html_url} stars={repository.stargazers_count} forks={repository.forks}/>) : 'No repositories were found'
    }
    return (
      <div>
        <RepositoriesSearchBar find={this.search}/>
        <div className='list'>
          {repositoriesList}
          {repositoriesLoading}
        </div>
        <NavBar links={links} move={this.goToPage}/>
      </div>
    )
  }
}

export default Repositories