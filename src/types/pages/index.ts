import {StaticImageData} from "next/image";

export interface OrderHistoryType {
    id: number
    list: IOrderHistory
}

export interface IOrderHistory {
    id: number
    order_at: string
    step: string
    arrived_step:string
    transferee:string
    transferee_phone:string
    address:string
    transfer_price:string
    transfer_barcode:string
    price: string
    order_code:string
    url: string
    image: IOrderProductsImage[]

}
export interface IOrderProductsImage{
    id:number
    image:string | StaticImageData
}
export type Data_Signup = {
    mobile: string;
    email: string;
    front_card: FileList;
    back_card: FileList;
    password: string;
    confirm_password: string;
    first_name: string;
    last_name: string;
    occupation: string;
    address: string;
    device_tokens: {
        device: string;
        token: string;
    };
};
