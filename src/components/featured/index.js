import React from 'react';
import Carousel from './Carousel';

const Featured = () => {
    return (
        <div style={{position:'relative'}}>

            <Carousel/>

            <div className="feature_banner">
                <div className="wrapper">
                    <h3>Craig Heslop - Web Developer</h3>
                </div>
            </div>

        </div>
    );
};

export default Featured;