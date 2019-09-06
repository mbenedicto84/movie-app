import React from 'react'

class App extends React.Component {
  constructor() {
  super()
  this.state = {
    movies:movies
  }
}
  render () {
    return (
      <div className="movie-container">
  <header>
    <h1>Flix</h1>
    <h2>What are you watching today ?</h2>
  </header>
</div>
    )
  }
}

export default App
