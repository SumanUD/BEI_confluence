import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ImageGallery.scss";

const ImageGallery = ({ images = [] }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="imageGallery">
      <div className="container">
        <div className="row">
          {images.map((image, index) => (
            <div key={image.id || index} className="col-md-4 mb-3">
              <img
                src={image.src}
                className="img-fluid rounded"
                alt={image.alt || `Gallery Image ${index + 1}`}
                onClick={() => openLightbox(index)}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          slides={images.map((img) => ({ src: img.src }))}
        />
      </div>
    </div>
  );
};

export default ImageGallery;
