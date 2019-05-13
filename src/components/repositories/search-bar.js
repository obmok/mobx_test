import React, { Component } from 'react'
import PropTypes from 'prop-types' 
import {observer} from 'mobx-react'
import {observable, action} from 'mobx'

@observer
class RepositoriesSearchBar extends Component {
  
  static propTypes = {
    find: PropTypes.func.isRequired
  }
  @observable name = '';
  @observable stars = '';
  @observable forks = '';
  @observable pageSize = 100;
  @observable validationError = '';

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleStarsChange = this.handleStarsChange.bind(this);
    this.handleForksChange = this.handleForksChange.bind(this);
    this.handlePageSizeChange = this.handlePageSizeChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let error = ''
    if ((this.forks || this.stars) && !this.name) 
      error = <span className='validationError'> Please specify repository name!</span>;
    if (this.forks && isNaN(this.forks))
      error = <span className='validationError'> Forks value is not a number!</span>;
    if (this.stars && isNaN(this.stars))
      error = <span className='validationError'> Stars value is not a number!</span>;
    this.validationError = error
    if (!error){
      let criteria = new Map();
      criteria.set('name', this.name);
      criteria.set('perPage', this.pageSize);
      criteria.set('forks', this.forks);
      criteria.set('stars', this.stars);
      this.props.find(criteria)
    }
  }

  @action handleNameChange(e){
    this.name = e.target.value;
  }

  @action handleStarsChange(e){
    this.stars = e.target.value;
  }

  @action handleForksChange(e){
    this.forks = e.target.value;
  }

  @action handlePageSizeChange(e){
    this.pageSize = e.target.value;
  }

  render() {
    return (
      <div>
        <form className="searchBar" >
          <span className="searchBarText">Search by:</span>
          <input type="text" value={this.name} name="name" placeholder="name" onChange={this.handleNameChange} maxLength="30"/>
          <input type="text" value={this.stars} name="stars" placeholder="min stars" onChange={this.handleStarsChange} maxLength="12"/>
          <input type="text" value={this.forks} name="forks" placeholder="min forks" onChange={this.handleForksChange} maxLength="12"/>
          <span className="searchBarText" >Lines per page:</span>
          <select name="pageSize" defaultValue="100" onChange={this.handlePageSizeChange}>
            <option key="q30" id="q30" value="30">30</option>
            <option key="q45" id="q45" value="45">45</option>
            <option key="q70" id="q70" value="70">70</option>
            <option key="q100" id="q100" value="100">100</option>
          </select>
          <button className='button' onClick={this.handleClick} >Show</button>
          {this.validationError}
        </form>
      </div>
    )
  }
}

export default RepositoriesSearchBar