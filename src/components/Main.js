import React from "react";
import eye from "../assets/icons/views.svg";
import heart from "../assets/icons/likes.svg";

const Main = ({ maain }) => {
  //Function start
  const Mainconst = maain.map((object, index) => {
    return (
      <div key={index} className="main">
        <div className="main__main-container">
          <h1 className="main__title">{object.title}</h1>
          <div className="main__subtitle-views-likes-container">
            <div className="main__subtitle-container">
              <h2 className="main__subtitle-container--author">
                {object.channel}
              </h2>
              <h2 className="main__subtitle-container--date">
                {object.timestamp}
              </h2>
            </div>
            <div className="main__views-likes-container">
              <div className="main__views-container">
                <img className="main__views-container--icon" src={eye} alt="" />
                <h2 className="main__views-container--number">
                  {object.views}
                </h2>
              </div>
              <div className="main__likes-container">
                <img
                  className="main__likes-container--icon"
                  src={heart}
                  alt=""
                />
                <h2 className="main__likes-container--number">
                  {object.likes}
                </h2>
              </div>
            </div>
          </div>
          <div className="main__description-container">
            <p className="main__description-container--text">
              {object.description}
            </p>
          </div>
        </div>
      </div>
    );
  });
  return <div>{Mainconst}</div>;
};
export default Main;
