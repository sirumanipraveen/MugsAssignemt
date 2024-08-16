import {Component} from 'react'
import Header from './components/Header'
import Aboutme from './components/Aboutme'
import Services from './components/Services'
import Projects from './components/Projects'
import Footer from './components/Footer'

import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Aboutme />
        <Services />
        <Projects />
        <Footer />
      </div>
    )
  }
}

export default App
