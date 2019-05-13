import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NavBar extends Component {
  
  static propTypes = {
    links: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.handleFirst = this.handleFirst.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleLast = this.handleLast.bind(this);
  }

  handleFirst = () => this.props.move(this.props.links.first.url)
  handlePrev = () => this.props.move(this.props.links.prev.url)
  handleNext = () => this.props.move(this.props.links.next.url)
  handleLast = () => this.props.move(this.props.links.last.url)

  render() {
    const { links } = this.props
    let first, prev, next, last
    if (links){
      first = links.first ? <button className='navbarButton' onClick={this.handleFirst}> {'|< '} </button>: null
      prev = links.prev ? <button className='navbarButton' onClick={this.handlePrev}> {'< '} </button>: null
      next = links.next ? <button className='navbarButton' onClick={this.handleNext}> {'> '} </button>: null
      last = links.last ? <button className='navbarButton' onClick={this.handleLast}> {'>| '} </button>: null
    } 
    return (
      <div className='navbar'>
        {first} {prev} {next} {last}
      </div>
    )
  }
}

export default NavBar