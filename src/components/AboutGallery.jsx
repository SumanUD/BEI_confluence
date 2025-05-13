import 'yet-another-react-lightbox/styles.css';
// import Lightbox from 'yet-another-react-lightbox';
import { useState } from 'react';

const images = [
  { src: '/assets/about/BrandLogos/8PM.png' },
  { src: '/assets/about/BrandLogos/Apollo Diagnostics Logo.png' },
  { src: '/assets/about/BrandLogos/BBK.png' },
  // { src: '/assets/about/BrandLogos/BEI.png' },
  { src: '/assets/about/BrandLogos/Crax.png' },
  { src: '/assets/about/BrandLogos/ECE.png' },
  { src: '/assets/about/BrandLogos/English Oven.png' },
  { src: '/assets/about/BrandLogos/Gyan.png' },
  { src: '/assets/about/BrandLogos/Harvest Gold.png' },
  { src: '/assets/about/BrandLogos/IIL.png' },
  { src: '/assets/about/BrandLogos/JSL Logo.png' },
  { src: '/assets/about/BrandLogos/Kerovit.png' },
  { src: '/assets/about/BrandLogos/MEDERMA.png' },
  { src: '/assets/about/BrandLogos/Nando_s.png' },
  { src: '/assets/about/BrandLogos/Schmitten.png' },
  { src: '/assets/about/BrandLogos/Total Energies LOGO.png' },
  { src: '/assets/about/BrandLogos/Trident Realty.png' },
  { src: '/assets/about/BrandLogos/Umang Dairy Logo.png' },
  { src: '/assets/about/BrandLogos/Wai Wai.png' },
  { src: '/assets/about/BrandLogos/Ziggy.png' },

];



const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="container aboutGallery">
      <h1 className="page-title">Our Brands</h1>

      <div className="row brandsGalleryLogo">
        {images.map((img, i) => (
          <div className="col-lg-3 col-md-4 col-6 my-3" key={i}>
            <img
              src={img.src.replace('/1200/768', '/600')}
              className="img-fluid card"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              style={{ cursor: 'pointer' }}
              alt={`Gallery ${i + 1}`}
            />
          </div>
        ))}
      </div>

      <Lightbox open={open} close={() => setOpen(false)} slides={images} index={index} />
    </div>
  );
};

export default Gallery;
