import {Typography} from "@/components/atoms/Typography";
import {Icon} from "@/components/atoms/Icon";
import {AddressCardProps} from "@/types/components-types";

export default function AddressCard({address,fullName,addAddress,zipCode,phone,deleteAddress}:AddressCardProps){

    return(
        <div className="flex max-w-[450px] backdrop-blur-sm items-end justify-between">
            <div className="flex flex-col items-start gap-3">
                <Typography.Paragraph size="sm" weight="semiBold" color="primary">{address.location}</Typography.Paragraph>
                <ul className="flex flex-col gap-4 items-start mt-4">
                    <li className="flex items-center gap-2">
                        <Icon name="Location4" className="w-6 h-6"/>
                        <Typography.Text size="xsm" weight="medium" color="grayMedium">{address.city} {address.province}</Typography.Text>
                    </li>
                    <li className="flex items-center gap-2">
                        <Icon name="Mail" className="w-5 h-5"/>
                        <Typography.Text size="xsm" weight="medium" color="grayMedium">{zipCode}</Typography.Text>
                    </li>
                    <li className="flex items-center gap-2">
                        <Icon name="Mobile" className="w-6 h-6"/>
                        <Typography.Text size="xsm" weight="medium" color="grayMedium">{phone}</Typography.Text>
                    </li>
                    <li className="flex items-center gap-2">
                        <Icon name="ProfileV2" className="w-6 h-6"/>
                        <Typography.Text size="xsm" weight="medium" color="grayMedium">{fullName}</Typography.Text>
                    </li>
                </ul>
            </div>
            <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-light-glass-bg rounded-2xl flex gap-5 items-center p-2">
                <Icon name="Edit" onClick={addAddress} className="w-6 h-6 cursor-pointer hover:scale-125 transition-all"/>
                <Icon name="DeleteV2" onClick={deleteAddress} className="w-8 h-8 cursor-pointer hover:scale-125 transition-all"/>
            </div>
        </div>
    )
}
