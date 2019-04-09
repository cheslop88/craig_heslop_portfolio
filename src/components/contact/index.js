import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class Contact extends Component {
  render() {
    return (
        <Fade>
            <div className="bck_black contact_section">
                <div className="center_wrapper">
                    <h2>Contact</h2>
                    <p>Please feel free to contact me</p>
                    <form action="https://formspree.io/c.heslop88@googlemail.com" method="POST">
                        <label for="name">Male</label>
                        <input type="text" name="name"/>
                        <label for="email">Male</label>
                        <input type="email" name="_replyto"/>
                        <button type="submit" value="Send">Send</button>
                    </form>
                </div>
            </div>
        </Fade>
    )
  }
}
