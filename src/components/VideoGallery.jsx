import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../styles/videoGallery.scss";

const videos = [
  {
    title: "Mount Rainier",
    description: "14410 feet of adventure",
    image: "https://assets.codepen.io/156905/rainier.jpg",
    videoUrl: "https://vimeo.com/179049611",
  },
  {
    title: "Olympic National Park",
    description: "Mountains, rain forests, wild coastlines",
    image: "https://assets.codepen.io/156905/olympicnationalpark.jpg",
    videoUrl: "https://vimeo.com/108785446",
  },
  {
    title: "North Cascades",
    description: "The mountains are calling",
    image: "https://assets.codepen.io/156905/northcascadespark.jpg",
    videoUrl: "https://vimeo.com/3653567",
  },
  {
    title: "Mount St. Helens",
    description: "The one and only",
    image: "https://assets.codepen.io/156905/mountsthelens.jpg",
    videoUrl: "https://vimeo.com/171540296",
  },
];

const VideoGallery = () => {
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
      <div className="section-header">
        <h2>Video Gallery</h2>
      </div>
      <div className="video-gallery">
        {videos.map((video, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(video.videoUrl)}>
            <img src={video.image} alt={video.title} className="gallery-image" />
            <div className="gallery-item-caption">
              <h2>{video.title}</h2>
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
              <ReactPlayer url={selectedVideo} width="100%" height="100%" controls playing />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
