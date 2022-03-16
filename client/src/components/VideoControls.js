//DEEP DIVING FOR VIDEO CONTROLS - IN PROGRESS
import React from "react";

const VideoControls = () => {
    return (
        <div id="video-controls" className="controls" data-state="hidden">
            <button id="playpause" type="button" data-state="play">Play/Pause</button>
            <button id="stop" type="button" data-state="stop">Stop</button>
            <div className="progress">
                <progress id="progress" value="0" min="0">
                    <span id="progress-bar"></span>
                </progress>
            </div>
            <button id="mute" type="button" data-state="mute">Mute/Unmute</button>
            <button id="volinc" type="button" data-state="volup">Vol+</button>
            <button id="voldec" type="button" data-state="voldown">Vol-</button>
            <button id="fs" type="button" data-state="go-fullscreen">Fullscreen</button>
        </div>
    );
};
export default VideoControls;




    

// videoControls.setAttribute('data-state', 'visible')

// var supportsProgress = (document.createElement('progress').max !== undefined);
// if (!supportsProgress) progress.setAttribute('data-state', 'fake');

