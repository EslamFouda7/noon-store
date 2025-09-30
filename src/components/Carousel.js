import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Pagination,  Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination'; 
import 'swiper/css/autoplay';




function Carousel({ images = [], id = "carouselDefault" }) {
  return (
    <div className=""> 
      <Swiper
        modules={[Pagination, Autoplay]} 
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }} 
        slidesPerView={1} 
        loop={true} 
        className="mySwiper" 
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img 
              src={`/${img}`} 
              alt={`slide-${index}`} 
              className='h-auto w-100'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;