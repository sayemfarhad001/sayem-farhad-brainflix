import React from "react";
import axios from "axios";
import Bike from "../assets/images/Upload-video-preview.jpg"
import { API_KEY } from "./HomePage"
class Upload extends React.Component {
    state = {
        videos: []
    }
    
    componentDidMount() {
        axios
            .get(`https://project-2-api.herokuapp.com/videos?api_key=${API_KEY.myKey}`)
            .then(result => {
                this.setState({
                    videos: result.data
            })
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        axios
            .post(`https://project-2-api.herokuapp.com/videos?api_key=${API_KEY.myKey}`, {
                title:  event.target.title.value,
                description:  event.target.description.value,
                image:  Bike,
                channel:  event.target.channel.value,
            })
            .then(result => {
                this.props.history.push(`/video/${result.data}`)
            })
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
                        <input type="hidden" name="channel" value="Philip Bertogg" />
                    </div>
                    <div className="upload__button-container">
                        <button className="upload__button-container--publish">PUBLISH</button>
                        <button className="upload__button-container--cancel">CANCEL</button>
                    </div>
                </form>
            </div>
        )
    }

}
export default Upload;