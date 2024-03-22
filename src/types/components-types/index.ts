import {AvailableIcons} from "@/components/atoms/Icon";
import {
    AriaAttributes,
    DetailedHTMLProps, InputHTMLAttributes,
    MouseEvent, TextareaHTMLAttributes,
} from "react";
import {Size} from "@/styles/globals";

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
