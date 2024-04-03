'use client'
import SubHeader from "@/components/organisms/subHeader/subHeader";
import {Typography} from "@/components/atoms/Typography";
import {Icon} from "@/components/atoms/Icon";
import {useState} from "react";
import EditInfoModal from "@/components/pages/dashboard/modals/EditInfoModal";

export default function Dashboard() {
    const [showModal, setShowModal] = useState<{show:boolean , index:number}>({show:false , index:0});
    return (
        <div>
            <SubHeader className="sticky top-0"/>
            <div className="w-[84rem] mb-[64px] mt-[100px] mx-auto max-w-[95%]">
                <div
                    className="bg-[#E2E2E4] gap-16 justify-between items-center min-h-[180px] py-6 flex flex-col lg:grid lg:grid-cols-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-3xl px-6 ">
                        <div className="flex max-w-[450px] items-center justify-between">
                            <div className="flex flex-col items-start gap-3">
                                <Typography.Paragraph size="sm" weight="medium" color="grayMedium">نام و نام خانوادگی</Typography.Paragraph>
                                <Typography.Paragraph size="md" weight="semiBold" color="primary">علیرضا حقیقی</Typography.Paragraph>
                            </div>
                            <Icon name="Edit" onClick={()=>setShowModal({show:true , index:1})}/>
                        </div>
                    <div className="flex items-center max-w-[450px] justify-between">
                            <div className="flex flex-col items-start gap-3">
                                <Typography.Paragraph size="sm" weight="medium" color="grayMedium">نام کاربری</Typography.Paragraph>
                                <Typography.Paragraph size="md" weight="semiBold" color="primary">Arad</Typography.Paragraph>
                            </div>
                            <Icon name="Edit" onClick={()=>setShowModal({show:true , index:2})}/>
                        </div>
                    <div className="flex items-center max-w-[450px] justify-between">
                            <div className="flex flex-col items-start gap-3">
                                <Typography.Paragraph size="sm" weight="medium" color="grayMedium">شماره موبایل</Typography.Paragraph>
                                <Typography.Paragraph size="md" weight="semiBold" color="primary">09143256458</Typography.Paragraph>
                            </div>
                            <Icon name="Edit" onClick={()=>setShowModal({show:true , index:4})}/>
                        </div>
                    <div className="flex items-center max-w-[450px] justify-between">
                            <div className="flex flex-col items-start gap-3">
                                <Typography.Paragraph size="sm" weight="medium" color="grayMedium">ایمیل</Typography.Paragraph>
                                <Typography.Paragraph size="md" weight="semiBold" color="primary">haghighy@test.com</Typography.Paragraph>
                            </div>
                            <Icon name="Edit" onClick={()=>setShowModal({show:true , index:3})}/>
                        </div>
                    <div className="flex items-center max-w-[450px] justify-between">
                            <div className="flex flex-col items-start gap-3">
                                <Typography.Paragraph size="sm" weight="medium" color="grayMedium">رمز عبور</Typography.Paragraph>
                                <Typography.Paragraph size="md" weight="semiBold" color="primary">•••••••</Typography.Paragraph>
                            </div>
                            <Icon name="Edit" onClick={()=>setShowModal({show:true , index:5})}/>
                        </div>
                </div>
                <EditInfoModal opened={showModal.show} close={()=>setShowModal({show:false , index:0})} index={showModal.index}/>
            </div>
        </div>
    )
}
