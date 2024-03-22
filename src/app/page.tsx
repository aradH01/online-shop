'use client'
import {Button} from "@/components/molecules/Button/Buttom";
import {Input} from "@/components/molecules/Input/Input";

export default function Home() {
  return (
    <div className="flex h-[100vh] justify-center items-center">
      <Input label="جستجو محصولات ..." placeHolder="جستجو محصولات ..." icon="Search"/>
    </div>
  );
}
