import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class Examples extends Component {
  render() {
    return (
        <Fade>
            <div className="center_wrapper">
                <h2>Work Examples</h2>
                <p></p>
                <h3>North Beats Festival 2019</h3>
                <h4>Premise</h4>
                <p>A fictional music festival website which details the event, performers, tickets and direction information.
                <h4>Technologies Used</h4>
                <p>Page is built using React and Material UI, site is a single page application using the section link to feature, page also incorporates react slick, react icons and is fully responsive.</p>
                <a class="button" href="https://drunken-sundaes.netlify.com" target="_blank">View</a>
                </p>
                <h3>Drunken Sundaes</h3>
                <h4>Premise</h4>
                <p>A fictional restaurant which serves both ice cream and cocktails</p>
                <h4>Technologies Used</h4>
                <p>The site is built upon the React Gatsby JS framework and uses a headless CMS with webhooks to retrieve the content. Page also uses styled components. Site is fully responsive.</p>
                <a class="button" href="https://drunken-sundaes.netlify.com" target="_blank">View</a>
                <h3>Disobeerdient</h3>
                <h4>Premise</h4>
                <p>A fictional craft beer company, the website is used to both promote products in their bars and to sell the products to customers.</p>
                <h4>Technologies Used</h4>
                <p>The site is built using React Gatsby JS framework and uses a headless CMS with webhooks to retrieve the content. The page uses Bootstrap and features content filtering through the options based upon the relevant categories. The user can also add products to the basket and these can then be purchased through a 3rd party website. Site is also fully responsive.</p>
                <a class="button" href="https://disobeerdient.netlify.com" target="_blank">View</a>
            </div>
        </Fade>
    )
  }
}
