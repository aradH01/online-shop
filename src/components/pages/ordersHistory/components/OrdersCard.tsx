import {Icon} from "@/components/atoms/Icon";
import {Typography} from "@/components/atoms/Typography";
import Link from "next/link";
import {Button} from "@/components/molecules/Button/Buttom";
import Image from "next/image";
import {ProgressBar} from "@/components/atoms/progressBar/progressBar";
import styled from "@emotion/styled";
import {OrderCardsProps} from "@/types/components-types";

const Wrapper=styled.div`

`
export default function OrdersCard({order_at,order_code,id,image,price,step}:OrderCardsProps){
    return(
        <Wrapper className="border shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-3 px-8 rounded-3xl bg-glass-bg">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Icon name="Loading" className="[&>path]:fill-green-700 w-6 h-6"/>
                    <Typography.Text size="md" weight="semiBold" color="primary">{step}</Typography.Text>
                </div>
                <Link href={`/order-history/order?id=${id}`}>
                    <Button title="جزئیات سفارش" icon="LeftArrow" className="[&>div>svg>path]:fill-black [&>div>svg]:h-3 [&>div>svg]:w-3 " text/>
                </Link>
            </div>
            <div className="flex items-center gap-8">
                <Typography.Text size="sm" weight="medium" color="grayMedium">{order_at}</Typography.Text>
                <ul className="list-disc flex gap-8">
                    <li>
                        <Typography.Text size="sm" weight="normal" color="grayMedium"> کد سفارش </Typography.Text>
                        <Typography.Text size="sm" weight="semiBold" color="primary">{order_code}</Typography.Text>
                    </li>
                    <li>
                        <Typography.Text size="sm" weight="normal" color="grayMedium">مبلغ </Typography.Text>
                        <Typography.Text size="sm" weight="semiBold" color="primary">{price}</Typography.Text>
                    </li>
                </ul>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex flex-wrap gap-3 items-center mt-8">
                    {image?.map(image=>(
                        <div className="w-24 h-24 relative" key={image.id}>
                            <Image src={image.image} alt="product photo" fill className="object-cover"/>
                        </div>
                    ))}
                </div>
                <div className="w-[30%]">
                    <Typography.Paragraph className="mb-4 !text-[13px] !text-right" weight="semiBold" color="success">{step}</Typography.Paragraph>
                    <ProgressBar width={step==="تایید شده" ? 25 : step==="درحال آماده سازی" ? 50 :step==="ارسال شده" ? 75 : step==="تحویل داده شده" ? 100 : 0}/>
                </div>
            </div>
        </Wrapper>
    )
}
