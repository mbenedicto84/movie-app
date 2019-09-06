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
        {this.props.postData.rating}
        </div>
        <div className="movie-year">
        {this.props.postData.year}
        </div>
        <div className="movie-recommend">
        {this.props.postData.recommend}
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
