import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class Examples extends Component {
  render() {
    return (
        <Fade>
            <div className="center_wrapper">
                <h2>Work Examples</h2>
                <h3>North Beats Festival 2019</h3>
                <h3>Drunken Sundaes</h3>
                <h4>Premise</h4>
                <p>A fictional restaurant which serves both Ice Cream and Cocktails</p>
                <h4>Technologies Used</h4>
                <p>The page is built upon the React Gatsby JS framework and uses a headless CMS with webhooks to retrieve the content. Page also uses styled components.</p>
                <a href="https://drunken-sundaes.netlify.com" target="_blank">Drunken Sundaes</a>
                <h3>Disobeerdient</h3>
            </div>
        </Fade>
    )
  }
}
