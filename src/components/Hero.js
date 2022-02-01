import React from "react";

const Hero = ({ hero }) => {
    // const Heroconst = hero.map((object, index) => {
        return (
            // <div key={index} className="hero">
            <div className="hero">
                <video className="hero__video" poster={hero.image} controls>
                    <source src="" type="video" />
                    <p>Your browser doesn't support HTML5 video. Here is
                        a <a href="link">link to the video</a> instead.</p>
                </video>
            </div>
        );
    // });
    // return <div>{Heroconst}</div>;
}
export default Hero