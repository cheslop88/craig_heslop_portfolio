import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { SocialIcon } from 'react-social-icons';

export default class Socials extends Component {
  render() {
    return (
        <Fade>
            <div className="social_section">
                <div className="center_wrapper">
                  <SocialIcon url="https://www.linkedin.com/in/craig-heslop-2aa515b2" />
                  <SocialIcon url="https://github.com/cheslop88" />
                </div>
            </div>
        </Fade>
    )
  }
}
