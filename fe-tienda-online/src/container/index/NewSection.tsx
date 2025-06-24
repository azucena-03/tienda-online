import ProductCard from "@/components/cards/ProductCard";
import { productos } from "@/utils/data";

import { Swiper, SwiperSlide } from 'swiper/react';

import '../../components/swipers/style.css';

import { Pagination } from 'swiper/modules';
import SectionHeader from "@/components/common/SectionHeader";

function NewSection() {
    return (
        <section className="w-full md:px-0 pb-4 featured">
            <SectionHeader title="Lo Nuevo" icon="✨" />

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

export default NewSection
