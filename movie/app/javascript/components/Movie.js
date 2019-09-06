
import React, { Component } from 'react';

class Movies extends Component {
  constructor () {
  super()
  this.state = {
    liked: false
  }
  this.toggleLike = this.toggleLike.bind(this)
}
toggleLike() {
  this.setState({ liked: !this.state.liked })
}
  render() {
    return (
    <div className="movie">
        <h1 onClick={() => { this.props.handleAdd(this.props.movies); this.toggleLike() }}>
              {this.props.movies.title}
        </h1>
        <h2>{this.props.movies.artist}</h2>
        <h3>{this.props.movies.time}</h3>
        { this.state.liked ? <h4>&hearts;</h4> : null }
        <div onClick={() => {this.props.handleDelete(this.props.index)}}>X</div>
    </div>
  )
  }
}

export default Movies;
