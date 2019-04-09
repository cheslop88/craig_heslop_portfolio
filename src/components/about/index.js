import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class About extends Component {
  render() {
    return (
        <Fade>
            <div className="center_wrapper">
                <h2>About Me</h2>
                <p>I graduated from Northumbria University with a First Class Honours degree in (BSc) Multimedia Computing.</p>
                <p>I have over 10 years experience in the web development and web design industry.</p>
                <p>I worked for a year and a half as a UX consultant for a FT1000 company (fastest growing companies in Europe), introducing agile concepts and user focus strategies.</p>
                <p>I worked over 4 years as a front end developer for a FTSE 100 company, working on a series of multi million pound projects and campaigns, with teams all around the world.</p>
                <p>I worked as an Angular developer in a Northern Tech Top 12 company, working in a cross functional team, working with data modellers, python developers and native application developers.</p>
            </div>
        </Fade>
    )
  }
}
