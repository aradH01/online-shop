import {Typography} from "@/components/atoms/Typography";
import {Button} from "@/components/molecules/Button/Buttom";
import {Icon} from "@/components/atoms/Icon";
import AddAddress from "@/components/pages/confirmProducts/modals/AddAddress";
import {useState} from "react";
import ExistAddresses from "@/components/pages/confirmProducts/modals/ExistAddresses";

export default function ConfirmProducts(){
    const [ShowAddressModal, setShowAddressModal] = useState<boolean>(false)
    const [showExistAddresses, setShowExistAddresses] = useState<boolean>(false)
    return(
        <div className="w-[84rem] mb-[64px] mt-[100px] mx-auto max-w-[95%]">
            <Typography.Title level="h1" weight="bold" size="lg" className="!text-right mb-6">تایید آدرس و خرید</Typography.Title>
            <div>
                <div className="bg-[#E2E2E4] w-[70%] gap-3 justify-between items-center min-h-[180px]  flex shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-3xl px-6 mt-[60px]">
                   <div className="flex flex-row-reverse items-center gap-3">
                       <div className="flex flex-col items-start gap-3">
                           <Typography.Text size="sm" weight="normal" color="grayMedium">آدرس تحویل سفارش</Typography.Text>
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
                </div>
                <ExistAddresses opened={showExistAddresses} close={()=>setShowExistAddresses(false)} onClick={()=>{
                    setShowExistAddresses(false)
                    setShowAddressModal(true)
                }}/>
                <AddAddress opened={ShowAddressModal} close={()=>setShowAddressModal(false)}/>
            </div>
        </div>
    )
}
