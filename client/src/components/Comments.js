import React from "react";
import commentIcon from "../assets/icons/add_comment.svg";
import { sortComments } from "./Functions"

const Comments = ({ comments, timeElapsed, postComments, deleteComment }) => {

	const Comments = sortComments(comments).map((object, index) => {
		return (
			<div key={index} className="comment__default" id={object.timestamp}>
				<div className="comment__image-container-one">
					<div className="comment__header--image-one"></div>
				</div>
				<div className="comment__header">
					<h2 className="comment__header--name">{object.name}</h2>
					<h3 className="comment__header--date">
						{timeElapsed(object.timestamp)}
					</h3>
				</div>
				<div className="comment__text-container-default">
					<p className="comment__text-container-default--comment">{object.comment}</p>
					<button onClick={deleteComment} id={object.timestamp} className="comment__delete" method="DELETE" ></button>
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
					<form onSubmit={postComments} className="comment__input-container" method="POST">
						<div className="comment__input-text-container">
							<h5 className="comment__input-container--text">JOIN THE CONVERSATION</h5>
							<textarea
								className="comment__text-container comment__text-container--one"
								name="comment"
								rows="10"
								cols="50"
								placeholder="Add a new comment"
							></textarea>
						</div>
						<div className="comment__button-container">
							<button className="comment__button" type="submit">              
								<img
									className="comment__comment-container-inner--icon"
									src={commentIcon}
									alt=""
								/>
								<span>COMMENT</span>
								<p></p>
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
