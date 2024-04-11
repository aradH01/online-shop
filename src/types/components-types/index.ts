import {AvailableIcons} from "@/components/atoms/Icon";
import {
    AriaAttributes,
    DetailedHTMLProps, Dispatch, InputHTMLAttributes,
    MouseEvent, SetStateAction, TextareaHTMLAttributes,
} from "react";
import {Color, Size} from "@/styles/globals";
import {ColorValueHex} from "@/types/common";
import ExistAddresses from "@/components/pages/confirmProducts/modals/ExistAddresses";
import {StaticImageData} from "next/image";
import {IOrderHistory, IOrderProductsImage} from "@/types/pages";
import NotificationCard from "@/components/pages/notification/components/notificationCard";
import SmallProCard from "@/components/molecules/SmallProCard/SmallProCard";

export interface ButtonProps {
    loading?: boolean,
    outlined?: boolean,
    linked?: boolean,
    className?: string,
    title: string,
    disabled?: boolean,
    size?: Size,
    type?: "button" | "submit" | "reset" | undefined,
    width?: string,
    text?: boolean,
    icon?: AvailableIcons,
    arrow?:boolean
    animate?:boolean
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface InputProps {
    label: string,
    type?: string,
    icon?: AvailableIcons,
    error?: string,
    className?: string,
    disabled?: boolean,
    placeHolder?: string,
}
export interface ErrorButtonProps {
    loading?: boolean,
    outlined?: boolean,
    className?: string,
    title?: string,
    disabled?: boolean,
    size?: Size,
    type?: "button" | "submit" | "reset" | undefined,
    width?: string,
    text?: boolean,
    icon?: AvailableIcons,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    params?: object
}
export interface RadioButtonProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >,
        AriaAttributes {
    className?: string;
    label?: string;
}
export interface TextareaProps
    extends DetailedHTMLProps<
        TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
    >,
        AriaAttributes {
    label?: string;
    error?: string;
}
export interface ImagesLabelProps {
    title: string,
    className?: string
}
export interface SearchBoxProps {
    className?: string
    id?: string
    error?: string
    type?: string
    placeholder?: string
    label?: string
    onChange?: (e: any) => void
    onClick?: () => void
    onBlur?: () => void
    onFocus?: () => void
}
export interface SidebarProps {
    show: boolean
}
export interface HeaderDropdownProps {
    data?: { id: number, href: string, title: string , icon?:AvailableIcons }[],
    title: string,
    className?: string,
    contentClass?: string
    onClick?: () => void
}
export interface AvatarButtonProps {
    title: string;
    avatar?: string;
    className?: string;
    avatarClass?:string
}
export interface AvatarProps {
    color?: Color;
    text?: string;
    className?: string
}
export type BreadCrumbsProps = {
    crumbs?: { label?: string; href: string; static?: boolean }[];
    color?: ColorValueHex;
    icon?: { fill?: ColorValueHex; opacity?: 50 | 100 };
    className?: string;
};
export interface ArrowButtonProps {
    outlined?: boolean
    onClick?: () => void
    className?: string

}
export interface AddAddressModalProps {
    opened: boolean,
    close: () => void,
}
export interface ExistAddressesModalProps {
    onClick?:()=>void
    opened: boolean,
    close: () => void,
}
export interface CartDropdownProps {
    data?: { id: number, name: string , count:number | string , image:StaticImageData | string , fee:string }[],
    className?: string,
    contentClass?: string
    onClick?: () => void
}
export interface OrderHistoryTabsProps {
    tabs?: IOrderHistory[]
    currentTab: number
    setCurrentTab: Dispatch<SetStateAction<number>>
}
export interface OrderCardsProps{
    id?: number
    order_at?: string
    step?: string
    arrived_step?:string
    transferee?:string
    transferee_phone?:string
    address?:string
    transfer_price?:string
    transfer_barcode?:string
    price?: string
    order_code?:string
    url?: string
    image?: IOrderProductsImage[]
}
export interface IEditModals{
    onClick?:()=>void
    opened: boolean,
    close: () => void,
    index?:number
}
export interface AddressCardProps{
    address:{city?:string , province?:string , location?:string}
    phone?:string
    zipCode?:string
    addAddress?:()=>void
    deleteAddress?:()=>void
    fullName?:string
}
export interface NotificationCardProps{
    title?:string
    onClick?:()=>void
    date?:string
}
export interface SmallProCardProps{
    title?:string
    description?:string
    onClick?:()=>void
    onDelete?:()=>void
    image?:StaticImageData
    price?:string
}
export interface NewProCardProps{
    title?:string
    description?:string
    onClick?:()=>void
    onDelete?:()=>void
    image:StaticImageData
    price?:string
}
export interface EventsCardProps {
    image: string | StaticImageData,
    withLink?: boolean,
    className?:string
    title?: string,
    description?: string,
    href?: string
    glassMorphism?: boolean
}
export interface LargeProCardProps{
    title?:string
    description?:string
    onClick?:()=>void
    image?:StaticImageData
    price?:string

}
export interface CatButtonsProps {
    label?: string,
    categories: { label: string, value: number | string, selected: boolean }[]
    className?: string,
    onClick?: (categories: CatButtonsProps["categories"]) => void
}
