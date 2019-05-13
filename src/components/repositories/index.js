import React, { Component } from 'react'
import Repository from './repository'
import Loader from '../loader'
import {observer, inject} from 'mobx-react'

@inject('repositories')
@observer
class RepositoriesList extends Component {
  
  componentDidMount() {
    const {repositories} = this.props;
    if (!repositories.loaded) repositories.loadAll();
  }

  render() {
    const {list, size, loading } = this.props.repositories;
    let repoList, repoLoading
    if (loading)
      repoLoading = <Loader/>
    else{
      const repoJS = size > 0 ? list : null;
      repoList = repoJS ? repoJS.map((repository, key) => <Repository key={key} id={key} name={repository.full_name} url={repository.html_url} stars={repository.stargazers_count} forks={repository.forks}/>) 
        : <span className='message'>No repositories were found</span>
    }
    return (
      <div className='list'>
        {repoList}
        {repoLoading}
      </div>
    )
  }
}

export default RepositoriesList