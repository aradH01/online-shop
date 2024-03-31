import {BreadCrumbs} from "@/components/molecules/breadcrumbs";
import Image from "next/image";
import Picture from "@/images/pic2-removebg-preview.png"
import {Typography} from "@/components/atoms/Typography";
import {useState} from "react";
import styled from "@emotion/styled";
import {Button} from "@/components/molecules/Button/Buttom";
import Slider from "@/components/pages/productDetail/components/Slider";
import {Icon} from "@/components/atoms/Icon";
import {addClass} from "@/utils/classNames";

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
export const StyledButton = styled.button`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 500ms ease all;
  &:hover {
    box-shadow: 4px 4px 8px 2px #00000040 inset;
  } 
`
export default function ProductDetail(){
    const [count, setCount] = useState<number>(1);
    const [liked, setLiked] = useState<boolean>(false)

    return(
        <div className="flex flex-col">
            <div className="w-[1700px] max-w-[95%] mx-auto">
                <BreadCrumbs
                    crumbs={[
                        {href: "/", label: 'خانه'},
                        {href: "/dd", label: 'محصولات'},
                        {href: "/dd", label: 'فوم نوتروژینا'},
                    ]}
                    className=""/>
            </div>
                <div className="w-[84rem] mb-[64px] mt-[100px] mx-auto max-w-[95%]">
                        <div className="flex flex-row-reverse items-center">
                            <div className="w-1/2 rounded-2xl ">
                                <Slider/>
                            </div>
                            <div className="w-1/2">
                              <div className="w-[80%] mx-auto">
                                  <Typography.Title level="h1" className="!text-[36px]" weight="semiBold" color="primary">فوم نوتروژینا</Typography.Title>
                                  <div className="grid-cols-3 grid gap-[24px] flex-wrap gap-y-4 mt-8 justify-between">
                                      <div className="flex flex-col items-center">
                                          <Typography.Title level="h3" size="md" color="warning" weight="normal">کشور سازنده</Typography.Title>
                                          <Typography.Title level="h5" size="md" weight="medium" color="primary">فرانسه</Typography.Title>
                                      </div>
                                      <div className="flex flex-col items-center">
                                          <Typography.Title level="h3" size="md" color="warning" weight="normal">تضمین اصالت کالا</Typography.Title>
                                          <Typography.Title level="h5" size="md" weight="medium" color="primary"></Typography.Title>
                                      </div>
                                      <div className="flex flex-col items-center">
                                          <Typography.Title level="h3" size="md" color="warning" weight="normal">مقدار</Typography.Title>
                                          <Typography.Title level="h5" size="md" weight="medium" color="primary">120ml</Typography.Title>
                                      </div>
                                      <div className="flex flex-col items-center">
                                          <Typography.Title level="h3" size="md" color="warning" weight="normal">برند</Typography.Title>
                                          <Typography.Title level="h5" size="md" weight="medium" color="primary">neutrogena</Typography.Title>
                                      </div>
                                      <div className="flex flex-col items-center">
                                          <Typography.Title level="h3" size="md" color="warning" weight="normal">برند</Typography.Title>
                                          <Typography.Title level="h5" size="md" weight="medium" color="primary">neutrogena</Typography.Title>
                                      </div>
                                      <div className="flex flex-col items-center">
                                          <Typography.Title level="h3" size="md" color="warning" weight="normal">برند</Typography.Title>
                                          <Typography.Title level="h5" size="md" weight="medium" color="primary">neutrogena</Typography.Title>
                                      </div>
                                      <div className="flex flex-col items-center">
                                          <Typography.Title level="h3" size="md" color="warning" weight="normal">برند</Typography.Title>
                                          <Typography.Title level="h5" size="md" weight="medium" color="primary">neutrogena</Typography.Title>
                                      </div>
                                  </div>
                                  <div className="mt-12 justify-between flex flex-row-reverse">
                                      <div className="flex items-center rounded-[3px] max-h-[48px] border-solid border-black border w-fit">
                                          <div onClick={()=>setLiked(!liked)}
                                               className="px-2">
                                              <Icon name="Heart" className={addClass(liked ? "opacity-0 h-0" : "min-h-[8px] opacity-100 " , "w-10 transition-all")}/>
                                              <Icon name="FillHeart" className={addClass(liked ? "opacity-100 min-h-[8px]" : "h-0 opacity-0 " , "w-10 transition-all")}/>
                                          </div>
                                          <div className="flex items-center gap-2 w-fit border-solid border-black border-x px-2 h-[48px]">
                                              <ActionButton onClick={() => setCount(prevState => prevState + 1)}>
                                                  <Typography.Paragraph size="sm" weight="semiBold" color="black">+</Typography.Paragraph>
                                              </ActionButton>
                                              <Typography.Text size="lg" weight="semiBold" color="black">{count}</Typography.Text>
                                              <ActionButton disabled={count === 1} onClick={() => setCount(prevState => prevState - 1)}>
                                                  <Typography.Paragraph size="sm" weight="semiBold" color="black">-</Typography.Paragraph>
                                              </ActionButton>
                                          </div>
                                          <StyledButton className="text-black px-4">اضافه به سبد خرید</StyledButton>
                                      </div>
                                      <Button title="تایید خرید" />
                                  </div>
                              </div>
                            </div>
                        </div>
                    <div className="mt-[120px] flex flex-row-reverse justify-between">
                        <Typography.Title level="h2" size="md" weight="semiBold" color="primary">مشخصات</Typography.Title>
                        <Typography.Paragraph size="sm" weight="normal" color="grayMedium" className="w-[60%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci atque blanditiis earum in magnam officia quae ut veritatis voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam molestiae nesciunt nostrum omnis soluta, totam. Doloremque maiores mollitia nobis similique!</Typography.Paragraph>
                    </div>
                </div>
        </div>
    )
}
