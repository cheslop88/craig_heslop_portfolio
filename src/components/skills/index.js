import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class Skills extends Component {
  render() {
    return (
        <Fade>
            <div className="bck_black skills_section">
                <div className="center_wrapper">
                    <h2>Skills </h2>
                <ul>
                        <li>HTML/HTML5</li>
                        <li>Javascript (ES6+)</li>
                        <li>jQuery/jQueryUI</li>
                        <li>CSS/CSS3 (SASS/SCSS, BEM)</li>
                        <li>AngularJS/Angular 2+</li>
                        <li>VueJS (NuxtJS, Vuex)</li>
                        <li>ReactJS (including Redux, GatsbyJS)</li>
                        <li>Gulp, Git, Webpack</li>
                        <li>Python (Django/Flask)</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>PHP</li>
                        <li>GraphQL</li>
                        <li>Electron</li>
                        <li>MySQL/NoSQL</li>
                </ul>
                </div>
            </div>
        </Fade>
    )
  }
}
