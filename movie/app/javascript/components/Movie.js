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
      <article>
        <div className="movie-title">
        <h1> {this.props.postData.title}</h1>
        </div>
        <div className="movie-rating">
        <h2>{this.props.postData.rating}</h2>
        </div>
        <div className="movie-year">
        <h2>{this.props.postData.year}</h2>
        </div>
        <div className="movie-recommend">
        <h2>{this.props.postData.recommend}</h2>
        </div>
        <div className="movie-options">
         <ul>
          <li onClick={() => {this.props.handleView('editPost', this.props.postData)}}>edit post</li>
           <li onClick={() => {this.props.handleDelete(this.props.postData.id)}}>delete post</li>
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
