import React from 'react';

const Slider = () => {
    return (
        <div class="carousel w-full h-full">
 
        <div id="slide1" class="carousel-item relative w-full">
          <img className='h-[700px] w-[1400px] mx-auto mt-12 mb-12' src="https://i.ibb.co.com/wBq9pMb/image-6.png" alt="Slide 1" class="w-full" />
         
          <div class="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
            <a href="#slide3" class="btn btn-circle ">❮</a>
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div>
      
        
        <div id="slide2" class="carousel-item relative w-full">
          <img className='h-[700px] w-[1400px] mx-auto mt-12 mb-12' src="https://i.ibb.co.com/pK2Xt6P/Resume-Review.png" alt="Slide 2" class="w-full" />
        
          <div class="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
            <a href="#slide1" class="btn btn-circle">❮</a>
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div>
      
        
        <div id="slide3" class="carousel-item relative w-full">
          <img className='h-[700px] w-[1400px] mx-auto mt-12 mb-12' src="https://i.ibb.co.com/ZgfGS6r/hqdefault.jpg" alt="Slide 3" class="w-full" />
          
          <div class="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
            <a href="#slide2" class="btn btn-circle">❮</a>
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
                          </div>
    );
};

export default Slider;