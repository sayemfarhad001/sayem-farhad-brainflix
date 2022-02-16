import React from "react";
import { API_KEY } from "./HomePage"

const Hero = ({ hero }) => {
    return (
        <div className="hero">
            <video className="hero__video" poster={hero.image} controls>
                <source src={hero.video + "?api_key=" + API_KEY.myKey} type="video/mp4" />
                <p>Your browser doesn't support HTML5 video. Here is a 
                    <a href= {hero.video + "?api_key=" + API_KEY.myKey} >
                        link to the video
                    </a> 
                    instead.
                </p>
            </video>
        </div>
    );
};
export default Hero;