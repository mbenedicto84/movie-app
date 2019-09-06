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
      <aside className="menu">
      <h1>MENU</h1>
      <ul>
        <button onClick={() => {this.props.handleView('home')}}>Home</button>
        <button onClick={() => {this.props.handleView('addPost')}}>New Movie</button>
      </ul>
    </aside>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Aside
