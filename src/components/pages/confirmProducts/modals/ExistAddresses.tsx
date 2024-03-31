import {ExistAddressesModalProps} from "@/types/components-types";
import {Modal} from "@mantine/core";
import {Button} from "@/components/molecules/Button/Buttom";
import {zodResolver} from "@hookform/resolvers/zod";
import {Resolver, SubmitHandler, useForm} from "react-hook-form";
import {ExistAddressValidationSchema, existAddressValidationSchema} from "@/validations/ExistAddresses";
import {RadioButton} from "@/components/molecules/RadioButton/RadioButton";
import {Typography} from "@/components/atoms/Typography";
import {Icon} from "@/components/atoms/Icon";
import styled from "@emotion/styled";

const Address=styled.div`
  border-bottom: 1px solid ${({theme}) => theme.components.tableBorder};
  padding: 5px 0;
`
const Form=styled.form`
 
`
export default function ExistAddresses({opened,close,onClick}:ExistAddressesModalProps){
    const formOptions: { resolver: Resolver<ExistAddressValidationSchema> } = {
        resolver: zodResolver(existAddressValidationSchema),
    };
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<ExistAddressValidationSchema>(formOptions);
    const onSubmit: SubmitHandler<ExistAddressValidationSchema> = (data) => {
        console.log("send")
    }
    return(
        <Modal
            opened={opened}
            onClose={close}
            centered
            title="انتخاب آدرس"
            styles={{
                title:{fontWeight:"600"}
            }}
        >
            <div className="border-b border-black border-solid pb-4 mb-4">
                <Button title="افزودن آدرس جدید" onClick={onClick} icon="LocationV2" outlined/>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
               <div>
                   <RadioButton label="یالدور، خیابان شریعتی شرقی، بن بست ارشاد" {...register("address")} value="1" />
                   <Address className="flex flex-col gap-4 mt-8">
                       <div className="flex items-center w-[40%] justify-between">
                           <Icon name="Mail" className="w-6 h-6"/>
                           <Typography.Paragraph>5411145222</Typography.Paragraph>
                       </div>
                       <div className="flex items-center w-[40%] justify-between">
                           <Icon name="Mobile" className="w-6 h-6"/>
                           <Typography.Paragraph>+989143921761</Typography.Paragraph>
                       </div>
                       <div className="flex items-center w-[40%] justify-between">
                           <Icon name="Profile" className="w-6 h-6"/>
                           <Typography.Paragraph>Arad haghighy</Typography.Paragraph>
                       </div>
                   </Address>
               </div>
                <Address>
                    <RadioButton label="مرند، کوی آبیاری ، آپارتمان های فرهنگیان ، طبقه ۲ واحد ۱" {...register("address")} value="2" />
                   <div className="flex flex-col gap-4 mt-8">
                       <div className="flex items-center w-[40%] justify-between">
                           <Icon name="Mail" className="w-6 h-6"/>
                           <Typography.Paragraph>5411145222</Typography.Paragraph>
                       </div>
                       <div className="flex items-center w-[40%] justify-between">
                           <Icon name="Mobile" className="w-6 h-6"/>
                           <Typography.Paragraph>+989143921761</Typography.Paragraph>
                       </div>
                       <div className="flex items-center w-[40%] justify-between">
                           <Icon name="Profile" className="w-6 h-6"/>
                           <Typography.Paragraph>Arad haghighy</Typography.Paragraph>
                       </div>
                   </div>
               </Address>

            </Form>
        </Modal>
    )
}
