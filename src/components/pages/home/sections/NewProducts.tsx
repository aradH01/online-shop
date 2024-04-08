import {Typography} from "@/components/atoms/Typography";
import NewProductCard from "@/components/pages/home/components/NewProductCard";
import Picture from "@/images/pic2-removebg-preview.png";
import Picture1 from "@/images/ordinary.jpg";
import Image from "next/image";
import {Icon} from "@/components/atoms/Icon";

export default function NewProducts(){
    return(
        <div>
            <Typography.Title level="h4" weight="semiBold" size="md" color="primary" className="inline border-b-2 border-red-500 pb-2 border-solid">محصولات اخیر</Typography.Title>
            <div className="gap-8 mt-8 flex lt:flex-row flex-col items-stretch">
                   <div className="relative lt:h-[650px] h-[300px] w-full lt:w-[60%] ipad:w-[40%]">
                       <Image src={Picture1} alt="" fill className="object-cover"/>
                      <div className="absolute flex items-center flex-row-reverse right-[10%] top-[10%]">
                          <Typography.Paragraph size="lg" weight="bold" color="primary" className="!text-center">
                              جدیدترین محصولات <br/>    ما با قیمت شگفت انگیز
                          </Typography.Paragraph>
                          <div className="bg-green-700 flex items-center justify-center w-16 h-16 rounded-full">
                              <Icon name="MegaPhone" className="w-8 h-8"/>
                          </div>
                      </div>
                   </div>
               <div className=" gap-8 w-full grid grid-cols-1 sm:grid-cols-2 ipad:grid-cols-3">
                    <NewProductCard image={Picture} title="میسلار واتر گارنیر" price="210,000"/>
                    <NewProductCard image={Picture} title="میسلار واتر گارنیر" price="210,000"/>
                    <NewProductCard image={Picture} title="میسلار واتر گارنیر" price="210,000"/>
                    <NewProductCard image={Picture} title="میسلار واتر گارنیر" price="210,000"/>
                    <NewProductCard image={Picture} title="میسلار واتر گارنیر" price="210,000"/>
                    <NewProductCard image={Picture} title="میسلار واتر گارنیر" price="210,000"/>
               </div>
            </div>
        </div>
    )
}
