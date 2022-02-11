import React from "react";
import axios from "axios";
import timeElapsed from "./Functions";
import Hero from "./Hero";
import Main from "./Main";
import Comments from "./Comments";
import SideVideo from "./SideVideo";

export let API_KEY = { myKey: "ffb22bc6-6976-404c-9cd6-c366bb70ee9b" }

class HomePage extends React.Component {
    state = {
        allVideos: [],
        mainVideo: [],
        sideVideos: [], 
        comments: []
	};

    componentDidMount() {
        // GET ALL VIDEOS
        axios
            .get(`https://project-2-api.herokuapp.com/videos?api_key=${API_KEY.myKey}`)
            .then(response => {
                const allVideos = response.data;
                // GET MAIN VIDEO INFO WITH HARDCODED ID (only to see info displayed)
                axios
                    .get(`https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${API_KEY.myKey}`)
                    //COMPARE hard coded MAIN VIDEO ID with SIDEVIDEOS IDS and then CHANGE the initial state
                    .then(response => {
                        let sideVideos = allVideos.filter(video => video.id !== "84e96018-4022-434e-80bf-000ce4cd12b8");
                        const main = response.data;
                        const comments = response.data.comments;
                        this.setState({ sideVideos, mainVideo: main, comments, allVideos });
                    });
            });
    }

    componentDidUpdate(prevProps) {
    // Updating current state
        if (prevProps.match !== this.props.match) {
            axios
                .get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=${API_KEY.myKey}`)
                .then(response => {
                    const main = response.data;
                    const comments = response.data.comments;
                    let sideVideos = this.state.allVideos.filter( video => video.id !== this.props.match.params.id );
                    this.setState({ sideVideos, mainVideo: main, comments });
                });
        }
    }

	render() {
        if (this.state.mainVideo.length === 0) {
            return (
                <div className="no-components">
                    <div className="middle">
                        <div className="bar bar1"></div>
                        <div className="bar bar2"></div>
                        <div className="bar bar3"></div>
                        <div className="bar bar4"></div>
                        <div className="bar bar5"></div>
                        <div className="bar bar6"></div>
                        <div className="bar bar7"></div>
                        <div className="bar bar8"></div>
                    </div>
                </div>
            );
        }
		return (
			<div className="all-components">
                <Hero hero={this.state.mainVideo} />
                <div className="all-components__main">
                    <div className="all-components__one">
                        <Main 
                            main={this.state.mainVideo}
                            timeElapsed={timeElapsed} />
                        <Comments 
                            comments={this.state.comments} 
                            timeElapsed={timeElapsed}/>
                    </div>
                    <div className="all-components__two">
                        <SideVideo 
                            sideVideos={this.state.sideVideos}
                        />
                    </div>
                </div>
			</div>
		);
	}
}
export default HomePage;