'use client'
import Image from "next/image";
import Picture from "@/images/pic2-removebg-preview.png";
import Picture1 from "@/images/pic3.jpg";
import Picture2 from "@/images/pic4.jpg";

import {A11y, Controller, Navigation, Pagination, Scrollbar,EffectFade, Thumbs , Mousewheel} from 'swiper/modules';
import { Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cards';
import './slider-styles.css'
import {useState} from "react";

export default function HomeHeroSlider() {
    const [controlledSwiper, setControlledSwiper] = useState(null);

    return (
        <div>
            <Swiper
                modules={[Navigation, Thumbs, Pagination,Mousewheel, Scrollbar, Controller, EffectFade, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                effect="fade"
                navigation
                className="shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] !flex !flex-col"
                mousewheel
                controller={{control: controlledSwiper}}
                pagination={{clickable: false}}
                scrollbar={{draggable: false}}
            >
                <SwiperSlide>
                    <div className="w-full h-[500px] bg-white max-h-[605px] relative">
                        <Image src={Picture2} alt="Slider image" fill className="object-contain" quality={80}
                               priority={false}/>
                    </div>
                </SwiperSlide> <SwiperSlide>
                <div className="w-full h-[500px] bg-white max-h-[605px] relative">
                    <Image src={Picture} alt="Slider image" fill className="object-contain" quality={80}
                           priority={false}/>
                </div>
            </SwiperSlide> <SwiperSlide>
                <div className="w-full h-[500px] bg-white max-h-[605px] relative">
                    <Image src={Picture1} alt="Slider image" fill className="object-contain" quality={80}
                           priority={false}/>
                </div>
            </SwiperSlide> <SwiperSlide>
                <div className="w-full h-[500px] bg-white max-h-[605px] relative">
                    <Image src={Picture2} alt="Slider image" fill className="object-contain" quality={80}
                           priority={false}/>
                </div>
            </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[500px] bg-white max-h-[605px] relative">
                        <Image src={Picture} alt="Slider image" fill className="object-contain" quality={80}
                               priority={false}/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

    )
}
