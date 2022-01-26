import React from "react";
// import video from "../assets/Video/BrainStation Sample Video.mp4";
// import poster from "../assets/Images/euro.JPG";

const Hero = ({ heero }) => {
    //Function start
    const Heroconst = heero.map((object, index) => {
        return (
            <div key={index} className="hero">
                <video className="hero__video" poster={object.image} controls>
                    <source src="" type="video/mp4" />
                    <p>Your browser doesn't support HTML5 video. Here is
                        a <a href="myVideo.mp4">link to the video</a> instead.</p>
                </video>
            </div>
        );
    });
    return <div>{Heroconst}</div>;
}
export default Hero