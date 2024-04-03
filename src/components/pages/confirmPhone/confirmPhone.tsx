'use client'
import Image from "next/image";
import Pic from "@/images/login-bg.jpg";
import {Button} from "@/components/molecules/Button/Buttom";
import {Input} from "@/components/molecules/Input/Input";
import {Resolver, SubmitHandler, useForm} from "react-hook-form";
import {signUpValidationSchema, SignUpValidationSchema} from "@/validations/signUp";
import {zodResolver} from "@hookform/resolvers/zod";
import Link from "next/link";
import {Path} from "@/constants/enums";

export default function ConfirmPhone(){
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
    return(
        <div className="relative h-[100dvh] h-[100vh]">
            <div className="absolute w-full h-full blur-[6px]">
                <Image src={Pic} alt="" fill/>
            </div>
            <div className="absolute py-10 px-2 bottom-1/2 right-1/2 translate-x-1/2 border border-solid border-white rounded-2xl translate-y-1/2 w-[85%] lg:w-1/3 bg-glass-bg">
                <form onSubmit={handleSubmit(onSubmit)} className="lg:w-[75%] w-full flex flex-col gap-4 mx-auto">
                    <Input label="شماره همراه" {...register("phone")}/>
                    <div className="flex flex-row items-center justify-between mt-2">
                        <Link href={Path.CodeConfirmation}>
                            <Button title="دریافت کد" type="submit" className=""/>
                        </Link>
                    </div>
                </form>

            </div>
        </div>
    )
}
