import Link from "next/link";
import {Typography} from "@/components/atoms/Typography";
import Image from "next/image";
import {NewProCardProps} from "@/types/components-types";
import {Icon} from "@/components/atoms/Icon";

export default function NewProductCard({image,onClick,price,title}:NewProCardProps){
    return(
        <Link href="/" className="border border-solid border-gray-300 rounded-br-[8px] rounded-bl-[8px]">
            <div>
                <div className="relative bg-gray-100 h-[200px] w-full">
                        <Image src={image} alt="" fill className="object-contain"/>
                </div>
                <Typography.Title level="h5" size="md" weight="medium" color="primary" className="mt-3 mb-2 pr-3 !text-right">{title}</Typography.Title>
                <div className="flex items-center justify-between px-3 pb-3">
                    <div className="rounded-full p-2 flex items-center cursor-pointer justify-center bg-gray-200 w-fit">
                        <Icon name="Basket" className="w-6 h-6"/>
                    </div>
                    <Typography.Text size="sm" weight="semiBold" color="danger">{price} T</Typography.Text>
                </div>
            </div>
        </Link>
    )
}
