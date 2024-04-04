'use client'
import SubHeader from "@/components/organisms/subHeader/subHeader";
import {Typography} from "@/components/atoms/Typography";
import {Button} from "@/components/molecules/Button/Buttom";
import {useState} from "react";
import AddAddress from "@/components/pages/confirmProducts/modals/AddAddress";
import AddressCard from "@/components/pages/addresses/components/addressCard";

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
                    className="bg-[#E2E2E4] backdrop-blur-sm mt-8 gap-16 justify-between items-center min-h-[180px] py-6 flex flex-col lg:grid lg:grid-cols-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-3xl px-6 ">
                    <AddressCard
                        address={{city: "مرند", province: "آذربایجان شرقی", location: "یالدور، خیابان شریعتی شرقی، بن بست ارشاد"}}
                        phone="09142563258"
                        zipCode="5418856145"
                        fullName="آراد حقیقی"
                        addAddress={()=>setAddAddressModal(true)}
                    />
                    <AddressCard
                        address={{city: "مرند", province: "آذربایجان شرقی", location: "یالدور، خیابان شریعتی شرقی، بن بست ارشاد"}}
                        phone="09142563258"
                        zipCode="5418856145"
                        fullName="آراد حقیقی"
                        addAddress={()=>setAddAddressModal(true)}
                    />
                    <AddressCard
                        address={{city: "مرند", province: "آذربایجان شرقی", location: "یالدور، خیابان شریعتی شرقی، بن بست ارشاد"}}
                        phone="09142563258"
                        zipCode="5418856145"
                        fullName="آراد حقیقی"
                        addAddress={()=>setAddAddressModal(true)}
                    />

                </div>
                <AddAddress opened={addAddressModal} close={()=>setAddAddressModal(false)}/>
            </div>
        </div>
    )
}
