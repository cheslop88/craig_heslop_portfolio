import React from 'react';

import slide_one from '../../resources/images/main.png';

const Carousel = () => {

    return (
        <div 
            className="carousel_wrapper"
            style={{
                height:`${window.innerHeight}px`,
                overflow:'hidden'
            }}
        >
                <div>
                   <div 
                        className="carousel_image"
                        style={{
                            background:`url(${slide_one})`,
                            height:`${window.innerHeight}px`
                        }}
                   ></div>
                </div>
        </div>
    );
};

export default Carousel;