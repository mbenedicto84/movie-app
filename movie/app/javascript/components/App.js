// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'
import Main from './Main.js'
import Aside from './Aside.js'
// =============================
// COMPONENT CLASS
// =============================
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      view: {
        page: 'home',
        pageTitle: 'What Do You Want To Watch?',
      },
      formInputs:{
        title:null,
        rating:null,
        year:null,
        recommend:null,
        id:null
      }
    }
  }


  handleView = (view, postData) => {
      // declare an empty variable
      let pageTitle = ''
      let formInputs = {
        title:'',
        rating:'',
        year:'',
        recommend:'',
        id:null
      }
      // decide the pageTitle based on the view
      switch (view) {
        case 'home':
          pageTitle = 'What Do You Want To Watch'
          break
        case 'addPost':
          pageTitle = 'Are You Sure?'
          break
        case 'editPost':
          pageTitle = 'Did You Like It ?'
          formInputs = {
            title: postData.title,
            rating: postData.rating,
            year: postData.year,
            recommend: postData.recommend,
            id: postData.id
          }
          break
        default:
          break
      }
      // update the state
      this.setState({
        view: {
          page: view,
          pageTitle: pageTitle
        },
        formInputs: formInputs
      })
    }
  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <div className="large-container">

        <div className="main-container">
          <Aside handleView={this.handleView}/>
          <Main
          view={this.state.view}
          handleView={this.handleView}
          formInputs={this.state.formInputs}
            />
        </div>
      </div>
    )
  }
}

// =============================
// EXPORT
// =============================
export default App
