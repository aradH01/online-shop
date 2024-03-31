import Image from "next/image";
import Pic from "@/images/pic6.jpg"
import {Typography} from "@/components/atoms/Typography";
import ImagesLabel from "@/components/atoms/ImagesLabel/ImagesLabel";
import AddButtons from "@/components/atoms/addButtons/addButtons";
import styled from "@emotion/styled";
import {Button} from "@/components/molecules/Button/Buttom";
import {useState} from "react";
import {Icon} from "@/components/atoms/Icon";
import {addClass} from "@/utils/classNames";

const StyledButton = styled.button`
  border: 0;
  border-radius: 12px;
  height: 48px;
  background: ${({theme}) => theme.components.primary};
  color: ${({theme}) => theme.font.white};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 500ms ease all;
  width: fit-content;
  padding: 0 32px;

`
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
export default function ProductCard() {
    return (
        <div className="flex gap-12 justify-center mt-[200px]">
            <CardOne/>
            <CardTwo/>
        </div>
    )
}

function CardOne() {
    return (
        <div className="flex flex-row-reverse max-w-[500px] bg-[#F5F5F7] rounded-[12px] px-[12px] py-8 h-[382px] max-h-[390px]">
            <div className="w-[40%] flex flex-col gap-8 justify-between items-center">
                <div className="w-full max-w-[160px] h-[250px] relative">
                    <Image src={Pic} alt="" fill className="rounded-[8px] object-cover" quality="100"/>
                </div>
                <AddButtons/>
            </div>
            <div className="w-[55%] flex flex-col justify-between gap-8 items-center">
                <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-row gap-[10px] items-center">
                        <Typography.Title level="h6" size="lg" weight="semiBold" color="black">
                            فوم شستشو نوتروژینا
                        </Typography.Title>
                        <Typography.Paragraph size="lg" weight="bold" color="primary"
                                              className="whitespace-nowrap"> 280,000 T</Typography.Paragraph>
                    </div>
                    <Typography.Paragraph size="sm" weight="normal" color="grayMedium">
                        تونر زردچوبه نیتروژینا
                        شاداب کننده ی پوست و تنظیم PH
                        ضد جوش و ضد التهاب
                    </Typography.Paragraph>
                    <ImagesLabel title="پوست مختلط"/>
                </div>

                <Button className="!w-full" title="اضافه به سبد خرید"/>
            </div>
        </div>
    )
}

function CardTwo() {
    const [count, setCount] = useState<number>(1);
    const [liked, setLiked] = useState<boolean>(false)
    return (
        <div className="bg-[#16625b] pb-4 max-w-[450px] rounded-[35px]">
            <div className="h-[500px] relative">
                <div className="right-0 bg-[#184D47] rounded-tr-[35px] h-[370px] w-[90%] absolute rounded-bl-[55px]">
                    <div
                        className="flex overflow-hidden flex-col bg-white rounded-[15px] w-fit items-center bottom-0 -translate-y-[80%] translate-x-[-50%] left-0 absolute">
                        <ActionButton onClick={() => setCount(prevState => prevState + 1)}>
                            <Typography.Paragraph size="sm" weight="semiBold" color="black">+</Typography.Paragraph>
                        </ActionButton>
                        <Typography.Text size="lg" weight="semiBold" color="black">{count}</Typography.Text>
                        <ActionButton disabled={count === 1} onClick={() => setCount(prevState => prevState - 1)}>
                            <Typography.Paragraph size="sm" weight="semiBold" color="black">-</Typography.Paragraph>
                        </ActionButton>
                    </div>
                    <div onClick={()=>setLiked(!liked)}
                        className="flex flex-col rounded-full transition-all p-1 w-fit items-center bottom-0 translate-y-[50%] translate-x-[-80%] z-[1000] right-0 absolute">
                        <Icon name="Heart" className={addClass(liked ? "opacity-0 h-0" : "min-h-10 opacity-100 " , "w-10 h-10 transition-all")}/>
                        <Icon name="FillHeart" className={addClass(liked ? "opacity-100 min-h-10" : "h-0 opacity-0 " , "w-10 h-10 transition-all")}/>
                    </div>
                </div>
                <div className="max-w-[70%] h-[400px] relative translate-x-[-20%] translate-y-[15%]">
                    <Image src={Pic} alt="" fill className=" shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]  absolute rounded-[55px] object-cover" quality="100"/>
                </div>
            </div>
            <div className="w-[80%] mx-auto mb-3">
                <div className="flex flex-col gap-[10px]">

                        <Typography.Title level="h6" size="lg" weight="semiBold" color="black">
                            فوم شستشو نوتروژینا
                        </Typography.Title>

                    <Typography.Paragraph size="sm" weight="normal" color="nonActive">
                        تونر زردچوبه نیتروژینا
                        شاداب کننده ی پوست و تنظیم PH
                        ضد جوش و ضد التهاب
                    </Typography.Paragraph>
                    <ImagesLabel title="پوست مختلط" className="!bg-white [&>span]:!text-black"/>
            </div>
        </div>
            <div className="bg-[#ff9933] flex flex-row-reverse pl-3 rounded-full h-[56px] items-center justify-between p-1 w-[80%] mx-auto">
                <Typography.Paragraph size="sm" weight="semiBold" color="white"
                                      className="whitespace-nowrap"> 280,000 T</Typography.Paragraph>
                    <button className="w-[70%] h-full">
                        <div className="bg-white flex items-center justify-between pl-3 flex-row-reverse p-[1px] w-full h-full rounded-full">
                            <Typography.Text size="sm" weight="semiBold" color="black">افزودن به سبد خرید</Typography.Text>
                            <div className="bg-[#ff9933] flex items-center justify-center rounded-full h-full w-[30%]">
                                <Icon name="Basket" className="w-8 h-8 [&>path]:stroke-2"/>
                            </div>
                        </div>
                    </button>
            </div>
        </div>
    )
}
