import Image from "next/image";
import Pic from "@/images/pic6.jpg"
import {Typography} from "@/components/atoms/Typography";
import ImagesLabel from "@/components/atoms/ImagesLabel/ImagesLabel";
import AddButtons from "@/components/atoms/addButtons/addButtons";
import {Button} from "@/components/molecules/Button/Buttom";
import {Icon} from "@/components/atoms/Icon";

export default function SmailProCard() {
    return (
        <div className="flex flex-row-reverse max-w-[500px] bg-[#F5F5F7] rounded-[12px] px-[12px] py-8 h-[382px] max-h-[390px]">
            <div className="w-[40%] flex flex-col gap-8 justify-between items-center">
                <div className="w-full max-w-[160px] h-[250px] relative">
                    <Image src={Pic} alt="" fill className="rounded-[8px] object-cover" quality="100"/>
                </div>
                <AddButtons/>
            </div>
            <div className="w-[55%] flex flex-col justify-between gap-8 items-center">
                <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-row gap-[10px] items-center">
                        <Typography.Title level="h6" size="lg" weight="semiBold" color="black">
                            فوم شستشو نوتروژینا
                        </Typography.Title>

                    </div>
                    <Typography.Paragraph size="sm" weight="normal" color="grayMedium">
                        تونر زردچوبه نیتروژینا
                        شاداب کننده ی پوست و تنظیم PH
                        ضد جوش و ضد التهاب
                    </Typography.Paragraph>
                    <ImagesLabel title="پوست مختلط"/>
                    <Typography.Paragraph size="lg" weight="bold" color="darkDanger"
                                          className="whitespace-nowrap flex items-center gap-1"> 280,000 <Icon name="Toman"/></Typography.Paragraph>
                </div>

                <Button className="!w-full" title="اضافه به سبد خرید"/>
            </div>
        </div>
    )
}
