const express = require("express");
const videosFile = __dirname + "/../data/video-details.json";
const videos = require(videosFile);
const helper = require("../helper/helper");
const router = express.Router();

// GET VIDEO
router.get("/", (req, res) => {
	const videoList = videos
	res.send(videoList);
});

// GET VIDEO BY ID
router.get("/:id", (req, res) => {
	const found = videos.some(video => video.id === req.params.id);
	if (found) {
		res.json(videos.filter(video => video.id === req.params.id));
	} else {
		res
		.status(400)
		.json({ errorMessage: `Video with ID:${req.params.id} not found` });
	}
});

// POST NEW VIDEO
router.post("/", (req, res) => {
	const newVideo = {
		title: req.body.title,
		channel: req.body.channel,
		image: req.body.image,
		description: req.body.description,
		views: 0,
		likes: 0,
		duration: "4:01",
		video: "https://project-2-api.herokuapp.com/stream",
		timestamp: helper.timestamp(),
		comments: [],
		id: helper.getNewId()
	};
	if (!newVideo.title || !newVideo.description) {
		return res.status(400).json({
		errorMessage: "Please provide title, description, and the video"
		});
	}
	videos.push(newVideo);
	helper.writeJSONFile(videosFile, videos);
	res.json(newVideo.id);
});

// COMMENT POST
router.post("/:id/comments", (req, res) => {
	const newComment = {
		// id: helper.getNewId(),
		name: req.body.name,
		comment: req.body.comment,
		likes: 0,
		timestamp: helper.timestamp(),
	};
	if (!newComment.name || !newComment.comment) {
		return res.status(400).json({
		errorMessage: "Please provide name and comment"
		});
	} 
	let oldJson = videos
	oldJson.forEach((vid) => {
		if (vid.id === req.params.id) {  
			vid.comments.push(newComment)
		}    
	})
	helper.writeJSONFile(videosFile, oldJson);
	res.send(oldJson);
});

//COMMENT DELETE
router.delete("/:videoId/comments/:commentId", 
	(req, res) => {
		let oldJson = videos
		oldJson.forEach((vid) => {
			if (vid.id === req.params.videoId) {  
			let newCommentList = []
			vid.comments.forEach( comm => {
				(comm.timestamp.toString() !== req.params.commentId.toString()) 
				? newCommentList.push(comm) : newCommentList   
			})
			vid.comments = newCommentList
		}    
		})
		helper.writeJSONFile(videosFile, oldJson);
		res.send(oldJson)
	}
)

module.exports = router;