import { useState } from "react";
import "../styles/videoCarousel.scss";

const videos = [
  {
    id: "videoTab01",
    title: "12 Dangerous Side Effects of Working Out",
    thumbnail: "https://user-images.githubusercontent.com/16266381/60862959-057a8400-a241-11e9-9e09-e50f827e4881.jpg",
    videoUrl: "https://www.youtube.com/embed/BD5ul7MLvds?autoplay=1",
  },
  {
    id: "videoTab02",
    title: "7 Food Combinations That Can Ruin Your Health",
    thumbnail: "https://user-images.githubusercontent.com/16266381/60864371-3957a880-a245-11e9-92ac-61673c2f0204.jpg",
    videoUrl: "https://www.youtube.com/embed/pRbhveLaQ9c?autoplay=1",
  },
  {
    id: "videoTab03",
    title: "8 Hairstyles That Show a Man’s True Character",
    thumbnail: "https://user-images.githubusercontent.com/16266381/60864450-791e9000-a245-11e9-97d3-ab6b33841df7.jpg",
    videoUrl: "https://www.youtube.com/embed/FpnqHvmJU4U?autoplay=1",
  },
  {
    id: "videoTab04",
    title: "9 Signs You're Eating Too Much Salt",
    thumbnail: "https://user-images.githubusercontent.com/16266381/60864540-b1be6980-a245-11e9-933c-f7782a29b4b7.jpg",
    videoUrl: "https://www.youtube.com/embed/YLZuvTBmmwo?autoplay=1",
  },
  {
    id: "videoTab05",
    title: "iPhone X Impressions & Hands On!",
    thumbnail: "https://user-images.githubusercontent.com/16266381/60865619-3611ec00-a248-11e9-8ddf-5d8c458072d7.jpg",
    videoUrl: "https://www.youtube.com/embed/_HTXMhKWqnA?autoplay=1",
  },
  {
    id: "videoTab06",
    title: "Driving a Tesla Model 3! [Auto Focus Ep. 1]",
    thumbnail: "https://user-images.githubusercontent.com/16266381/60865766-8721e000-a248-11e9-97d6-fad5269c29ff.jpg",
    videoUrl: "https://www.youtube.com/embed/9O5PhuW927w?autoplay=1",
  },
];

export default function VideoCarousel() {
  const [activeTab, setActiveTab] = useState(videos[0].id);
  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <section className="video-block">
      <div className="container">
        <h2 className="video-tab-title">Video Gallery with Bootstrap Tab</h2>
        <div className="row">
          <div className="col-md-7">
            <div className="tab-content">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className={`tab-pane fade ${activeTab === video.id ? "show active" : ""}`}
                >
                  {playingVideo === video.id ? (
                    <iframe
                      title={video.title}
                      src={video.videoUrl}
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <a
                      className="play-icon"
                      onClick={() => setPlayingVideo(video.id)}
                    >
                      <img
                        className="play-button"
                        src="https://user-images.githubusercontent.com/16266381/60864229-d403b780-a244-11e9-909a-a8a01b6e1d50.png"
                        alt="play-button"
                      />
                      <div className="post-thumbnail">
                        <img
                          className="img-responsive"
                          src={video.thumbnail}
                          alt={video.title}
                        />
                      </div>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-5">
            <ul className="nav nav-tabs">
              {videos.map((video) => (
                <li key={video.id} className={activeTab === video.id ? "active" : ""}>
                  <a href="#" onClick={() => { setActiveTab(video.id); setPlayingVideo(null); }}>
                    <div className="post-thumbnail">
                      <img className="img-responsive" src={video.thumbnail} alt={video.title} />
                    </div>
                    <h3>{video.title}</h3>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
