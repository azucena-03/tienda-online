import ProductCard from "@/components/cards/ProductCard";
import { productos } from "@/utils/data";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import '../../components/swipers/style.css';

import { Pagination } from 'swiper/modules';
import SectionHeader from "@/components/common/SectionHeader";


function FeaturedSection() {
    return (
        <section className="w-full md:px-0 pb-4 featured">
            <SectionHeader title="Favoritos de la temporada" icon="📍" />

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
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                className="relative pb-2"
            >
                {productos.slice(0, 4).map(producto => (
                    <SwiperSlide>
                        <ProductCard producto={producto} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default FeaturedSection
