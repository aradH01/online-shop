import {useState} from "react";
import {Typography} from "@/components/atoms/Typography";
import {Icon} from "@/components/atoms/Icon";
import {addClass} from "@/utils/classNames";
import Image from "next/image";
import Pic from "@/images/pic6.jpg";
import ImagesLabel from "@/components/atoms/ImagesLabel/ImagesLabel";
import styled from "@emotion/styled";
import {LargeProCardProps} from "@/types/components-types";

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
export default function LargeProCard({onClick,title,image,price,description}:LargeProCardProps){

    const [count, setCount] = useState<number>(1);
    const [liked, setLiked] = useState<boolean>(false)
    return (
        <div className="bg-[#1a3732] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] pb-4 max-w-[400px] rounded-[35px]">
            <div className="h-[400px] relative">
                <div className="right-0 bg-[#184D47] rounded-tr-[35px] h-[300px] w-[90%] absolute rounded-bl-[55px]">
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
                         className="flex flex-col rounded-full transition-all p-1 w-fit items-center bottom-0 translate-y-[50%] translate-x-[-60%] z-[1000] right-0 absolute">
                        <Icon name="Heart" className={addClass(liked ? "opacity-0 h-0" : "min-h-10 opacity-100 " , "w-10 transition-all [&>path]:fill-white")}/>
                        <Icon name="FillHeart" className={addClass(liked ? "opacity-100 min-h-10" : "h-0 opacity-0 " , "w-10 transition-all")}/>
                    </div>
                </div>
                <div className="max-w-[70%] h-[300px] relative translate-x-[-20%] translate-y-[20%]">
                    <Image src={Pic} alt="" fill className=" shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]  absolute rounded-[55px] object-cover" quality="100"/>
                </div>
            </div>
            <div className="w-[80%] mx-auto mb-3">
                <div className="flex flex-col gap-[10px]">

                    <Typography.Title level="h6" size="lg" className="!text-center" weight="semiBold" color="white">
                        فوم شستشو نوتروژینا
                    </Typography.Title>

                    <Typography.Paragraph size="sm" className="!text-right" weight="normal" color="white">
                        تونر زردچوبه نیتروژینا
                        شاداب کننده ی پوست و تنظیم PH
                        ضد جوش و ضد التهاب
                    </Typography.Paragraph>
                    <ImagesLabel title="پوست مختلط" className="!bg-white [&>span]:!text-black"/>
                </div>
            </div>
            <div className="bg-[#ff9933] flex flex-row-reverse pl-3 rounded-full h-[56px] items-center justify-between p-1 w-[80%] mx-auto">
                <Typography.Paragraph size="md" weight="bold" color="darkDanger"
                                      className="whitespace-nowrap flex items-center gap-1 pr-1"> 280,000 <Icon name="Toman"/></Typography.Paragraph>
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
