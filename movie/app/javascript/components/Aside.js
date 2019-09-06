// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Aside extends React.Component {
  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <aside>
      <h1>NAVIGATE</h1>
      <ul>
        <li onClick={() => {this.props.handleView('home')}}>Home</li>
        <li onClick={() => {this.props.handleView('addPost')}}>New Movie</li>
      </ul>
    </aside>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Aside
