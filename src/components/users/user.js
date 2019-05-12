import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
  static propTypes = {
    url: PropTypes.string,
    login: PropTypes.string
  }

  render() {
    return (
      <div className='listItem'>
        <a className='link' href={this.props.url}>{this.props.login}</a>
      </div>
    )
  }
}

export default User