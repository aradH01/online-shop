import {forwardRef, useId} from "react";
import {TextareaProps} from "@/types/components-types";
import styled from "@emotion/styled";

const StyledInput = styled.textarea`
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  text-align: left;
  margin-top: 8px;
  padding: 16px 0 16px 16px;
  background-color: ${({theme}) => theme.components.white};
  border: 1px solid ${({theme}) => theme.font.grayMedium};
  transition: 600ms ease all;
  display: block;
  color: ${({theme}) => theme.font.grayMedium};

  &:hover {
    border: 1px solid rgb(136, 176, 230);

  }

  &:focus {
    outline: none;
    border: 1px solid #8b96f9;
    box-shadow: 0px 0px 10px 0px rgba(64, 64, 64, 0.6);
  }
`
const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  pointer-events: none;
  transition: 300ms ease all;
  top: 32%;
  left: 28px;
  color: ${({theme}) => theme.font.grayMedium};
`
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        {
            rows = 6,
            placeholder = 'Enter your message',
            className,
            id,
            error,
            label,
            ...props
        },
        ref,
    ) => {
        const generatedId = useId();
        const inputId = id ?? generatedId;

        return (
            <div className={className}>
                {label && (
                    <Label
                        htmlFor={inputId}
                    >
                        {label}
                    </Label>
                )}
                <div className="min-w-fit max-w-full">
                    <StyledInput
                        id={inputId}
                        rows={rows}
                        autoFocus={false}
                        placeholder={placeholder}
                        {...props}
                        ref={ref}
                    />
                    {error && <p className="text-[15px] text-[#e03131] py-1">{error}</p>}
                </div>
            </div>
        );
    },
);
Textarea.displayName = 'Textarea';
