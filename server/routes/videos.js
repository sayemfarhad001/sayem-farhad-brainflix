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
/**
 * Get all the videos but with fewer properties/keys
 */
router.get("/", (req, res) => {
  const videoList = videos
  res.send(videoList);
});

/**
 * Get video by id
 */
router.get("/:id", (req, res) => {
  // const found = videos.some(video => video.id === req.params.id);
  // if (found) {
  //   res.json(videos.filter(video => video.id === req.params.id));
  // } else {
  //   res
  //     .status(400)
  //     .json({ errorMessage: `Video with ID:${req.params.id} not found` });
  // }
  res.send(videos);
});

/**
 * Post new video
 */
router.post("/", (req, res) => {
  const newVideo = {
    id: helper.getNewId(),
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    channel: req.body.channel,

    views: 999,
    likes: 888,

    timestamp: helper.timestamp(),
    // video:
    comments: []

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
    // title: req.body.title,
    // channel: req.body.channel,
    // description: req.body.description,
    // image: req.body.image,
    // views: 999,
    likes: 888,
    timestamp: helper.timestamp(),
    // video:
  };
  if (!newComment.name || !newComment.comment) {
    return res.status(400).json({
      errorMessage: "Please provide name and comment"
    });
  }

  let oldJson = helper.readVideos(videosFile)
  // console.log(oldJson)
  // console.log(req.params.id)
  oldJson.forEach((vid) => {
      if (vid.id === req.params.id) {  
        vid.comments.push(newComment)
    }    
  })


  // console.log(`/////////////////////////////new//////////////////
  // ${oldJson}//////////////////////////////json///////////////////`)
    
  // videos.push(newComment);

  helper.writeJSONFile(videosFile, oldJson);

  res.send(newComment);
});

//COMMENT DELETE

module.exports = router;