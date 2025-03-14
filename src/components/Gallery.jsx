import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const images = [
  { id: 251 },
  { id: 252 },
  { id: 253 },
  { id: 254 },
  { id: 255 },
  { id: 256 },
];

const ImageGallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="imageGalley">
    <div className="container">
      <div className="row">
        {images.map((image, index) => (
          <div key={image.id} className="col-md-4 mb-3">
            <img
              src={`https://unsplash.it/600.jpg?image=${image.id}`}
              className="img-fluid rounded"
              alt={`Gallery ${image.id}`}
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
        slides={images.map((img) => ({
          src: `https://unsplash.it/1200/768.jpg?image=${img.id}`,
        }))}
      />
    </div>
    </div>
  );
};

export default ImageGallery;
