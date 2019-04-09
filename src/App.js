import React, { Component } from 'react';
import './resources/styles.scss';
import { Element } from 'react-scroll';


import Header from './components/header_footer/Header';
import Featured from './components/featured';
import About from './components/about';
import Skills from './components/skills';
import Examples from './components/examples';
import Contact from './components/contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <Element name="featured">
          <Featured/>
        </Element>

        <Element name="about">
          <About/>
        </Element>

        <Element name="skills">
          <Skills/>
        </Element>

        <Element name="examples">
          <Examples/>
        </Element>

        <Element name="contact">
          <Contact/>
        </Element>
      </div>
    );
  }
}

export default App;
