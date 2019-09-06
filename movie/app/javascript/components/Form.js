// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Form extends React.Component {
  // ==============
  // STATE
  // ==============
  constructor() {
    super()
    this.state = {
      title: '',
      rating: '',
      year: '',
      recommend: '',
      id: null,
    }
  }

  // ==============
  // HANDLERS
  // ==============
  // handles form change
  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }

  // handles submit
  handleSubmit = (e) => {
    // prevent default form submit action
    e.preventDefault()
    // if the view is currently addPost
    if(this.props.view.page === 'addPost') {
      // create a post
      this.props.handleCreate(this.state)
    } else if(this.props.view.page === 'editPost') { // else if the view is editPost
      // update the post
      this.props.handleUpdate(this.state)
    }
  }

  componentDidMount() {
    this.setState({
      title: this.props.formInputs.title,
      rating: this.props.formInputs.rating,
      year: this.props.formInputs.year,
      recommend: this.props.formInputs.recommend,
      id: this.props.formInputs.id
    })
  }

  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        Title
          <input type="text" placeholder="Title" id="title" value={this.state.title} onChange={this.handleChange}/>
        </label>
        <label>
        Rating
          <input type="text" placeholder="Rating" id="rating" value={this.state.rating} onChange={this.handleChange}/>
        </label>
        <label>
            Year
          <input type="text"  placeholder="Year" id="year" value={this.state.year} onChange={this.handleChange}/>
        </label>
        <label>
        Recommend
          <input type="text" placeholder="recommend" id="recommend" value={this.state.recommend} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="New Movie"/>
      </form>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Form
