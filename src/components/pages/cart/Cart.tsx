'use client'
import { Typography } from "@/components/atoms/Typography";
import {HorizontalTable, IHorizontalTable} from "@/components/organisms/HorizontalTable/HorizontalTable";
import {useMemo, useState} from "react";
import Picture2 from "@/images/pic4.jpg";
import Image, {StaticImageData} from "next/image";
import styled from "@emotion/styled";
import {Icon} from "@/components/atoms/Icon";
import {Button} from "@/components/molecules/Button/Buttom";
import Link from "next/link";
import {Path} from "@/constants/enums";

const Table=styled.div`
  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent;
    border-radius: 10px;
    margin-top: 1px;
  }

  /* Handle */

  ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.components.lightPrimary};
    border-radius: 16px;
  }

  /* Handle on hover */

  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme}) => theme.components.lightPrimary};
  }
    
`
const ActionButton = styled.button`
  width: 24px;
  height: 24px;
  background: transparent;
  color: ${({theme}) => theme.font.black};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease-out 500ms;

  &:disabled {
    border: none !important;
    cursor: not-allowed !important;
    background: ${({theme}) => theme.components.disabled} !important;
    filter: blur(1px);
    transition: all ease-out 500ms;
  }

  &:hover {
    box-shadow: 4px 4px 8px 2px #00000040 inset;
  }
`
interface IData{
    id:number
    product:{image:StaticImageData , name:string , brand:string}
    price:string
    count:number
    finalFee:string
}
type DataType=IData[]
export default function Cart(){
    const [count, setCount] = useState<number>(1)
    const data:DataType=[
        {id:1 ,  product: {name:"فوم شستشو نوتروژینا" , image:Picture2 , brand:"نورتروژینا"}  , price:"2500000" , count:count , finalFee:"5000000"},
        {id:2 ,  product: {name:"فوم شستشو نوتروژینا" , image:Picture2 , brand:"نورتروژینا"}  , price:"2500000" , count:count , finalFee:"5000000"},
        {id:3 ,  product: {name:"فوم شستشو نوتروژینا" , image:Picture2 , brand:"نورتروژینا"}  , price:"2500000" , count:count , finalFee:"5000000"},
        {id:4  ,  product: {name:"فوم شستشو نوتروژینا" , image:Picture2 , brand:"نورتروژینا"}  , price:"2500000" , count:count , finalFee:"5000000"},
    ]

    const TableColumns: IHorizontalTable<IData>['columns'] = useMemo(
        () => [
            {
                key: "product",
                title: 'کالا',
                render: (column, item) => {
                    return (
                       <div className="flex items-center gap-2">
                           <div className="w-[200px] max-w-[205px] h-[140px] max-h-[150px] relative">
                               <Image
                                   src={item.product.image}
                                   alt="ProfileImage"
                                   fill
                                   className="object-contain"
                               />
                           </div>
                           <div>
                                <Typography.Paragraph size="md" weight="medium" color="primary" className="!text-center">{item.product.name}</Typography.Paragraph>
                               <ul className="!text-right list-disc">
                                   <li>
                                       <Typography.Paragraph weight="medium" color="primary" className="!text-[12px] !text-right">{item.product.brand}</Typography.Paragraph>
                                   </li>
                                   <li>
                                       <Typography.Paragraph weight="medium" color="primary" className="!text-[12px] !text-right">تضمین اصالت کالا</Typography.Paragraph>
                                   </li>
                               </ul>
                           </div>
                       </div>
                    );
                },
            },
            {
                key: 'price',
                title: 'قیمت',
                render: (column, item) => {
                    return (
                        <Typography.Paragraph size="sm" weight="normal" color="primary" className="!text-center">{item.price}</Typography.Paragraph>
                    );
                },
            },
            {
                key: 'count',
                title: 'تعداد',
                render: (column, item) => {
                    return (
                        <div>
                            <div className="flex items-center gap-2 px-2 h-[48px]">
                                <ActionButton onClick={() => setCount(prevState => prevState + 1)}>
                                    <Typography.Paragraph size="sm" weight="semiBold" color="black">+</Typography.Paragraph>
                                </ActionButton>
                                <Typography.Text size="lg" weight="semiBold" color="black">{item.count}</Typography.Text>
                                <ActionButton disabled={count === 1} onClick={() => setCount(prevState => prevState - 1)}>
                                    <Typography.Paragraph size="sm" weight="semiBold" color="black">-</Typography.Paragraph>
                                </ActionButton>
                            </div>
                        </div>
                    );
                },
            },
            {
                key: 'finalFee',
                title: 'جمع کل',
                render: (column, item) => {
                    return (
                        <Typography.Paragraph size="sm" weight="normal" color="primary" className="!text-center">
                            {item.finalFee}
                        </Typography.Paragraph>
                    );
                },
            },
            {
                key: '',
                title: '',
                render: (column, item) => {
                    return (
                       <Icon name="Delete" className="w-6 h-6"/>
                    );
                },
            },
        ],
        []
    );
    return(
        <div className="w-[84rem] mb-[64px] mt-[100px] mx-auto max-w-[95%]">
            <Typography.Title level="h1" weight="bold" size="lg" className="!text-right mb-6">سبد خرید</Typography.Title>
             <Table className="max-h-[400px] w-full overflow-auto">
                 <HorizontalTable columns={TableColumns} data={data}/>
             </Table>
            <div className="bg-[#E2E2E4] w-[70%] mx-auto items-center min-h-[180px] justify-around flex shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-3xl px-6 mt-[60px]">
                <div className="flex flex-col items-start gap-3 w-1/2">
                    <div className="flex items-center justify-between w-[50%]">
                        <Typography.Paragraph size="sm" weight="medium" color="grayMedium">قیمت کالاها</Typography.Paragraph>
                        <Typography.Paragraph size="sm" weight="medium" color="grayMedium">3,351,000</Typography.Paragraph>
                    </div>
                    <div className="flex items-center justify-between w-[50%]">
                        <Typography.Paragraph size="sm" weight="medium" color="primary">جمع سبد خرید</Typography.Paragraph>
                        <Typography.Paragraph size="sm" weight="medium" color="primary">2,950,000</Typography.Paragraph>
                    </div>
                    <div className="flex items-center justify-between w-[50%]">
                        <Typography.Paragraph size="sm" weight="medium" color="danger">سود شما از این خرید</Typography.Paragraph>
                        <Typography.Paragraph size="sm" weight="medium" color="danger">450,000</Typography.Paragraph>
                    </div>
                </div>
               <Link href={Path.ConfirmProducts}>
                   <Button title="تایید سفارش" />
               </Link>
            </div>
        </div>
    )
}
