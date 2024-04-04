'use client'
import SubHeader from "@/components/organisms/subHeader/subHeader";
import SmallProCard from "@/components/molecules/SmallProCard/SmallProCard";
import Picture from "@/images/pic2-removebg-preview.png"

export default function Favorites() {
    return (
        <div>
            <SubHeader/>
            <div className="w-[84rem] mb-[64px] mt-[100px] mx-auto max-w-[95%]">
                <div
                    className="flex flex-col justify-center items-center md:grid lg:grid-cols-3 md:grid-cols-2 gap-4 min-h-[180px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-3xl py-8 px-6 mt-[40px]">
                    <SmallProCard
                        title="فوم شستشو نوتروژینا"
                        price="280,000"
                        image={Picture}
                        description="تونر زردچوبه نیتروژینا
                        شاداب کننده ی پوست و تنظیم PH
                        ضد جوش و ضد التهاب"/>
                    <SmallProCard
                        title="فوم شستشو نوتروژینا"
                        price="280,000"
                        image={Picture}
                        description="تونر زردچوبه نیتروژینا
                        شاداب کننده ی پوست و تنظیم PH
                        ضد جوش و ضد التهاب"/>
                    <SmallProCard
                        title="فوم شستشو نوتروژینا"
                        price="280,000"
                        image={Picture}
                        description="تونر زردچوبه نیتروژینا
                        شاداب کننده ی پوست و تنظیم PH
                        ضد جوش و ضد التهاب"/>
                    <SmallProCard
                        title="فوم شستشو نوتروژینا"
                        price="280,000"
                        image={Picture}
                        description="تونر زردچوبه نیتروژینا
                        شاداب کننده ی پوست و تنظیم PH
                        ضد جوش و ضد التهاب"/>
                </div>
            </div>
        </div>
    )
}
