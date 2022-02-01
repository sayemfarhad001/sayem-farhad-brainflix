import React from "react";
import "./styles/main.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Comments from "./components/Comments";
import SideVideo from "./components/SideVideo";

import videoBar from "./data/videos.json";
import videos from "./data/video-details.json";

class App extends React.Component {
  state = {
    // Side Video array of objects
    sideVideo: videoBar,
    allVideos: videos,
    //Main Video Object
    mainVideo: videos
  };

    // https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects
    // myArray.filter(x => x.id === '45');



  clickHandler = (setId) => {
  	console.log(setId)
   	console.log(typeof this.state.allVideos)
    	let newMainVideo = this.state.allVideos.filter((vid)=>vid.id === setId) 
      	console.log(newMainVideo)
    
    return this.setState(prevState => ({
        mainVideo:  newMainVideo, ...prevState.mainVideo
        }))


    // return this.setState(prevState => ({
    //   mainVideo: { newMainVideo, ...prevState.mainVideo}
    //   }))



    //   return this.setState({
    //     mainVideo: [ newMainVideo, ...this.state.mainVideo]
    //   })


    // return this.setState({ mainVideo: newMainVideo})
  }

  render() {
    let newSideVideos = this.state.sideVideo.filter(vid=>vid.id !== this.state.mainVideo[0].id)
    return (
      <div className="all-components">
        <Header />
        <Hero hero={this.state.mainVideo[0]} />
        <div className="all-components__main">
          <div className="all-components__one">
            <Main main={this.state.mainVideo[0]} timeElapsed={this.timeElapsed} />
            <Comments comments={this.state.mainVideo[0].comments} timeElapsed={this.timeElapsed}/>
          </div>
          <div className="all-components__two">
            <SideVideo sideVideos={newSideVideos} clickHandler={this.clickHandler}/>
          </div>
        </div>
      </div>
    );
  }

  // DEEP DIVING EXPERIENCE
  timeElapsed = (date) => {
    if (typeof date !== 'object') {
        date = new Date(date);
    }
    var seconds = Math.ceil((new Date(Date.now()) - date) / 1000);
    var intervalType;
    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        intervalType = 'year';
    } else {
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
            intervalType = 'month';
        } else {
            interval = Math.floor(seconds / 86400);
            if (interval >= 1) {
                intervalType = 'day';
            } else {
                interval = Math.floor(seconds / 3600);
                if (interval >= 1) {
                    intervalType = "hour";
                } else {
                    interval = Math.floor(seconds / 60);
                    if (interval >= 1) {
                        intervalType = "minute";
                    } else {
                        interval = seconds;
                        intervalType = "second";
                    }
                }
            }
        }
    }
    if (interval > 1 || interval === 0) {
        intervalType += 's';
    }
    return `${interval} ${intervalType} ago`;
  }
}
export default App;
