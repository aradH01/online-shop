import {Modal} from "@mantine/core";
import {Input} from "@/components/molecules/Input/Input";
import {Button} from "@/components/molecules/Button/Buttom";
import {IEditModals} from "@/types/components-types";
import {Resolver, SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {editPersonalInfoValidationSchema, EditPersonalInfoValidationSchema} from "@/validations/EditName";
import {changePasswordValidationSchema, ChangePasswordValidationSchema} from "@/validations/ChangePassword";
import {Typography} from "@/components/atoms/Typography";


export default function EditInfoModal({opened, close, onClick, index}: IEditModals) {
    return (
        <>
            {index === 1 ?
                <EditFirstName close={close} opened={opened} onClick={onClick}/>
                : index === 2 ?
                    <EditUserName close={close} opened={opened} onClick={onClick}/> : index === 3
                        ?
                        <EditEmail close={close} opened={opened} onClick={onClick}/> : index === 4
                            ?
                            <EditMobile close={close} opened={opened} onClick={onClick}/> :

                            <ChangePassword close={close} opened={opened} onClick={onClick}/>

            }
        </>
    )
}

function EditFirstName({opened, close, onClick}: IEditModals) {

    const formOptions: { resolver: Resolver<EditPersonalInfoValidationSchema> } = {
        resolver: zodResolver(editPersonalInfoValidationSchema),
    };
    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors},
    } = useForm<EditPersonalInfoValidationSchema>(formOptions);
    const onSubmit: SubmitHandler<EditPersonalInfoValidationSchema> = (data) => {
        console.log("send")
    }

    return (
        <Modal styles={{
            title: {fontWeight: "600"},
            content: {borderRadius: "15px"},
            body: {maxHeight: "500px", overflow: "auto"}
        }}
               opened={opened}
               onClose={close}

               centered
               title="ثبت اطلاعات شناسایی">
            <form onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-4 border-t border-solid border-black pt-2">
                <div className="flex flex-col gap-3">
                    <Input label="نام" {...register("first_name")}/>
                    <Input label="نام خانوادگی" {...register("last_name")}/>
                </div>
                <Button title="ثبت" type="submit" className="!w-1/2 mx-auto mt-4"/>
            </form>
        </Modal>
    )
}

function EditUserName({opened, close, onClick}: IEditModals) {

    const formOptions: { resolver: Resolver<EditPersonalInfoValidationSchema> } = {
        resolver: zodResolver(editPersonalInfoValidationSchema),
    };
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<EditPersonalInfoValidationSchema>(formOptions);
    const onSubmit: SubmitHandler<EditPersonalInfoValidationSchema> = (data) => {
        console.log("send")
    }
    return (
        <Modal styles={{
            title: {fontWeight: "600"},
            content: {borderRadius: "15px"},
            body: {maxHeight: "500px", overflow: "auto"}
        }}
               opened={opened}
               onClose={close}
               centered
               title="ثبت نام کاربری">
            <form onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-4 border-t border-solid border-black pt-2">
                <div className="flex gap-3">
                    <Input label="نام کاربری" {...register("user_name")}/>
                </div>
                <Button title="ثبت" type="submit" className="!w-1/2 mx-auto mt-4"/>
            </form>
        </Modal>
    )
}

function EditEmail({opened, close, onClick}: IEditModals) {

    const formOptions: { resolver: Resolver<EditPersonalInfoValidationSchema> } = {
        resolver: zodResolver(editPersonalInfoValidationSchema),
    };
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<EditPersonalInfoValidationSchema>(formOptions);
    const onSubmit: SubmitHandler<EditPersonalInfoValidationSchema> = (data) => {
        console.log("send")
    }
    return (
        <Modal styles={{
            title: {fontWeight: "600"},
            content: {borderRadius: "15px"},
            body: {maxHeight: "500px", overflow: "auto"}
        }}
               opened={opened}
               onClose={close}
               centered
               title="ثبت ایمیل">
            <form onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-4 border-t border-solid border-black pt-2">
                <div className="flex gap-3">
                    <Input label="ایمیل" {...register("email")}/>
                </div>
                <Button title="ثبت" type="submit" className="!w-1/2 mx-auto mt-4"/>
            </form>
        </Modal>
    )
}

function EditMobile({opened, close, onClick}: IEditModals) {

    const formOptions: { resolver: Resolver<EditPersonalInfoValidationSchema> } = {
        resolver: zodResolver(editPersonalInfoValidationSchema),
    };
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<EditPersonalInfoValidationSchema>(formOptions);
    const onSubmit: SubmitHandler<EditPersonalInfoValidationSchema> = (data) => {
        console.log("send")
    }
    return (
        <Modal styles={{
            title: {fontWeight: "600"},
            content: {borderRadius: "15px"},
            body: {maxHeight: "500px", overflow: "auto"}
        }}
               opened={opened}
               onClose={close}
               centered
               title="ثبت شماره موبایل">
            <form onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-4 border-t border-solid border-black pt-2">
                <div className="flex gap-3">
                    <Input label="شماره موبایل" {...register("phone")}/>
                </div>
                <Button title="ثبت" type="submit" className="!w-1/2 mx-auto mt-4"/>
            </form>
        </Modal>
    )
}

function ChangePassword({opened, close, onClick}: IEditModals) {

    const formOptions: { resolver: Resolver<ChangePasswordValidationSchema> } = {
        resolver: zodResolver(changePasswordValidationSchema),
    };
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<ChangePasswordValidationSchema>(formOptions);
    const onSubmit: SubmitHandler<ChangePasswordValidationSchema> = (data) => {
        console.log("send")
    }
    return (
        <Modal styles={{
            title: {fontWeight: "600"},
            content: {borderRadius: "15px"},
            body: {maxHeight: "500px", overflow: "auto"}
        }}
               opened={opened}
               onClose={close}
               centered
               title="ثبت شماره موبایل">
            <form onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-4 border-t border-solid border-black pt-2">
                <div className="flex flex-col gap-3">
                    <Input label="رمز عبور فعلی" {...register("old_password")}/>
                    <Typography.Text size="xsm" weight="semiBold" color="primary" className="!text-right">رمز عبور شما
                        باید حداقل ۸ حرف باشد.
                    </Typography.Text>
                    <Input label="رمز عبور جدید" {...register("new_password")}/>
                    <Input label="تکرار رمز عبور جدید" {...register("confirm_password")}/>
                </div>
                <Button title="ثبت" type="submit" className="!w-1/2 mx-auto mt-4"/>
            </form>
        </Modal>
    )
}
