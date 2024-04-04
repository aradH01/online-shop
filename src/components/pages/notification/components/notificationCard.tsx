import {Typography} from "@/components/atoms/Typography";
import {NotificationCardProps} from "@/types/components-types";
import {Icon} from "@/components/atoms/Icon";
import Link from "next/link";


export default function NotificationCard({title,date,onClick}:NotificationCardProps){
    return(
        <div className="w-full flex flex-col justify-between min-h-[150px] bg-soft-glass-bg py-8 px-6 border border-solid border-gray-100 rounded-2xl">
            <div className="flex flex-row items-center gap-3">
                <div className="bg-green-900 p-2 rounded-full flex items-center justify-center w-fit">
                    <Icon name="MegaPhone"/>
                </div>
                <Typography.Paragraph size="md" weight="medium" color="primary">{title}</Typography.Paragraph>
            </div>
               <div className="flex items-center justify-between">
                   <Link href="/" className="flex items-center gap-2">
                       <Typography.Text size="sm" weight="medium" color="componentPrimary">جزئیات بیشتر</Typography.Text>
                       <Icon name="Arrow" className="rotate-90"/>
                   </Link>
                   <Typography.Text size="xsm" color="grayMedium" weight="normal">{date}</Typography.Text>
               </div>
        </div>
    )
}
