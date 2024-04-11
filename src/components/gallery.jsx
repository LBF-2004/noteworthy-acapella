import { Image } from "./image";
import React from "react";
import VideoSlider from "./videoslider.jsx";
import { VideoData } from "./videodata.jsx";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>OUR FAVORITE VIDEOS</h2>
          <p>
            Find us on <a href="https://www.youtube.com/@UCBNoteworthy">Youtube</a>.
          </p>
        </div>
        <VideoSlider slides = {VideoData} />
      </div>
    </div>
  );
};
