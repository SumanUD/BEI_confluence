import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../styles/videoGallery.scss";

const VideoGallery = ({ videos = [], thumbnail, brandName }) => {

  const api = "https://test.beiconfluence.in/storage/";

  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    console.log(videoUrl)
  };

  const closeModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = "auto"; // Restore scrolling
  };  

  return (
    <div className="content">
      <h2 className="video-gallery-video-title">VIDEO GALLERY</h2>
      <div className="video-gallery">
        {videos.map((video, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(video.video_input)} style={{padding: video.thumbnail_picture ? '': '15px'}}>
            <img src={video.thumbnail_picture || thumbnail} alt={index + 'image'} className="gallery-image" />
            <div className="gallery-item-caption">
              <h2>{video.video_title || brandName}</h2>              
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div className="video-modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>&times;</button>
            <div className="player-wrapper">
              {/* <ReactPlayer url={selectedVideo} width="100%" height="100%" controls playing /> */}
              <video src={selectedVideo} controls height="100%" width="100%"></video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
