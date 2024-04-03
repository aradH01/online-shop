'use client'
import SubHeader from "@/components/organisms/subHeader/subHeader";
import {Typography} from "@/components/atoms/Typography";
import {Icon} from "@/components/atoms/Icon";
import {Button} from "@/components/molecules/Button/Buttom";
import {useState} from "react";
import AddAddress from "@/components/pages/confirmProducts/modals/AddAddress";

export default function Addresses(){
    const [addAddressModal, setAddAddressModal] = useState(false)
    return(
        <div>
            <SubHeader className="sticky top-0"/>
            <div className="w-[84rem] mb-[64px] mt-[100px] mx-auto max-w-[95%]">
               <div className="flex items-center justify-between">
                   <Typography.Title level="h1" weight="bold" size="lg" className="!text-right">آدرس ها</Typography.Title>
                   <Button title="ثبت آدرس جدید" onClick={()=>setAddAddressModal(true)}/>
               </div>
                <div
                    className="bg-[#E2E2E4] mt-8 gap-16 justify-between items-center min-h-[180px] py-6 flex flex-col lg:grid lg:grid-cols-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-3xl px-6 ">
                    <div className="flex max-w-[450px] items-end justify-between">
                        <div className="flex flex-col items-start gap-3">
                            <Typography.Paragraph size="sm" weight="semiBold" color="primary">یالدور، خیابان شریعتی شرقی، بن بست ارشاد</Typography.Paragraph>
                            <ul className="flex flex-col gap-4 items-start mt-4">
                                <li className="flex items-center gap-2">
                                    <Icon name="Location4" className="w-6 h-6"/>
                                    <Typography.Text size="xsm" weight="medium" color="grayMedium">آذربایجان شرقی ، مرند</Typography.Text>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon name="Mail" className="w-5 h-5"/>
                                    <Typography.Text size="xsm" weight="medium" color="grayMedium">5418856145</Typography.Text>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon name="Mobile" className="w-6 h-6"/>
                                    <Typography.Text size="xsm" weight="medium" color="grayMedium">09142563258</Typography.Text>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon name="ProfileV2" className="w-6 h-6"/>
                                    <Typography.Text size="xsm" weight="medium" color="grayMedium">آراد حقیقی</Typography.Text>
                                </li>
                            </ul>
                        </div>
                        <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl flex gap-5 items-center p-3">
                            <Icon name="Edit" onClick={()=>setAddAddressModal(true)} className="w-6 h-6 cursor-pointer hover:scale-125 transition-all"/>
                            <Icon name="DeleteV2" onClick={()=>{}} className="w-8 h-8 cursor-pointer hover:scale-125 transition-all"/>
                        </div>
                    </div>
                    <div className="flex max-w-[450px] items-end justify-between">
                        <div className="flex flex-col items-start gap-3">
                            <Typography.Paragraph size="sm" weight="semiBold" color="primary">یالدور، خیابان شریعتی شرقی، بن بست ارشاد</Typography.Paragraph>
                            <ul className="flex flex-col gap-4 items-start mt-4">
                                <li className="flex items-center gap-2">
                                    <Icon name="Location4" className="w-6 h-6"/>
                                    <Typography.Text size="xsm" weight="medium" color="grayMedium">آذربایجان شرقی ، مرند</Typography.Text>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon name="Mail" className="w-5 h-5"/>
                                    <Typography.Text size="xsm" weight="medium" color="grayMedium">5418856145</Typography.Text>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon name="Mobile" className="w-6 h-6"/>
                                    <Typography.Text size="xsm" weight="medium" color="grayMedium">09142563258</Typography.Text>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon name="ProfileV2" className="w-6 h-6"/>
                                    <Typography.Text size="xsm" weight="medium" color="grayMedium">آراد حقیقی</Typography.Text>
                                </li>
                            </ul>
                        </div>
                        <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl flex gap-5 items-center p-3">
                            <Icon name="Edit" onClick={()=>setAddAddressModal(true)} className="w-6 h-6 cursor-pointer hover:scale-125 transition-all"/>
                            <Icon name="DeleteV2" onClick={()=>{}} className="w-8 h-8 cursor-pointer hover:scale-125 transition-all"/>
                        </div>
                    </div>
                    <div className="flex max-w-[450px] items-end justify-between">
                        <div className="flex flex-col items-start gap-3">
                            <Typography.Paragraph size="sm" weight="semiBold" color="primary">یالدور، خیابان شریعتی شرقی، بن بست ارشاد</Typography.Paragraph>
                            <ul className="flex flex-col gap-4 items-start mt-4">
                                <li className="flex items-center gap-2">
                                    <Icon name="Location4" className="w-6 h-6"/>
                                    <Typography.Text size="xsm" weight="medium" color="grayMedium">آذربایجان شرقی ، مرند</Typography.Text>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon name="Mail" className="w-5 h-5"/>
                                    <Typography.Text size="xsm" weight="medium" color="grayMedium">5418856145</Typography.Text>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon name="Mobile" className="w-6 h-6"/>
                                    <Typography.Text size="xsm" weight="medium" color="grayMedium">09142563258</Typography.Text>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon name="ProfileV2" className="w-6 h-6"/>
                                    <Typography.Text size="xsm" weight="medium" color="grayMedium">آراد حقیقی</Typography.Text>
                                </li>
                            </ul>
                        </div>
                        <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl flex gap-5 items-center p-3">
                            <Icon name="Edit" onClick={()=>setAddAddressModal(true)} className="w-6 h-6 cursor-pointer hover:scale-125 transition-all"/>
                            <Icon name="DeleteV2" onClick={()=>{}} className="w-8 h-8 cursor-pointer hover:scale-125 transition-all"/>
                        </div>
                    </div>
                </div>
                <AddAddress opened={addAddressModal} close={()=>setAddAddressModal(false)}/>
            </div>
        </div>
    )
}
