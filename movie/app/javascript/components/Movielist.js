// ===================
// DEPENDENCIES
// ===================
// packages
import React from 'react';
import Movie from './Movie';

// ===================
// COMPONENT
// ===================
class Movielist extends React.Component {
  render() {
    return (
      <div >
        <h1>{this.props.movielist.title}</h1>
        <div >
        {this.props.playlist.songs.map ((movie, index) => {
          return(
            <Movies
            key={index}
            movie={movie}
            index={index}
            handleAdd={this.props.handleAdd}
            handleDelete={this.props.handleDelete}
            />
           )
         })}
        </div>
      </div>
    );
  }
}

// ===================
// EXPORT
// ===================
export default Movielist;
