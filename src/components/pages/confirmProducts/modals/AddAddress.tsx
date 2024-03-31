import {Modal} from "@mantine/core";
import {AddAddressModalProps} from "@/types/components-types";
import {Input} from "@/components/molecules/Input/Input";
import {Resolver, SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {AddAddressValidationSchema, addAddressValidationSchema} from "@/validations/AddAddress";
import {Button} from "@/components/molecules/Button/Buttom";

export default function AddAddress({close, opened}: AddAddressModalProps) {

    const formOptions: { resolver: Resolver<AddAddressValidationSchema> } = {
        resolver: zodResolver(addAddressValidationSchema),
    };
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<AddAddressValidationSchema>(formOptions);
    const onSubmit: SubmitHandler<AddAddressValidationSchema> = (data) => {
        console.log("send")
    }
    return (
        <Modal styles={{
            title: {fontWeight: "600"},
            content:{ borderRadius:"15px"},
            body:{maxHeight:"500px" , overflow:"auto" }
        }}
               opened={opened}
               onClose={close}

               centered
               title="آدرس جدید">
            <form className="flex flex-col gap-4 border-t border-solid border-black pt-2">
                <Input label="نشانی پستی" className="[&>div>input]:!h-[100px]" {...register("full_address")}/>
                <div className="flex gap-3">
                    <Input label="استان" {...register("province")}/>
                    <Input label="شهر" {...register("city")}/>

                </div>
                <Input label="محله" {...register("alley")}/>

                <div className="flex gap-3">
                    <Input label="پلاک" {...register("number")}/>
                    <Input label="واحد" {...register("vahed")}/>
                    <Input label="کد پستی" {...register("zip_code")}/>

                </div>
                <div className="flex gap-3">
                    <div className="flex flex-col gap-3">
                        <Input label="نام گیرنده" {...register("first_name")}/>
                        <Input label="نام خانوادگی گیرنده" {...register("last_name")}/>
                    </div>
                    <Input label="شماره موبایل" {...register("phone")}/>
                </div>
                <Button title="Send" type="submit" className="!w-1/2 mx-auto mt-4"/>
            </form>
        </Modal>
    )
}
