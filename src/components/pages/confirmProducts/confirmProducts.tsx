'use client'
import {Typography} from "@/components/atoms/Typography";
import {Button} from "@/components/molecules/Button/Buttom";
import {Icon} from "@/components/atoms/Icon";
import AddAddress from "@/components/pages/confirmProducts/modals/AddAddress";
import {useState} from "react";
import ExistAddresses from "@/components/pages/confirmProducts/modals/ExistAddresses";
import Link from "next/link";
import Image from "next/image";
import Picture2 from "@/images/pic4.jpg";
import {Path} from "@/constants/enums";

export default function ConfirmProducts(){
    const [ShowAddressModal, setShowAddressModal] = useState<boolean>(false)
    const [showExistAddresses, setShowExistAddresses] = useState<boolean>(false)
    return(
        <div className="w-[84rem] mb-[64px] mt-[100px] mx-auto max-w-[95%]">
            <div className="flex items-center gap-4 mb-6">
            <Link href={Path.Cart}>
                <Icon name="UpArrow" className="rotate-90"/>
            </Link>
            <Typography.Title level="h1" weight="bold" size="lg" className="!text-right">تایید آدرس و خرید</Typography.Title>
        </div>
            <div className="flex justify-between items-start mt-[60px]">
                <div className="flex flex-col  w-[60%]">
                    <div className="bg-[#E2E2E4] gap-3 justify-between items-center min-h-[180px]  flex shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-3xl px-6 ">
                        <div className="flex flex-row-reverse items-center gap-3">
                            <div className="flex flex-col items-start gap-3">
                                <Typography.Text size="sm" weight="medium" color="grayMedium">آدرس تحویل سفارش</Typography.Text>
                                <div className="flex flex-col items-start gap-3">
                                    <div className="flex items-center gap-2">

                                        <Typography.Paragraph size="sm" weight="medium" color="primary">یالدور، خیابان شریعتی شرقی، بن بست ارشاد</Typography.Paragraph>
                                    </div>
                                    <Typography.Paragraph size="sm" weight="medium" color="grayMedium">Arad haghighy</Typography.Paragraph>
                                </div>
                            </div>
                            <Icon name="LocationV2" className="w-6 h-6"/>
                        </div>
                        <div className="flex items-end gap-3">
                            <Button title="تغییر یا ویرایش آدرس" text className="[&>div>span]:!font-bold !p-0 !h-fit" onClick={()=>setShowExistAddresses(true)}/>
                            <Icon name="LeftArrow" className="h-4 w-4"/>
                        </div>
                        <ExistAddresses opened={showExistAddresses} close={()=>setShowExistAddresses(false)} onClick={()=>{
                            setShowExistAddresses(false)
                            setShowAddressModal(true)
                        }}/>
                        <AddAddress opened={ShowAddressModal} close={()=>setShowAddressModal(false)}/>
                    </div>
                    <div className="bg-[#E2E2E4] flex flex-col gap-4 min-h-[180px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-3xl py-8 px-6 mt-[40px]">
                        <div className="flex items-center gap-3">
                            <Icon name="Truck" className="w-14 h-14"/>
                            <Typography.Text size="sm" weight="medium" color="grayMedium">ارسال کالا های سفارشی</Typography.Text>
                        </div>
                        <div className="w-full flex flex-wrap items-center gap-4">
                            <div className="max-w-[90px] items-center gap-4">
                                <div className="flex gap-2 flex-col items-center">
                                    <div className="w-[90px] h-[90px] max-h-[95px] relative">
                                        <Image src={Picture2} alt="Slider image" fill className="rounded-[8px] object-cover" quality={80}
                                               priority={false}/>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Typography.Title level="h6" className="!text-[12px] !text-center" weight="medium" color="black">
                                            فوم شستشو نوتروژینا
                                        </Typography.Title>
                                        <Typography.Title level="h6" className="!text-[12px]" weight="medium" color="black">
                                            2 عدد
                                        </Typography.Title>
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-[90px] items-center gap-4">
                                <div className="flex gap-2 flex-col items-center">
                                    <div className="w-[90px] h-[90px] max-h-[95px] relative">
                                        <Image src={Picture2} alt="Slider image" fill className="rounded-[8px] object-cover" quality={80}
                                               priority={false}/>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Typography.Title level="h6" className="!text-[12px] !text-center" weight="medium" color="black">
                                            فوم شستشو نوتروژینا
                                        </Typography.Title>
                                        <Typography.Title level="h6" className="!text-[12px]" weight="medium" color="black">
                                            2 عدد
                                        </Typography.Title>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-[35%]">
                    <div className="bg-[#E2E2E4] w-full flex justify-between flex-col gap-4 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-3xl py-8 px-6">
                        <div className="flex justify-between items-center">
                            <Typography.Text size="sm" weight="medium" color="primary">قیمت کالا</Typography.Text>
                            <Typography.Text size="sm" weight="medium" color="primary">
                                {(12500000).toLocaleString()}</Typography.Text>
                        </div>
                        <div className="flex justify-between items-center border-y border-gray-400  border-solid py-6">
                            <Typography.Text size="sm" weight="medium" color="primary">هزینه ارسال</Typography.Text>
                            <Typography.Text size="sm" weight="medium" color="primary">{(40000).toLocaleString()}</Typography.Text>
                        </div>
                        <div className="flex justify-between items-center">
                            <Typography.Text size="sm" weight="medium" color="primary">قابل پرداخت</Typography.Text>
                            <Typography.Text size="sm" weight="medium" color="primary">{(1290000).toLocaleString()}</Typography.Text>
                        </div>
                        <Button title="تایید پرداخت" className="!w-[90%] mx-auto mt-4"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
