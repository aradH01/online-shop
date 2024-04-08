'use client'

import HomeHeroSlider from "@/components/pages/home/components/Slider/HeroSlider";
import NewProducts from "@/components/pages/home/sections/NewProducts";
import OfferSection from "@/components/pages/home/sections/OfferSection";
import Articles from "@/components/pages/home/sections/articles";

export default function Home() {

    return (
        <div>
            <HomeHeroSlider/>
            <div className="w-[84rem] mb-[64px] mt-[100px] mx-auto max-w-[95%]">
                <NewProducts/>
                <OfferSection/>
                <Articles/>
            </div>
        </div>

    )
}
