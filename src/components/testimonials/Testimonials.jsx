import React from "react";
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
// import AVTR2 from '../../assets/avatar1.jpg'
// import AVTR3 from '../../assets/avatar1.jpg'
// import AVTR4 from '../../assets/avatar1.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5> Reviews from clients </h5>
      <h2> Testimonials</h2>

      <Swiper 
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className='container testimonials__container'>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'> 
            <img src={AVTR1} alt="Avatar One"/>
          </div>
          <h5 className='clien__name'>Client Name</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Quis inventore praesentium exercitationem iure vero, harum, vel rem, 
            laborum aliquam doloribus illum similique placeat autem veritatis saepe quas!
            Possimus, accusamus beatae.
          </small> 
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'> 
            <img src={AVTR1} alt="Avatar One"/>
          </div>
          <h5 className='clien__name'>Client Name</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Quis inventore praesentium exercitationem iure vero, harum, vel rem, 
            laborum aliquam doloribus illum similique placeat autem veritatis saepe quas!
            Possimus, accusamus beatae.
          </small> 
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials