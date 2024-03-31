import Image from "next/image";
import Picture from "@/images/pic2-removebg-preview.png";
import Picture1 from "@/images/pic3.jpg";
import Picture2 from "@/images/pic4.jpg";

import {A11y, Controller, Navigation, Pagination, Scrollbar,EffectCards, Thumbs} from 'swiper/modules';
import { Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cards';
import './slider-styles.css'
import {useState} from "react";
import {Swiper as SwiperType} from "swiper/types";

export default function Slider() {
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    return (
        <div>
            <Swiper
                modules={[Navigation, Thumbs, Pagination, Scrollbar, Controller,EffectCards, A11y]}
                effect="cards"
                spaceBetween={50}
                thumbs={{swiper: thumbsSwiper}}
                slidesPerView={1}
                navigation
                draggable={false}
                className="shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]"
                freeMode={false}
                controller={{control: controlledSwiper}}
                pagination={{clickable: false}}
                scrollbar={{draggable: false}}
                onSwiper={setThumbsSwiper}
            >
                <SwiperSlide>
                    <div className="w-full h-[600px] bg-white max-h-[605px] relative">
                        <Image src={Picture2} alt="Slider image" fill className="object-contain" quality={80}
                               priority={false}/>
                    </div>
                </SwiperSlide> <SwiperSlide>
                <div className="w-full h-[600px] bg-white max-h-[605px] relative">
                    <Image src={Picture} alt="Slider image" fill className="object-contain" quality={80}
                           priority={false}/>
                </div>
            </SwiperSlide> <SwiperSlide>
                <div className="w-full h-[600px] bg-white max-h-[605px] relative">
                    <Image src={Picture1} alt="Slider image" fill className="object-contain" quality={80}
                           priority={false}/>
                </div>
            </SwiperSlide> <SwiperSlide>
                <div className="w-full h-[600px] bg-white max-h-[605px] relative">
                    <Image src={Picture2} alt="Slider image" fill className="object-contain" quality={80}
                           priority={false}/>
                </div>
            </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[600px] bg-white max-h-[605px] relative">
                        <Image src={Picture} alt="Slider image" fill className="object-contain" quality={80}
                               priority={false}/>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Swiper
                className="w-full h-[100px] mt-[50px]"
                modules={[Thumbs]}
                spaceBetween={10}
                watchSlidesProgress
                freeMode
                slidesPerView={4}
                onSwiper={setThumbsSwiper}
            >
                <SwiperSlide>
                    <div className="w-full h-[100px] max-h-[105px] relative">
                        <Image src={Picture2} alt="Slider image" fill className="object-contain" quality={80}
                               priority={false}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[100px] max-h-[105px] relative">
                        <Image src={Picture} alt="Slider image" fill className="object-contain" quality={80}
                               priority={false}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[100px] max-h-[105px] relative">
                        <Image src={Picture1} alt="Slider image" fill className="object-contain" quality={80}
                               priority={false}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[100px] max-h-[105px] relative">
                        <Image src={Picture2} alt="Slider image" fill className="object-contain" quality={80}
                               priority={false}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[100px] max-h-[105px] relative">
                        <Image src={Picture} alt="Slider image" fill className="object-contain" quality={80}
                               priority={false}/>
                    </div>
                </SwiperSlide>
            </Swiper>
                  </div>

    )
}
