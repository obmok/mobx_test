import axios from 'axios';

class ApiService {
    serviceUrl = 'https://api.github.com/'

    fetchAllByEntityName = (ref, criteria) => {
      const perPage = !criteria ? '' : criteria.get('perPage') ? '?per_page='+criteria.get('perPage') : ''
      return axios
      .get(this.serviceUrl+ref+perPage)
      .then((result) => result)
      .catch(err =>{
        console.log(err);
      })
    }

    getUserSearchCriteriaString(criteria){
      return criteria.get('login')+'+in:login'
    }

    getRepositorySearchCriteriaString(criteria){
      let searchStr = criteria.get('name')+'+in:name'
      for (let key of criteria.keys()) {
        if (key !== 'name' && key !== 'perPage')
          searchStr += criteria.get(key) ? '+'+key+':>' + criteria.get(key) : ''
      }
      return searchStr;
    }

    fetchSearchResults = (ref, criteria) => {
      let searchStr = 'search/'+ref+'?q='
      switch(ref) {
        case 'users':
          searchStr += this.getUserSearchCriteriaString(criteria);
          break;
        case 'repositories': 
          searchStr += this.getRepositorySearchCriteriaString(criteria);
          break;
        default:
      }
      searchStr += criteria.get('perPage') ? '&per_page='+criteria.get('perPage') : ''
      return axios
      .get(this.serviceUrl + searchStr)
      .then((result) => {
        return result
      })
      .catch(err =>{
        console.log(err);
      })
    }

    fetchResultsPage = (url) =>  (
      axios
      .get(url)
      .then((result) => result)
      .catch(err =>{
        console.log(err);
      })
    )
}

export default new ApiService()