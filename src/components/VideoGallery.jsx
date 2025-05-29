import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../styles/videoGallery.scss";

const VideoGallery = ({ videos = [], thumbnail, brandName }) => {

  const api = "https://test.beiconfluence.in/storage/";

  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  return (
    <div className="content">
      <div className="video-gallery">
        {videos.map((video, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(api + video.video)}>
            <img src={video.thumbnail || thumbnail} alt={index + 'image'} className="gallery-image" />
            <div className="gallery-item-caption">
              <h2>{video.title || brandName}</h2>
              <p>{video.description}</p>
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
              <video src={selectedVideo} controls height="100%"></video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
