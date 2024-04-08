'use client'
import Image from "next/image";
import Picture from "@/images/pic2-removebg-preview.png";
import Picture1 from "@/images/pic3.jpg";
import Picture2 from "@/images/pic4.jpg";

import {A11y, Controller, Navigation, Pagination} from 'swiper/modules';
import { Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cards';
import './offer-slider-styles.css'
import {useState} from "react";
import {Typography} from "@/components/atoms/Typography";
import {Button} from "@/components/molecules/Button/Buttom";
import {Icon} from "@/components/atoms/Icon";

export default function OfferSlider() {
    const [controlledSwiper, setControlledSwiper] = useState(null);

    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Controller, A11y]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                className="!p-16 max-h-[650px]"
                controller={{control: controlledSwiper}}
                pagination={{clickable: false}}
            >
                <SwiperSlide>
                    <div className="h-[550px] bg-white max-h-[605px] relative image">
                        <Image src={Picture2} alt="Slider image" fill className="object-cover" quality={80}
                               priority={false}/>
                    </div>
                    <div className="info mt-2 opacity-0 max-h-0 flex flex-col gap-4">
                        <Typography.Title level="h3" size="lg" weight="medium" color="primary" className="!text-center">میسلار واتر گارنیر</Typography.Title>
                        <div className="flex justify-between items-center">
                            <Typography.Title level="h3" size="md" color="warning" weight="normal">کشور سازنده</Typography.Title>
                            <Typography.Title level="h5" size="md" weight="medium" color="primary">فرانسه</Typography.Title>
                        </div>
                        <div className="flex justify-between items-center">
                            <Typography.Title level="h3" size="md" color="warning" weight="normal">مقدار</Typography.Title>
                            <Typography.Title level="h5" size="md" weight="medium" color="primary">120ml</Typography.Title>
                        </div>
                        <div className="flex justify-between items-center">
                            <Typography.Title level="h3" size="md" color="warning" weight="normal">برند</Typography.Title>
                            <Typography.Title level="h5" size="md" weight="medium" color="primary">garnier</Typography.Title>
                        </div>
                        <div className="flex items-center gap-1">
                            <Typography.Text size="md" weight="semiBold" color="danger" className="!text-center">230,000</Typography.Text>
                            <Icon name="Toman"/>
                        </div>

                        <Button title="افزودن به سبد خرید" className="!mx-auto" icon="Basket"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[550px] bg-white max-h-[605px] relative image">
                        <Image src={Picture2} alt="Slider image" fill className="object-cover" quality={80}
                               priority={false}/>
                    </div>
                    <div className="info mt-2 opacity-0 max-h-0 flex flex-col gap-4">
                        <Typography.Title level="h3" size="lg" weight="medium" color="primary" className="!text-center">میسلار واتر گارنیر</Typography.Title>
                        <div className="flex justify-between items-center">
                            <Typography.Title level="h3" size="md" color="warning" weight="normal">کشور سازنده</Typography.Title>
                            <Typography.Title level="h5" size="md" weight="medium" color="primary">فرانسه</Typography.Title>
                        </div>
                        <div className="flex justify-between items-center">
                            <Typography.Title level="h3" size="md" color="warning" weight="normal">مقدار</Typography.Title>
                            <Typography.Title level="h5" size="md" weight="medium" color="primary">120ml</Typography.Title>
                        </div>
                        <div className="flex justify-between items-center">
                            <Typography.Title level="h3" size="md" color="warning" weight="normal">برند</Typography.Title>
                            <Typography.Title level="h5" size="md" weight="medium" color="primary">garnier</Typography.Title>
                        </div>
                        <div className="flex items-center gap-1">
                            <Typography.Text size="md" weight="semiBold" color="danger" className="!text-center">230,000</Typography.Text>
                            <Icon name="Toman"/>
                        </div>

                        <Button title="افزودن به سبد خرید" className="!mx-auto" icon="Basket"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[550px] bg-white max-h-[605px] relative image">
                        <Image src={Picture2} alt="Slider image" fill className="object-cover" quality={80}
                               priority={false}/>
                    </div>
                    <div className="info mt-2 opacity-0 max-h-0 flex flex-col gap-4">
                        <Typography.Title level="h3" size="lg" weight="medium" color="primary" className="!text-center">میسلار واتر گارنیر</Typography.Title>
                        <div className="flex justify-between items-center">
                            <Typography.Title level="h3" size="md" color="warning" weight="normal">کشور سازنده</Typography.Title>
                            <Typography.Title level="h5" size="md" weight="medium" color="primary">فرانسه</Typography.Title>
                        </div>
                        <div className="flex justify-between items-center">
                            <Typography.Title level="h3" size="md" color="warning" weight="normal">مقدار</Typography.Title>
                            <Typography.Title level="h5" size="md" weight="medium" color="primary">120ml</Typography.Title>
                        </div>
                        <div className="flex justify-between items-center">
                            <Typography.Title level="h3" size="md" color="warning" weight="normal">برند</Typography.Title>
                            <Typography.Title level="h5" size="md" weight="medium" color="primary">garnier</Typography.Title>
                        </div>
                        <div className="flex items-center gap-1">
                            <Typography.Text size="md" weight="semiBold" color="danger" className="!text-center">230,000</Typography.Text>
                            <Icon name="Toman"/>
                        </div>

                        <Button title="افزودن به سبد خرید" className="!mx-auto" icon="Basket"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[550px] bg-white max-h-[605px] relative image">
                        <Image src={Picture2} alt="Slider image" fill className="object-cover" quality={80}
                               priority={false}/>
                    </div>
                    <div className="info mt-2 opacity-0 max-h-0 flex flex-col gap-4">
                        <Typography.Title level="h3" size="lg" weight="medium" color="primary" className="!text-center">میسلار واتر گارنیر</Typography.Title>
                        <div className="flex justify-between items-center">
                            <Typography.Title level="h3" size="md" color="warning" weight="normal">کشور سازنده</Typography.Title>
                            <Typography.Title level="h5" size="md" weight="medium" color="primary">فرانسه</Typography.Title>
                        </div>
                        <div className="flex justify-between items-center">
                            <Typography.Title level="h3" size="md" color="warning" weight="normal">مقدار</Typography.Title>
                            <Typography.Title level="h5" size="md" weight="medium" color="primary">120ml</Typography.Title>
                        </div>
                        <div className="flex justify-between items-center">
                            <Typography.Title level="h3" size="md" color="warning" weight="normal">برند</Typography.Title>
                            <Typography.Title level="h5" size="md" weight="medium" color="primary">garnier</Typography.Title>
                        </div>
                        <div className="flex items-center gap-1">
                            <Typography.Text size="md" weight="semiBold" color="danger" className="!text-center">230,000</Typography.Text>
                            <Icon name="Toman"/>
                        </div>

                        <Button title="افزودن به سبد خرید" className="!mx-auto" icon="Basket"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[550px] bg-white max-h-[605px] relative image">
                        <Image src={Picture2} alt="Slider image" fill className="object-cover" quality={80}
                               priority={false}/>
                    </div>
                    <div className="info mt-2 opacity-0 max-h-0 flex flex-col gap-4">
                        <Typography.Title level="h3" size="lg" weight="medium" color="primary" className="!text-center">میسلار واتر گارنیر</Typography.Title>
                        <div className="flex justify-between items-center">
                            <Typography.Title level="h3" size="md" color="warning" weight="normal">کشور سازنده</Typography.Title>
                            <Typography.Title level="h5" size="md" weight="medium" color="primary">فرانسه</Typography.Title>
                        </div>
                        <div className="flex justify-between items-center">
                            <Typography.Title level="h3" size="md" color="warning" weight="normal">مقدار</Typography.Title>
                            <Typography.Title level="h5" size="md" weight="medium" color="primary">120ml</Typography.Title>
                        </div>
                        <div className="flex justify-between items-center">
                            <Typography.Title level="h3" size="md" color="warning" weight="normal">برند</Typography.Title>
                            <Typography.Title level="h5" size="md" weight="medium" color="primary">garnier</Typography.Title>
                        </div>
                        <div className="flex items-center gap-1">
                            <Typography.Text size="md" weight="semiBold" color="danger" className="!text-center">230,000</Typography.Text>
                            <Icon name="Toman"/>
                        </div>

                        <Button title="افزودن به سبد خرید" className="!mx-auto" icon="Basket"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[550px] bg-white max-h-[605px] relative image">
                        <Image src={Picture2} alt="Slider image" fill className="object-cover" quality={80}
                               priority={false}/>
                    </div>
                    <div className="info mt-2 opacity-0 max-h-0 flex flex-col gap-4">
                        <Typography.Title level="h3" size="lg" weight="medium" color="primary" className="!text-center">میسلار واتر گارنیر</Typography.Title>
                        <div className="flex justify-between items-center">
                            <Typography.Title level="h3" size="md" color="warning" weight="normal">کشور سازنده</Typography.Title>
                            <Typography.Title level="h5" size="md" weight="medium" color="primary">فرانسه</Typography.Title>
                        </div>
                        <div className="flex justify-between items-center">
                            <Typography.Title level="h3" size="md" color="warning" weight="normal">مقدار</Typography.Title>
                            <Typography.Title level="h5" size="md" weight="medium" color="primary">120ml</Typography.Title>
                        </div>
                        <div className="flex justify-between items-center">
                            <Typography.Title level="h3" size="md" color="warning" weight="normal">برند</Typography.Title>
                            <Typography.Title level="h5" size="md" weight="medium" color="primary">garnier</Typography.Title>
                        </div>
                        <div className="flex items-center gap-1">
                            <Typography.Text size="md" weight="semiBold" color="danger" className="!text-center">230,000</Typography.Text>
                            <Icon name="Toman"/>
                        </div>

                        <Button title="افزودن به سبد خرید" className="!mx-auto" icon="Basket"/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

    )
}
