import React from "react";
import axios from "axios";
import timeElapsed from "./Functions";
import Hero from "./Hero";
import Main from "./Main";
import Comments from "./Comments";
import SideVideo from "./SideVideo";

class HomePage extends React.Component {
    state = {
        sideVideos: [],
        allVideos: [],
        mainVideo: [],
	};

    componentDidMount() {
        //REQUEST FOR INITIAL MOUNT
        axios
            .get("http://localhost:5000/api/videos")
            .then(response=> {
                let allVideos = response.data;
                this.setState({ allVideos: allVideos, sideVideos: allVideos });
                if (this.props.match.params.id) {
                    const main = allVideos.filter(video => video.id === this.props.match.params.id);
                    this.setState({ mainVideo:  main });
                } else {
                    const main = allVideos.filter(video => video.id === "84e96018-4022-434e-80bf-000ce4cd12b8");
                    this.setState({ mainVideo:  main });
                    this.props.history.push(`/video/84e96018-4022-434e-80bf-000ce4cd12b8`);
                }
            })
    }

    componentDidUpdate(prevProps) {
        // REQUEST FOR UPDATED MOUNT
        axios
            .get(`http://localhost:5000/api/videos`)
            .then(response => {
                let allVideos = response.data;
                this.setState({ allVideos: allVideos, sideVideos: allVideos });
            })
        // Verify uploaded video or updated video is displayed
        if (prevProps.match !== this.props.match) {             
            axios
                .get(`http://localhost:5000/api/videos/${this.props.match.params.id}`)
                .then(response => {
                    let foundVideo = response.data;
                    this.setState({ mainVideo: foundVideo });
                })
        }
    }

    // DIVING DEEP - POST COMMENTS
    postComments (event) {
        event.preventDefault();
        if (this.props.match.params.id) {
            axios
                .post(`http://localhost:5000/api/videos/${this.props.match.params.id}/comments`, 
                    {name: "BrainStation Man", comment: event.target.comment.value}) 
                .then((res) => {
                    let updatedVideos = res.data
                    const main = updatedVideos.filter(video => video.id === this.props.match.params.id);
                    this.setState ({ allVideos: updatedVideos, sideVideos: updatedVideos, mainVideo: main })
                    event.target.reset()
                })
                .catch((error) => { 
                    console.log(error);
                });
        }
    }
    
    // DIVING DEEP - DELETE COMMENTS
    deleteComment(event) {
        event.preventDefault();
        if (this.props.match.params.id) {
            if (window.confirm("Are you sure you want to delete this post?")) {
                axios
                    .delete(`http://localhost:5000/api/videos/${this.props.match.params.id}/comments/${event.target.id}`)
                    .then(res => {
                        let updatedVideos = res.data
                        const main = updatedVideos.filter(video => video.id === this.props.match.params.id);
                        this.setState ({ allVideos: updatedVideos, sideVideos: updatedVideos, mainVideo: main })
                    })
                    .catch(error => console.error(error));
            }
        }
    }

	render() {
        if (this.state.mainVideo.length === 0) {
            //LOADING ANIMATION
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
        } else {
            let newSideVideos = this.state.sideVideos.filter(vid=>vid.id !== this.state.mainVideo[0].id)
            return (
                <div className="all-components">
                    <Hero hero={this.state.mainVideo[0]} />
                    <div className="all-components__main">
                        <div className="all-components__one">
                            <Main 
                                main={this.state.mainVideo[0]}
                                timeElapsed={timeElapsed} 
                            />
                            <Comments 
                                comments={this.state.mainVideo[0].comments}
                                timeElapsed={timeElapsed}
                                postComments={(event)=>this.postComments(event)}
                                deleteComment={(event)=>this.deleteComment(event)}
                            />
                        </div>
                        <div className="all-components__two">
                            <SideVideo 
                                sideVideos={newSideVideos}
                            />
                        </div>
                    </div>
                </div>
            );
        }		
	}
}
export default HomePage;