// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'
import Form from './Form.js'
// =============================
// COMPONENT CLASS
// =============================
class Movie extends React.Component {


  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <article className="items">
        <div className="movie-title">
        <h1> {this.props.postData.title}</h1>
        </div>
        <div className="movie-rating">
        <h2>{this.props.postData.rating}</h2>
        </div>
        <div className="movie-year">
        <h2>{this.props.postData.year}</h2>
        </div>
        <div className="movie-image">
      <img src={this.props.postData.image} alt="poster" height="400" width="280"/>  
        </div>
        <div className="movie-recommend">
        <h2>Recommend: {this.props.postData.recommend}</h2>
        </div>
        <div className="movie-options">
         <ul>
          <button onClick={() => {this.props.handleView('editPost', this.props.postData)}}>Edit Movie</button>
           <button onClick={() => {this.props.handleDelete(this.props.postData.id)}}>Delete Movie</button>
         </ul>
       </div>
      </article>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Movie
