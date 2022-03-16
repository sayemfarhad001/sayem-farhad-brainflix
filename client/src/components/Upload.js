import React from "react";
import publishIcon from "../assets/icons/publish.svg";
import Bike from "../assets/images/Upload-video-preview.jpg"
import axios from "axios";

// CREATED CLASS AND STATE TO WORK ON DEEP DIVING 
class Upload extends React.Component {
    state = {
        videos: []
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        axios
            .post("http://localhost:5000/api/videos", {
                title: event.target.title.value,
                description: event.target.description.value,
                image: Bike,
                channel: event.target.channel.value
            })
            .then(res => {
                this.setState({});
                alert("Video has been uploaded successfully! Click OK to go to homepage!")
                this.props.history.push(`/video/${res.data}`);
            })
            .catch(error=>alert("Please input a title and a description"));
    };

    render() {
        return (
            <div className="upload">
                <h1 className="upload__title">Upload Video</h1>
                <form onSubmit={this.handleFormSubmit} className="upload__input-container">
                    <div className="upload__big-container">
                        <div className="upload__video-container">
                            <h2 className="upload__subtitle">VIDEO THUMBNAIL</h2>
                            <div className="upload__video">
                                <img src="" alt="" />
                            </div>
                        </div>
                        <div className="upload__textarea-container">
                            <h5 className="upload__input-container--text">TITLE YOUR VIDEO</h5>
                            <textarea
                                className="upload__text-container upload__text-container--one"
                                name="title"
                                rows="10"
                                cols="50"
                                placeholder="Add a title to your video"
                            ></textarea>
                            <h5 className="upload__input-container--text">
                                ADD A VIDEO DESCRIPTION
                            </h5>
                            <textarea
                                className="upload__text-container upload__text-container--two"
                                name="description"
                                rows="10"
                                cols="50"
                                placeholder="Add a description of your video"
                            ></textarea>
                        </div>
                        <input type="hidden" name="channel" value="Sayem Farhad" />
                    </div>
                    <div className="upload__button-container">
                        <button className="upload__button-container--publish">
                            <img
                                className="upload__button-container--icon"
                                src={publishIcon}
                                alt=""
                            />
                            <span>PUBLISH</span>
                            <p></p>
                        </button>
                        <button className="upload__button-container--cancel">CANCEL</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default Upload;