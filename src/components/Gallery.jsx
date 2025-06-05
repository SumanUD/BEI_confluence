import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ImageGallery.scss";

const ImageGallery = ({ images = [] }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [columnsImage, setColumnsImage] = useState([[], [], [], []]);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  useEffect(() => {
    const columns = Array.from({ length: 4 }, () => []);
    images.forEach((img, i) => {
      columns[i % 4].push(img);
    });
    setColumnsImage(columns);    
  }, [images]);

  return (
    <div className="imageGallery">
      <div className="container">

        <div className="row">
          {columnsImage.map((columnImg, colIndex) => (
            <div key={colIndex} className="col-md-3">
              {columnImg.map((image, index) => (
                <div key={index} className="mb-3">
                  <img
                    src={image}
                    className="img-fluid rounded"
                    alt={image.alt || `Gallery Image ${index + 1}`}
                    onClick={() => openLightbox(colIndex * 10 + index)} // Adjust index mapping if needed
                    style={{ cursor: "pointer" }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>


        {/* Lightbox */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          slides={images.map((img) => ({ src: img }))}
        />
      </div>
    </div>
  );
};

export default ImageGallery;
