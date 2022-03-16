import React from "react";
import axios from "axios";
import timeElapsed from "./Functions";
import Hero from "./Hero";
import Main from "./Main";
import Comments from "./Comments";
import SideVideo from "./SideVideo";


// export let API_KEY = { myKey: "ffb22bc6-6976-404c-9cd6-c366bb70ee9b" }
// let API_URL = "http://localhost:5000/api/videos";

class HomePage extends React.Component {
    state = {
        sideVideos: [],
        allVideos: [],
        mainVideo: [],
        // comments: []
	};

    componentDidMount() {
        // GET ALL VIDEOS

        ///////////////////////////////////////////////////// ATTEMPT 1
        // axios
        //     // .get(`https://project-2-api.herokuapp.com/videos?api_key=${API_KEY.myKey}`)
        //     .get(API_URL)
        //     .then(response => {

        //         // console.log(response.data)

        //         const allVideos = response.data;
        //         const main = allVideos.filter(video => video.id === "84e96018-4022-434e-80bf-000ce4cd12b8");
        //         console.log(main)
        //         let sideVideos = allVideos.filter(video => video.id !== "84e96018-4022-434e-80bf-000ce4cd12b8");
        //         // const main = response.data;
        //         console.log(sideVideos)
        //         this.setState({ sideVideos, mainVideo: main, allVideos });



                // const comments = response.data.comments;
                // this.setState({ sideVideos, mainVideo: main, comments, allVideos });
                
                // Verify uploaded video is displayed
                // if (this.props.match.params.id) {
                //             let sideVideos = allVideos.filter(video => video.id !== this.props.match.params.id);
                //             const main = response.data;
                //             const comments = response.data.comments;
                //             console.log(comments)
                //             this.setState({ sideVideos, mainVideo: main, comments, allVideos });
                // } else {
                        //COMPARE hard coded MAIN VIDEO ID with SIDEVIDEOS IDS and then CHANGE the initial state
                            // let sideVideos = allVideos.filter(video => video.id !== "84e96018-4022-434e-80bf-000ce4cd12b8");
                            // const main = response.data;
                            // const comments = response.data.comments;
                            // console.log(comments)
                            // this.setState({ sideVideos, mainVideo: main, comments, allVideos });
                // }

                ///////////////////////////////////////////////ATTEMPT 2
                // axios
                //     .get(API_URL)
                //     .then(response => {
                //             const allVideos = response.data;
                //             this.setState({ allVideos });
                //             // // Verify uploaded video is displayed
                //             if (this.props.match.params.id) {
                //                 // axios
                //             //         // .get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=${API_KEY.myKey}`)
                //                     // .get(`http://localhost:5000/api/videos/${this.props.match.params.id}`)
                //                     // .then(response => {
                //                         // const allVideos = response.data;                            
                //                         // let sideVideos = allVideos.filter(video => video.id !== this.props.match.params.id);
                //                         // const main = response.data[0];
                //                         // const comments = response.data[0].comments;
                //                         // this.setState({ sideVideos, comments, mainVideo: main });
                //                     // });
                //                         let sideVideos = this.state.allVideos.filter(video => video.id !== this.props.match.params.id);
                //                         const main = this.state.allVideos.filter( video => video.id === this.props.match.params.id );
                //                         const comments = main[0].comments;
                //                         this.setState({ sideVideos, comments, mainVideo: main[0] });
                //             } else {
                //                 // axios
                //             //         // .get(`https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${API_KEY.myKey}`)
                //                 //   .get(API_URL)
                //             //         //COMPARE hard coded MAIN VIDEO ID with SIDEVIDEOS IDS and then CHANGE the initial state
                //                     // .then(response => {
                                        
                                        
                                        
                //                         // const allVideos = response.data;
                                        
                //                         // let sideVideos = allVideos.filter(video => video.id !== "84e96018-4022-434e-80bf-000ce4cd12b8");
                //                         // const main = allVideos.filter(video => video.id === "84e96018-4022-434e-80bf-000ce4cd12b8");
                //                         // const comments = response.data[0].comments;
                //                         // this.setState({ allVideos, sideVideos, comments });
                //                         // this.setState(prevState => ({ mainVideo:  main[0], ...prevState.mainVideo }))

                //                         // console.log(allVideos)
                //                         // console.log(sideVideos)
                //                         // console.log(main)
                //                         // console.log(comments)

                //                         let sideVideos = this.state.allVideos.filter(video => video.id !== "84e96018-4022-434e-80bf-000ce4cd12b8");
                //                         const main = this.state.allVideos.filter(video => video.id === "84e96018-4022-434e-80bf-000ce4cd12b8");
                //                         const comments = main[0].comments;
                //                         this.setState({ sideVideos, comments, mainVideo:  main[0] });
                //                         // this.setState(prevState => ({ , ...prevState.mainVideo }))

                //                     // })
                //                     // .catch((error) => { 
                //                         // console.log(error);
                //                     // });      
                                    
                //                 // if (this.props.match.params.id) {
                //                 //         axios
                //                 //     //         // .get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=${API_KEY.myKey}`)
                //                 //             .get(`http://localhost:5000/api/videos/${this.props.match.params.id}`)
                //                 //             .then(response => {
                //                 //                 // const allVideos = response.data;                            
                //                 //                 let sideVideos = this.state.allVideos.filter(video => video.id !== this.props.match.params.id);
                //                 //                 const main = response.data[0];
                //                 //                 const comments = response.data[0].comments;
                //                 //                 this.setState({ sideVideos, comments, mainVideo: main });
                //                 //             });
                //                 //     }

                //             }

                //     })
                //     .catch((error) => { 
                //         console.log(error);
                //     }); 

                
                //    // });

            axios
                .get("http://localhost:5000/api/videos")
                .then(response=> {
                    let allVideos = response.data;
                    // this.sideVideos = this.allVideos;
                    // let sideVideos = allVideos.filter(video => video.id !== this.props.match.params.id);
                    this.setState({ allVideos: allVideos, sideVideos: allVideos });
                
                    //////////////////////////////////////////////////////////
                    if (this.props.match.params.id) {
                        // axios
                        //     .get(`http://localhost:5000/api/videos/${this.props.match.params.id}`)
                        //     .then(response => {
                                const main = allVideos.filter(video => video.id === this.props.match.params.id);
                                // console.log(main)
                                this.setState({ mainVideo:  main });
                                // this.props.history.push(`/video/${this.props.match.params.id}`);
                            // })
                            // .catch((error) => { 
                            //     console.log("error");
                            // }); 
                        } else {
                            // axios
                            // .get("http://localhost:5000/api/videos/84e96018-4022-434e-80bf-000ce4cd12b8")
                            // .then(response => {
                                const main = allVideos.filter(video => video.id === "84e96018-4022-434e-80bf-000ce4cd12b8");
                                this.setState({ mainVideo:  main });
                                // console.log(main)
                                this.props.history.push(`/video/84e96018-4022-434e-80bf-000ce4cd12b8`);
                                
                            // })
                            // .catch((error) => { 
                            //     console.log("error");
                            // });
                        }
                    //////////////////////////////////////////////////
                
                
                
                })

            


    }

    componentDidUpdate(prevProps) {

        // console.log(prevProps)


        /////////////////////////////////////////////ATTEMPT 3
        // console.log(this.state.allVideos)
        // if (prevProps.match !== this.props.match) {
        
            axios
            .get(`http://localhost:5000/api/videos`)
            .then(response => {
                let allVideos = response.data;
                this.setState({ allVideos: allVideos, sideVideos: allVideos });
            })
                // // Verify uploaded video is displayed
            if (prevProps.match !== this.props.match) {
                
                axios
                    .get(`http://localhost:5000/api/videos/${this.props.match.params.id}`)
                    .then(response => {
                        let foundVideo = response.data;
                        // let sideVideos = allVideos
                        // let sideVideos = allVideos.filter(video => video.id !== this.props.match.params.id);
                        // const main = foundVideo.filter( video => video.id === this.props.match.params.id );
                        // const comments = main[0].comments;
                        this.setState({ mainVideo: foundVideo });
                    })
            }

                 
        ////////////////////////////////////////////////////////////////////    
                // else {
                //     let sideVideos = this.state.allVideos.filter(video => video.id !== "84e96018-4022-434e-80bf-000ce4cd12b8");
                //     const main = this.state.allVideos.filter(video => video.id === "84e96018-4022-434e-80bf-000ce4cd12b8");
                //     const comments = main[0].comments;
                //     this.setState({ sideVideos, comments, mainVideo:  main[0] });
                // }


        /////////////////////////////////////////Attempt 2 Infinite
        // axios
        // .get(API_URL)
        // .then(response => {
        //         const allVideos = response.data;
        //         this.setState({ allVideos });
        //         if (prevProps.match !== this.props.match) {
        //                     // let sideVideos = this.state.allVideos.filter(video => video.id !== this.props.match.params.id);
        //                     // const main = this.state.allVideos.filter( video => video.id === this.props.match.params.id );
        //                     // const comments = main[0].comments;
        //                     // this.setState({ sideVideos, comments, mainVideo: main[0] });

        //                     const main = allVideos.filter( video => video.id === this.props.match.params.id )
        //                     const comments = main[0].comments;
        //                     let sideVideos = allVideos.filter( video => video.id !== this.props.match.params.id );
        //                     this.setState({ sideVideos, mainVideo: main[0],comments });

        //         } else {
        //                     let sideVideos = this.state.allVideos.filter(video => video.id !== "84e96018-4022-434e-80bf-000ce4cd12b8");
        //                     const main = this.state.allVideos.filter(video => video.id === "84e96018-4022-434e-80bf-000ce4cd12b8");
        //                     const comments = main[0].comments;
        //                     this.setState({ sideVideos, comments, mainVideo:  main[0] });
        //         }
        // })
        // .catch((error) => { 
        //     console.log(error);
        // }); 

        /////////////////////////////////////////////ATTEMPT 1 OK
        // Updating current state
        // if (prevProps.match !== this.props.match) {
        //     axios
        //         // .get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=${API_KEY.myKey}`)
        //         .get(`http://localhost:5000/api/videos/${this.props.match.params.id}`)
        //         .then(response => {
        //     //         // const main = response.data;
        //     //         // const comments = response.data[0].comments;
        //     //         // let sideVideos = this.state.allVideos.filter( video => video.id !== this.props.match.params.id );
        //     //         // this.setState({ sideVideos, mainVideo: main, 
        //     //         //     comments 
        //     //         // });
            
        //             const allVideos = response.data;
        //             const main = allVideos.filter( video => video.id === this.props.match.params.id )
        //             const comments = main[0].comments;
        //             let sideVideos = allVideos.filter( video => video.id !== this.props.match.params.id );
        //             this.setState({ allVideos, sideVideos, mainVideo: main[0],comments });


        //         });

        //             // const main = this.state.allVideos.filter( video => video.id === this.props.match.params.id );
        //             // const comments = main[0].comments;
        //             // let sideVideos = this.state.allVideos.filter( video => video.id !== this.props.match.params.id );
        //             // this.setState({ sideVideos, mainVideo: main[0], 
        //             //     comments 
        //             // });
        // }
    }

    // DIVING DEEP
    postComments (event) {
        event.preventDefault();
        if (this.props.match.params.id) {
            axios
                // .post(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}/comments?api_key=${API_KEY.myKey}`, 
                .post(`http://localhost:5000/api/videos/${this.props.match.params.id}/comments`, 
                    {name: "BrainSatation Man", comment: event.target.comment.value}) 
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

    deleteComment(event) {
        event.preventDefault();
        if (this.props.match.params.id) {
            if (window.confirm("Are you sure you want to delete this post?")) {
                axios
                    // .delete(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}/comments/${event.target.id}?api_key=${API_KEY.myKey}`)
                    .delete(`http://localhost:5000/api/videos/${this.props.match.params.id}/comments/${event.target.id}`)
                    .then(res => {

                        let updatedVideos = res.data
                        const main = updatedVideos.filter(video => video.id === this.props.match.params.id);
                        this.setState ({ allVideos: updatedVideos, sideVideos: updatedVideos, mainVideo: main })
                       // let allVideos = response.data
                        // let newComments = this.state..filter( comment => comment.id !== event.target.id )
                        // this.setState({ comments: newComments })
                        console.log(event.target.id)
                        
                        console.log(res.data)
                        // this.setState ({ allVideos: updatedVideos, sideVideos: updatedVideos, mainVideo: main })
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