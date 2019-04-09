import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Socials from '../socials';

export default class Contact extends Component {
  render() {
    return (
        <Fade>
            <div className="bck_black contact_section">
                <div className="center_wrapper">
                    <h2>Contact</h2>
                    <p>Please feel free to contact me</p>
                    <Socials/>
                </div>
            </div>
        </Fade>
    )
  }
}
