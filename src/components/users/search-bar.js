import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {observer} from 'mobx-react'
import {observable, action} from 'mobx'

@observer
class UsersSearchBar extends Component {
  static propTypes = {
    find: PropTypes.func
  }
  @observable login = ''
  @observable pageSize = 30

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePageSizeChange = this.handlePageSizeChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let criteria = new Map();
    criteria.set('login', this.login);
    criteria.set('perPage', this.pageSize);
    this.props.find(criteria);
  }

  @action handleLoginChange(e){
    this.login = e.target.value
  }

  @action handlePageSizeChange(e){
    this.pageSize = e.target.value
  }

  render() {
    return (
      <div>
        <form className="searchBar" >
          <span className="searchBarText">Search by:</span>
          <input type="text" value={this.login} name="login" placeholder="login" onChange={this.handleLoginChange} maxLength="30"/>
          <span className="searchBarText">Lines per page: </span>
          <select name="pageSize" onChange={this.handlePageSizeChange}>
            <option key="q30" id="q30" value="30">30</option>
            <option key="q45" id="q45" value="45">45</option>
            <option key="q70" id="q70" value="70">70</option>
            <option key="q100" id="q100" value="100">100</option>
          </select>
          <button className='button' onClick={this.handleClick}>Show</button>
        </form>
      </div>
    )
  }
}



export default UsersSearchBar