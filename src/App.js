import React, { Component } from 'react'

import Header from './components/Header'
import Posts from './components/Posts'

class App extends Component {
  render() {
    return (
      <div className="bg-grey-light min-h-screen">
        <Header />
        <Posts />
      </div>
    )
  }
}

export default App