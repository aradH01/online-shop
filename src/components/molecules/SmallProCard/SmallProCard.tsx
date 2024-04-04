import Picture from "@/images/pic2-removebg-preview.png"
import Image from "next/image";
import {Typography} from "@/components/atoms/Typography";
import {Button} from "@/components/molecules/Button/Buttom";
import {SmallProCardProps} from "@/types/components-types";
import styled from "@emotion/styled";
import {useState} from "react";

const ActionButton = styled.button`
  width: 32px;
  height: 32px;
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
export default function SmallProCard({onClick, price, title, onDelete, description, image}: SmallProCardProps) {
    const [count, setCount] = useState<number>(1);
    return (
        <div className="max-w-[410px] border border-solid border-gray-100 p-8 rounded-2xl bg-glass-bg">
            <div className="relative w-full h-[150px]">
                <Image src={Picture} alt="" fill/>
            </div>
            <div className="flex flex-col items-start gap-[10px]">
                <div className="flex flex-col gap-[10px] xsm:items-start items-center">
                    <Typography.Title level="h6" size="md" weight="semiBold" color="black">
                        {title}
                    </Typography.Title>
                    <Typography.Paragraph size="sm" weight="normal" className="!text-right" color="grayMedium">
                        {
                            description
                        }
                    </Typography.Paragraph>
                    <Typography.Paragraph size="sm" weight="bold" color="primary"
                                          className="whitespace-nowrap"> {price} T</Typography.Paragraph>
                </div>
                <div
                    className="flex overflow-hidden flex-row gap-2 mx-auto bg-white rounded-[15px] w-fit items-center">
                    <ActionButton onClick={() => setCount(prevState => prevState + 1)}>
                        <Typography.Paragraph size="sm" weight="semiBold" color="black">+</Typography.Paragraph>
                    </ActionButton>
                    <Typography.Text size="lg" weight="semiBold" color="black">{count}</Typography.Text>
                    <ActionButton disabled={count === 1} onClick={() => setCount(prevState => prevState - 1)}>
                        <Typography.Paragraph size="sm" weight="semiBold" color="black">-</Typography.Paragraph>
                    </ActionButton>
                </div>
                <div className="flex xsm:flex-row flex-col-reverse xsm:mt-0 mt-3 w-full items-center gap-2">
                    <Button onClick={onDelete} title="حذف" icon="DeleteV2" outlined/>
                    <Button onClick={onClick} title="اضافه به سبد خرید" icon="Basket" className="!w-full"/>
                </div>

            </div>
        </div>
    )
}
