'use client'
import Picture1 from "@/images/pic3.jpg";
import {A11y, Controller, Navigation, Pagination } from 'swiper/modules';
import { Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cards';
import './article-slider-styles.css'
import {useState} from "react";
import ArticleCard from "@/components/pages/home/components/ArticleCard";

export default function ArticleSlider() {
    const [controlledSwiper, setControlledSwiper] = useState(null);

    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Controller, A11y]}
                spaceBetween={30}
                slidesPerView={3}
                slidesPerGroup={3}
                effect="fade"
                navigation
                className=""
                controller={{control: controlledSwiper}}
                pagination={{clickable: false}}
            >
                <SwiperSlide>
                    <ArticleCard title="روش های مراقبت از پوست" image={Picture1}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ArticleCard title="روش های مراقبت از پوست" image={Picture1}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ArticleCard title="روش های مراقبت از پوست" image={Picture1}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ArticleCard title="روش های مراقبت از پوست" image={Picture1}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ArticleCard title="روش های مراقبت از پوست" image={Picture1}/>
                </SwiperSlide>
            </Swiper>
        </div>

    )
}
