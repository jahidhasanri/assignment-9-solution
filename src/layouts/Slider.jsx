import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
    return (
        <Swiper 
            className='lg:w-[1400px] h-[700px] mx-auto border'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className='w-full h-full'>
                    <img 
                        className='w-full h-full object-cover' 
                        src="https://i.ibb.co.com/FwnTCgv/Career-Counselling-2.png" 
                        alt="Slide 1" 
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full h-full'>
                    <img 
                        className='w-full h-full object-cover' 
                        src="https://i.ibb.co/pK2Xt6P/Resume-Review.png" 
                        alt="Slide 2" 
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full h-full'>
                    <img 
                        className='w-full h-full object-cover' 
                        src="https://i.ibb.co/CbJTLKB/5-professional-challenges-faced-by-career-counsellors-blog.png" 
                        alt="Slide 3" 
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
