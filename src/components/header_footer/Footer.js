import React from 'react';
import Socials from '../socials';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_white">
            <Fade delay={500}>
                <Socials/>
            </Fade>
        </footer>
    );
};

export default Footer;