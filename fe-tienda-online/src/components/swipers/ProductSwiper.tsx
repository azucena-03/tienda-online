import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination, Autoplay } from 'swiper/modules';
import './style.css';

type ProductSwiperProps = {
    thumbail: string | undefined,
    imagenes: string[] | undefined
}

function ProductSwiper({ thumbail, imagenes }: ProductSwiperProps) {
    return (
        <div className='md:hidden mb-8'>
            <Swiper
                modules={[Pagination, Autoplay]}
                cssMode={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop
                slidesPerView={1}
                className="h-fit rounded-md"
            >
                <SwiperSlide className='relative'>
                    <img src={thumbail} alt="" className='h-[449px] w-full block object-cover object-center img-radial' />
                </SwiperSlide>
                {
                    imagenes!.map(img => (
                        <SwiperSlide className='relative'>
                            <img src={img} alt="" className='h-[449px] w-full block object-cover object-center img-radial' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default ProductSwiper
