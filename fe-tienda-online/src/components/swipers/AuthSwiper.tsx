import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Autoplay } from 'swiper/modules';
import './style.css';
function AuthSwiper() {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            cssMode={true}
            pagination={{
                clickable: true,
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            slidesPerView={1}
            className="w-[358px] lg:w-auto h-auto rounded-md"
        >
            <SwiperSlide className='relative'>
                <img src="/auth-slide-1.webp" alt="" className='h-[449px] w-full block object-cover object-center' />
                <p className='origin-bottom -rotate-8 absolute bottom-1/5 text-center italic text-4xl font-bold text-white text-shadow-md'>Envío rápido para tu <span className='text-[#FFA52F]'>comodidad</span></p>
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <img src="/auth-slide-2.webp" alt="" className='h-[449px] w-full block object-cover object-center' />
                <p className='origin-bottom -rotate-8 absolute bottom-1/5 text-center italic text-4xl font-bold text-white text-shadow-md'>Descubre las últimas <span className='text-[#FFA52F]'>tendencias</span> hoy</p>
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <img src="/auth-slide-3.webp" alt="" className='h-[449px] w-full block object-cover object-bottom' />
                <p className='origin-bottom -rotate-8 absolute bottom-1/5 text-center italic text-4xl font-bold text-white text-shadow-md'>Fácil devolución y cambio <span className='text-[#FFA52F]'>garantizado</span></p>
            </SwiperSlide>
        </Swiper>
    )
}

export default AuthSwiper
