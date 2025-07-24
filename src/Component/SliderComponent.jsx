import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const SliderComponent = ({ text, pt }) => {
    return (
        <div>
            <article className='absolute mt-[-100px] w-full z-10'>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className='flex gap-6'>
                    <img src="Foto/ss15.svg" width={'200px'} alt="" />
                    <img src="Foto/ss15.svg" width={'200px'} alt="" />
                    <img src="Foto/ss15.svg" width={'200px'} alt="" />
                    <img src="Foto/ss15.svg" width={'200px'} alt="" />
                </SwiperSlide>
                <SwiperSlide>  <img src="Foto/ss15.svg" width={'200px'} alt="" /></SwiperSlide>
                <SwiperSlide>  <img src="Foto/ss15.svg" width={'200px'} alt="" /></SwiperSlide>
                <SwiperSlide>  <img src="Foto/ss15.svg" width={'200px'} alt="" /></SwiperSlide>
                <SwiperSlide>  <img src="Foto/ss15.svg" width={'200px'} alt="" /></SwiperSlide>
            </Swiper>
            </article>

            <article className='border-[2px] p-[50px] w-[90%] m-auto rounded-2xl shadow-[9px_9px] mt-[200px] pt-[100px]'>
                <h1 className='text-[30px]'>{text}</h1>
                <p>{pt}</p>
            </article>
        </div>
    )
}

export default SliderComponent
