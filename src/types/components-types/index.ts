import {AvailableIcons} from "@/components/atoms/Icon";
import {
    AriaAttributes,
    DetailedHTMLProps, InputHTMLAttributes,
    MouseEvent, TextareaHTMLAttributes,
} from "react";
import {Color, Size} from "@/styles/globals";
import {ColorValueHex} from "@/types/common";

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
