import React from "react";
import ImageSlider from './imageslider.jsx';
import { SliderData } from './sliderdata.jsx';
import {FaTwitter} from 'react-icons/fa'
import { SocialIcon } from 'react-social-icons'

const Component = <SocialIcon url="https://twitter.com" />

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Quick Glance</h2>
          <p>
            Our info at a glance
          </p>
        </div>

        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    {i === 0 && <ImageSlider slides={SliderData} />}
                    {i === 1 && <img src = "img/townhall.jpg" style={{ marginTop: '150px' }}/>}
                    {i === 2 && ( 
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginTop: 20}}>
                        <SocialIcon url="https://www.facebook.com/Noteworthy" style={{ marginTop: '40px', margin: 10 }} /> 
                        <SocialIcon url="https://www.instagram.com/cal_noteworthy/" style={{ marginTop: '40px', margin: 10 }} /> 
                        <SocialIcon url="https://www.tiktok.com/@uc_noteworthy" style={{ marginTop: '40px', margin: 10 }} /> 
                      </div>

                    )}
                    {i === 2 && <img src = "img/hi.png" style={{ marginTop: '60px', width: 350, height: 400}}/> }
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
