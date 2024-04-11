'use client'


import LargeProCard from "@/components/molecules/productCards/LargeProCard";
import {useEffect, useState} from "react";
import {CategoriesButton} from "@/components/molecules/CategoriesButton/CategoriesButton";
import {Button} from "@/components/molecules/Button/Buttom";
import {addClass} from "@/utils/classNames";

export default function CareProducts(){
    const [brandCategories, setBrandCategories] = useState<{ value: number, label: string, selected: boolean }[]>([{label: "همه", value: 0, selected: true}]);
    const [commonCategories, setCommonCategories] = useState<{ value: number, label: string, selected: boolean }[]>([{label: "همه", value: 0, selected: true}]);
    const [brandFilter, setBrandFilter] = useState(false)
    const [commonFilter, setCommonFilter] = useState(false)
    const brandCategory=[
        {id:1 , title: "نوتروژینا"},
        {id:2 , title: "لورئال"},
        {id:3 , title: "گارنیر"},
        {id:4 , title: "سیمپل"},
        {id:5 , title: "گلیس"},
    ]
    const commonCategory=[
        {id:1 , title: "ارزانترین"},
        {id:2 , title: "گرانترین"},
        {id:3 , title: "جدیدترین"},
        {id:4 , title: "پر فروش ترین"},
    ]
    useEffect(()=>{
        brandCategory.map(item=>{
            setBrandCategories(cat => [...cat, {value: item.id, label: item.title, selected: false}].filter((value, index, self) =>
                    index === self.findIndex((t) => (
                        t.value === value.value
                    ))
            ))
        })
        commonCategory.map(item=>{
            setCommonCategories(cat => [...cat, {value: item.id, label: item.title, selected: false}].filter((value, index, self) =>
                    index === self.findIndex((t) => (
                        t.value === value.value
                    ))
            ))
        })
    },[])
    function BrandTypesButtons() {
        return (
            <>
                <CategoriesButton categories={brandCategories}/>
            </>
        )
    }
    function CommonTypesButtons() {
        return (
            <>
                <CategoriesButton categories={commonCategories}/>
            </>
        )
    }
    return(
        <div className="">
          <div className="flex flex-row items-center gap-4">
              <Button title="فیلتر بر اساس برند" onClick={()=>{
                  setBrandFilter(!brandFilter)
                  setCommonFilter(false)
              }}/>
              <Button title="فیلتر محصولات" onClick={()=>{
                  setCommonFilter(!commonFilter)
                  setBrandFilter(false)
              }}/>
          </div>
            <div
                className={addClass(brandFilter ? "opacity-100 translate-y-0 transition-all min-h-[auto] pointer-events-auto" : "pointer-events-none opacity-0 translate-y-[-50px] transition-all h-0" , "transition-all")}>
                <BrandTypesButtons/>
            </div>
            <div
                className={addClass(commonFilter ? "opacity-100 translate-y-0 transition-all min-h-[auto] pointer-events-auto" : "pointer-events-none opacity-0 translate-y-[-50px] transition-all h-0" , "transition-all")}>
                <CommonTypesButtons/>
            </div>
            <div className="grid gap-y-8 grid-cols-1 md:grid-cols-2 lapmidpad:grid-cols-3 mt-4">
                <LargeProCard/>
                <LargeProCard/>
                <LargeProCard/>
                <LargeProCard/>
            </div>
        </div>
    )
}
