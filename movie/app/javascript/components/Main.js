// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'
import Form from './Form.js'
import Movie from './Movie.js'
// components


// =============================
// COMPONENT CLASS
// =============================



class Main extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }


  fetchMovies = () => {
    fetch('/movies')
      .then(data => data.json())
      .then(jData => {
        this.setState({movies: jData})
      })
  }


//Create New post
handleCreate = (createData) => {
  fetch('/movies', {
    body: JSON.stringify(createData),
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
  .then(createdPost => {
    return createdPost.json()
  })
  .then(jsonedPost => {
    // change to home view
this.props.handleView('home')
    this.setState(prevState => {
prevState.movies.push(jsonedPost)
return { movies: prevState.movies }
})
  })
.catch(err => console.log(err))
}

//update post

handleUpdate = (updateData) => {
  fetch(`/movies/${updateData.id}`, {
    body: JSON.stringify(updateData),
    method: 'PUT',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
    .then(updatedMovies => {
      // switch back to the home view after editing a post
      this.props.handleView('home')
      // for simplicity's sake, we'll just make an extra AJAX call to automatically load the post this time!
      // if you're up for a challenge though, try and see if you can figure out how to do it without an extra call
      this.fetchMovies()
    })
    .catch(err => console.log(err))
}

  componentDidMount() {
  this.fetchMovies()
}

handleDelete = (id) => {
  fetch(`/movies/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
    .then(json => {
      this.setState(prevState => {
    const movies = prevState.movies.filter(movies => movies.id !== id)
    return { movies }
  })
    })
    .catch(err => console.log(err))
}
  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <main>
      <h1>{this.props.view.pageTitle}</h1>
      { this.props.view.page === 'home'
      ? this.state.movies.map((postData) => (
        <Movie
          key={postData.id}
          postData={postData}
          handleView={this.props.handleView}
          handleDelete={this.handleDelete}
        />
        ))
      :<Form
  handleCreate={this.handleCreate}
  handleUpdate={this.handleUpdate}
  formInputs={this.props.formInputs}
  view={this.props.view}
/>
        }

      </main>
    )
  }
}
// =============================
// EXPORT
// =============================
export default Main
