import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Repository extends Component {
  static propTypes = {
    forks: PropTypes.number,
    stars: PropTypes.number,
    url: PropTypes.string,
    name: PropTypes.string,

  }

  render() {
    const title = this.props.forks && this.props.stars ? 'forks: '+ this.props.forks + ' stars: ' + this.props.stars : ''
    return (
      <div className='listItem'>
        <a className='link' title={title} href={this.props.url}>{this.props.name}</a>
      </div>
    )
  }
}

export default Repository