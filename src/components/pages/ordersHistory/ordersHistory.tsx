"use client"
import {useState} from "react";
import {OrderHistoryTabs} from "@/components/pages/ordersHistory/components/SectionTabs";
import Picture from "@/images/pic3.jpg"
import Picture1 from "@/images/pic6.jpg"
import Picture2 from "@/images/pic4.jpg"
import {OrderHistoryType} from "@/types/pages";
import RunningOrders from "@/components/pages/ordersHistory/sections/runningOrders";
import ArrivedOrders from "@/components/pages/ordersHistory/sections/arrivedOrders";
export default function OrdersHistory(){
    const data:OrderHistoryType[]=[
        {id:1 , list:{
                id: 1,
                order_at: "1403-01-02",
                step: "تحویل داده شده",
                transferee:"حقیقی",
                transferee_phone:"09141256598",
                arrived_step:"تحویل داده شده",
                address:"مرند شریعتی شرقی ارشاد",
                transfer_price:"45000",
                transfer_barcode:"11115454546565465654",
                price: "25000000",
                order_code:"5125",
                url: "",
                image: [
                    {id:1 , image:Picture},
                    {id:2 , image:Picture1},
                    {id:3 , image:Picture2},
                ],
            }},
        {id:2 , list:{
                id: 2,
                order_at: "1403-01-02",
                arrived_step:"جاری",
                step: "درحال آماده سازی",
                transferee:"حقیقی",
                transferee_phone:"09141256598",
                address:"مرند شریعتی شرقی ارشاد",
                transfer_price:"45000",
                transfer_barcode:"11115454546565465654",
                price: "25000000",
                order_code:"5125",
                url: "",
                image: [
                    {id:1 , image:Picture},
                    {id:2 , image:Picture2},
                    {id:3 , image:Picture},
                    {id:4 , image:Picture2},


                ],
            }},


    ]
    const [currentTab, setCurrentTab] = useState(0);
    return(
        <div className="w-[84rem] mb-[64px] mt-[100px] mx-auto max-w-[95%]">

            <OrderHistoryTabs currentTab={currentTab} setCurrentTab={setCurrentTab}
                                tabs={data.map(item=>item.list)}/>
            <div className="bg-[#E2E2E4] flex flex-col gap-4 min-h-[180px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-3xl py-8 px-6 mt-[40px]">
                {currentTab===1 ? <RunningOrders data={data}/> : <ArrivedOrders data={data}/>}
            </div>
            </div>
    )
}
