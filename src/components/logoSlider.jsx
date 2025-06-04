import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'; // only if needed
import '../styles/logoSlider.scss';

const LogoSlider = ({ brand}) => {
  return (
    <>
      {
        brand.length > 0 ? 
        <div className="logo-slider-wrapper">
          <div className="logoContent">
            <h2>BEI BRANDS</h2>
          </div>
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            // slidesPerView={6}
            spaceBetween={50}
            // lazy={true}
            breakpoints={{
              1024: { slidesPerView: 6 },
              768: { slidesPerView: 5 },
              480: { slidesPerView: 3 },
              0: { slidesPerView: 3 },
            }}
            style={{ padding: "1rem 0" }}
          >
            {brand.map((img, index) => (
              <SwiperSlide key={index}>
                <a href={`/work/brand/${img.brand_name?.split(" ").join("_")}`}>
                  <img
                    src={img.brand_logo}
                    className="swiper-lazy"
                    alt={img.brand_name}
                    width="150"
                  />                  
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> : ''
      }
    </>
  );
};

export default LogoSlider;
