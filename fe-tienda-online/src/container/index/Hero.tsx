import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import '../../components/swipers/style.css'

import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <>
            <Swiper
                modules={[EffectFade, Pagination, Autoplay]}
                spaceBetween={30}
                effect={'fade'}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop
                slidesPerView={1}
                className="w-full h-[382px] md:h-[550px] rounded-bl-4xl rounded-br-4xl p-2 lg:p-6 md:p-0 mb-8 md:mb-14 overflow-visible"
            >
                <SwiperSlide>
                    <div className='bg-[url("/hero-slide-1.png")] bg-cover bg-no-repeat flex justify-between h-[-webkit-fill-available] bg-center p-4'>
                        <div className='self-end text-white'>
                            <h1 className='uppercase text-2xl md:text-[68px] font-bold leading-none mb-2'>Nike Air Max</h1>
                            <p className='mb-6 text-xs lg:text-sm font-light w-64 lg:w-80'>Camina con estilo y máxima comodidad. Nike Air Max disponibles aquí.</p>
                            <Link to="/productos/1">
                                <Button variant={"base"} className='uppercase tracking-wider'>Agregar al carrito</Button>
                            </Link>
                        </div>
                        <div className='hidden lg:flex flex-col gap-y-4 self-end w-16 md:w-auto'>
                            <img src="/slide1_a.png" />
                            <img src="/slide1_b.png" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[url("/hero-slide-2.png")] bg-cover bg-no-repeat bg-gray-400 bg-blend-multiply flex justify-between h-[-webkit-fill-available] bg-top p-4'>
                        <div className='self-end text-white'>
                            <h1 className='uppercase text-2xl md:text-[68px] font-bold leading-none mb-2'>Nike Air Max</h1>
                            <p className='mb-6 text-sm font-light w-64 lg:w-80'>Tecnología Air visible para una pisada suave. ¡Compra tus Air Max!</p>
                            <Link to="/productos/2">
                                <Button variant={"base"} className='uppercase tracking-wider'>Agregar al carrito</Button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default HeroSection
