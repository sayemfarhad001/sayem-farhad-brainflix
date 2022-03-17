// IMAGE UPLOAD WORK IN PROGRESS

import React, { useState, useEffect } from 'react';
import Bike from "../assets/images/Upload-video-preview.jpg"

export default function UploadImages() {
    const [images, setImages] = useState([]); 
    const [imageURLs, setImageURLs] = useState(Bike);
    
    useEffect(() => {
        if (images.length < 1) return; 
          
        const newImageUrls = []; 
        images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs (newImageUrls); 
    }, [images]);
    
    function onImageChange(e) {
        setImages([...e.target.files]);
    }
    
    return (
        <>
            <div className="upload__video" style={{ backgroundImage: `url(${imageURLs})` }} >
                <input name="image" type="file"  multiple accept="image/*" onChange={onImageChange} />
            </div>
        </>
    )
}    

