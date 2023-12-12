import React from 'react';
import "./testimonials.css";
import { Data } from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <section className="testimonial container section" id="testimonials">
      <h2 className="section__title">What People say abouat me</h2>
      <span className="section__subtitle">Testimonials</span>

      <Swiper
        className="testimonial__container"
          // slidesPerView={1}
          loop = {true}
          grabCursor = {true}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
      >
        {Data.map(({ id, image, title, position, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>

              <img src={image} alt="" className="testimonial__img" />

              <h3 className="testimonial__name">{title}</h3>

              <h4 className="testimonial__name">{position}</h4>

              <p className="testimonial__description">{description}</p>

            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials