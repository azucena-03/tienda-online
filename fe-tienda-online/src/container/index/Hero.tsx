import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import '../../components/swipers/style.css'

import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import { Button } from '@/components/ui/button';

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
                className="w-full h-[382px] md:h-[550px] rounded-bl-4xl rounded-br-4xl p-6 md:p-0 mb-8 md:mb-8"
            >
                <SwiperSlide>
                    <div className='bg-[url("/hero-slide-1.png")] bg-cover bg-no-repeat flex justify-between h-[-webkit-fill-available] bg-center p-8'>
                        <div className='self-end text-white'>
                            <h1 className='uppercase text-2xl md:text-[68px] font-bold leading-none'>Nike Air Max</h1>
                            <p className='mb-6 text-sm font-light'>Lorem ipsum dolor consectetur<br /> dolorem voluptatibus exercitationem.</p>
                            <Button variant={"base"} className='uppercase tracking-wider'>Lorem, ipsum.</Button>
                        </div>
                        <div className='flex flex-col gap-y-4 self-end w-16 md:w-auto'>
                            <img src="/slide1_a.png" />
                            <img src="/slide1_b.png" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[url("/hero-slide-2.png")] bg-cover bg-no-repeat bg-gray-400 bg-blend-multiply flex justify-between h-[-webkit-fill-available] bg-top p-8'>
                        <div className='self-center text-white'>
                            <h1 className='uppercase text-2xl md:text-[68px] font-bold leading-none'>Nike Air Max</h1>
                            <p className='mb-6 text-sm font-light'>Lorem ipsum dolor consectetur dolorem.</p>
                            <Button className='uppercase tracking-wider bg-transparent border-1 border-white'>Lorem, ipsum.</Button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default HeroSection
