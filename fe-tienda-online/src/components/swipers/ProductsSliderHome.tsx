import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

import { Navigation, Grid } from 'swiper/modules';
import './style.css';
import ProductCard from '../cards/ProductCard';
import { productos } from '@/utils/data';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function CustomNavigation() {
    const swiper = useSwiper();

    return (
        <div className="flex justify-end items-center gap-x-2 pt-6">
            <Button onClick={() => swiper.slidePrev()}><ChevronLeft /></Button>
            <Button onClick={() => swiper.slideNext()}><ChevronRight /></Button>
        </div>
    );
}

function ProductsSliderHome() {
    return (
        <div className='md:hidden px-4 w-[97vw]' >
            <Swiper
                modules={[Grid, Navigation]}
                slidesPerView={1}
                grid={{
                    rows: 2,
                    fill: 'row'
                }}
                spaceBetween={16}
            >
                {productos.slice(0, 8).map(product => (
                    <SwiperSlide key={product.id} className='relative'>
                        <ProductCard producto={product} />
                    </SwiperSlide>
                ))}
                <CustomNavigation />
            </Swiper>
        </div>
    )
}

export default ProductsSliderHome
