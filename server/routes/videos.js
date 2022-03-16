// include express in order to use methods like .Router()
const express = require("express");
// reference to the videos file in order to write using writeJSONFile
const videosFile = __dirname + "/../data/video-details.json";

// work with array of data from videos
const videos = require(videosFile);
// helper functions: writeJSONFile & getNewId
const helper = require("../helper/helper");
// setup express router
const router = express.Router();
//  Get all the videos but with fewer properties/keys
router.get("/", (req, res) => {
  const videoList = videos

  // Following code can be used to collect limited properties like the sprint-1 API 
  // Corresponding client side adjustment required

  // .map(video => {
  //   return {
  //     id: video.id,
  //     title: video.title,
  //     image: video.image,
  //     channel: video.channel
  //   };
  // });
  
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

// Comment post
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
  res.send(oldJson);    // switch with this
});

//COMMENT DELETE
router.delete("/:videoId/comments/:commentId", 
  (req, res) => {
    // const videoId = req.params.videoId  //line 234 Homepage.js and video - https://www.youtube.com/watch?v=VVGgacjzc2Y - time 31:47
    // const commentId = req.params.commentId
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
  })
module.exports = router;