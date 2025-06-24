import FeaturedProductCard from "@/components/cards/FeaturedProductCard"
import ProductCardCompact from "@/components/cards/ProductCardCompact"
import SectionHeader from "@/components/common/SectionHeader"
import { productos } from "@/utils/data"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import '../../components/swipers/style.css';

import { Pagination } from 'swiper/modules';

function SellersSection() {
    const topLeftProducts = productos.slice(0, 3)
    const featuredProduct = productos[8]
    const topRightProducts = productos.slice(4, 7)

    return (
        <section className="w-full md:px-0 mb-8 featured">
            <SectionHeader title="más vendidos" icon="🔥" />

            <Swiper
                pagination={{
                    clickable: true,
                }}
                slidesPerView={'auto'}
                modules={[Pagination]}
                spaceBetween={16}
                grabCursor={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        centeredSlides: true
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="relative pb-2"
            >
                <SwiperSlide className="space-y-6 sm:w-40 md:w-auto">
                    {productos.slice(0, 3).map(producto => <ProductCardCompact key={producto.id} producto={producto} />)}
                </SwiperSlide>
                <SwiperSlide className="h-auto  sm:w-40 md:w-auto">
                    <FeaturedProductCard producto={featuredProduct} />
                </SwiperSlide>
                <SwiperSlide className="space-y-6 sm:w-40 md:w-auto" >
                    {productos.slice(4, 7).map(producto => <ProductCardCompact key={producto.id} producto={producto} />)}
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default SellersSection
