'use client'
import styled from "@emotion/styled";
import {Button} from "@/components/molecules/Button/Buttom";
import Pic from "@/images/login-bg.jpg"
import Image from "next/image";
import {Resolver, SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {SignUpValidationSchema, signUpValidationSchema} from "@/validations/signUp";
import {Input} from "@/components/molecules/Input/Input";
import {useRouter} from "next/navigation";
import {Path} from "@/constants/enums";

const Content=styled.div`
`
export default function Login(){
    const formOptions: { resolver: Resolver<SignUpValidationSchema> } = {
        resolver: zodResolver(signUpValidationSchema),
    };
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<SignUpValidationSchema>(formOptions);
    const onSubmit: SubmitHandler<SignUpValidationSchema> = (data) => {
        console.log("send")
    }
    const router = useRouter()
    return(
        <div className="relative h-[100dvh] h-[100vh]">
            <div className="absolute w-full h-full blur-[6px]">
                <Image src={Pic} alt="" fill/>
            </div>
            <div className="absolute py-10 px-2 bottom-1/2 right-1/2 translate-x-1/2 border border-solid border-white rounded-2xl translate-y-1/2 w-[85%] lg:w-1/3 bg-glass-bg">
                   <form onSubmit={handleSubmit(onSubmit)} className="lg:w-[75%] w-full flex flex-col gap-4 mx-auto">
                       <Input label="تلفن یا نام کاربری" {...register("phone")}/>
                       <Input label="رمز عبور" {...register("password")}/>
                      <div className="flex flex-row items-center justify-between mt-2">
                          <Button onClick={()=>router.push(Path.Home)} title="ورود" type="submit" className=""/>
                          <Button onClick={()=>router.push(Path.ConfirmPhone)} title="ورود با رمز یکبار مصرف"  text className="[&>div>span]:!text-green-700 [&>div>span]:!font-semibold !p-0"/>
                      </div>
                   </form>
            </div>
        </div>
    )
}
