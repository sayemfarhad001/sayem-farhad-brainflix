import React from "react";
import commentIcon from "../assets/icons/add_comment.svg";

const Comments = ({ comments, timeElapsed }) => {
  const Comments = comments.map((object, index) => {
    return (
      <div key={index} className="comment__default">
        <div className="comment__image-container-one">
          <div className="comment__header--image-one"></div>
        </div>
        <div className="comment__header">
          <h2 className="comment__header--name">{object.name}</h2>
          <h3 className="comment__header--date">{timeElapsed(object.timestamp)}</h3>
        </div>
        <div className="comment__text-container-default">
          <p className="comment__text-container-default--comment">
            {object.comment}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <main className="comment">
        <h1 className="comment__title">{comments.length} Comments</h1>
        <div className="comment__name-container">
          <div className="comment__image"></div>
          <form className="comment__input-container">
            <div className="comment__input-text-container">
              <h5 className="comment__input-container--text">
                JOIN THE CONVERSATION
              </h5>
              <textarea
                className="comment__text-container comment__text-container--one"
                name="name"
                rows="10"
                cols="50"
                placeholder="Add a new comment"
              ></textarea>
            </div>
            <div className="comment__button-container">
              <button className="comment__button">              
                <img
                  className="header__upload-container-inner--icon"
                  src={commentIcon}
                  alt=""
                />
                <span>COMMENT</span>
              </button>
            </div>
          </form>
        </div>
        <div className="comment__default-comment"> {Comments}</div>
      </main>
    </div>
  );
};

export default Comments;
