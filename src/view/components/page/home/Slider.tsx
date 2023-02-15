import React from 'react';

const Slider = () => {
  return (
    <div className='grid grid-cols-2 gap-1 flex items-center justify-around'>
      <div className=''>
        
          <h4 className='font-bold text-lg'>Get 20% Off Discount</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, rerum.</p>
          <button type='button' className='px-2 py-2 bg-black text-white rounded-lg'>Shop</button>
        
      </div>
      <div>
        <Swiper
          spaceBetween={50}
          onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          autoplay={true}
        >
          <SwiperSlide>
            <img  src='https://live.staticflickr.com/65535/52522855818_98bdd4c07a_o.jpg' alt='watch' className='w-100' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://live.staticflickr.com/65535/52522584684_9fa14a3332_o.jpg' alt='watch' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://live.staticflickr.com/65535/52522308721_4f2de69503_o.jpg' alt='watch' />
          </SwiperSlide>
        
        </Swiper>
      </div>
      
    </div>
  );
};

export default Slider;