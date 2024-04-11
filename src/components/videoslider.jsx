import React, { useState } from 'react';
import { VideoData } from "./videodata.jsx";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import YouTube from 'react-youtube';

const VideoSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {VideoData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <YouTube videoId={slide.video} style= {{ width: '100%', height: '500px' }} id = "videooo"/> 
              )}
            </div>
          );
        })}
      </section>
    );
};

export default VideoSlider;
