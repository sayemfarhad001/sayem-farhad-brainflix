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
                // Verify uploaded video is displayed
                if (this.props.match.params.id) {
                    axios
                        .get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=${API_KEY.myKey}`)
                        .then(response => {
                            let sideVideos = allVideos.filter(video => video.id !== this.props.match.params.id);
                            const main = response.data;
                            const comments = response.data.comments;
                            this.setState({ sideVideos, mainVideo: main, comments, allVideos });
                        });
                } else {
                    axios
                        .get(`https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${API_KEY.myKey}`)
                        //COMPARE hard coded MAIN VIDEO ID with SIDEVIDEOS IDS and then CHANGE the initial state
                        .then(response => {
                            let sideVideos = allVideos.filter(video => video.id !== "84e96018-4022-434e-80bf-000ce4cd12b8");
                            const main = response.data;
                            const comments = response.data.comments;
                            this.setState({ sideVideos, mainVideo: main, comments, allVideos });
                        });                    
                }
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

    // DIVING DEEP
    postComments (event) {
        event.preventDefault();
        if (this.props.match.params.id) {
            axios.post(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}/comments?api_key=${API_KEY.myKey}`, 
                {name: "BrainSatation Man", comment: event.target.comment.value})
            .then((response) => {
                let comment = response.data
                this.setState({ comments: [comment, ...this.state.comments ]})
                event.target.reset()
            })
            .catch((error) => { 
                console.log(error);
            });
        }
    }

    deleteComment(event) {
        event.preventDefault();
        if (this.props.match.params.id) {
            if (window.confirm("Are you sure you want to delete this post?")) {
                axios.delete(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}/comments/${event.target.id}?api_key=${API_KEY.myKey}`)
                    .then(response => {
                        let newComments = this.state.comments.filter( comment => comment.id !== event.target.id )
                        this.setState({comments: newComments})
                    })
                    .catch(error => console.error(error));
            }
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
                            timeElapsed={timeElapsed} 
                        />
                        <Comments 
                            comments={this.state.comments}
                            timeElapsed={timeElapsed}
                            postComments={(event)=>this.postComments(event)}
                            deleteComment={(event)=>this.deleteComment(event)}
                        />
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