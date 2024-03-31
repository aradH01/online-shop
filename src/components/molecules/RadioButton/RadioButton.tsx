import {forwardRef, useId} from 'react';
import styled from "@emotion/styled";
import {RadioButtonProps} from "@/types/components-types";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const Label = styled.label`
  position: relative;
  overflow: hidden;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
`
const Text = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme}) => theme.font.primary};
  cursor: pointer;
  margin-left: 5px;
`
const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  accent-color: ${({theme}) => theme.components.primary};
`
export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
    (
        {
            disabled = false,
            className,
            id,
            label,
            ...rest
        },
        ref,
    ) => {
        const generatedId = useId();
        const Id = id ?? generatedId;

        return (
            <Wrapper className="flex items-center">
                <Label
                    htmlFor={Id}
                    className={className}
                >
                    <StyledInput
                        {...rest}
                        id={Id}
                        ref={ref}
                        type="radio"
                        className="bg-black"
                    />
                    <span
                        className='!absolute inset-0 w-full h-full rounded-full transition-all'
                    />
                </Label>
                <Text
                    htmlFor={Id}
                    className=" font-montserrat text-black ml-4 capitalize cursor-pointer"
                >
                    {label}
                </Text>
            </Wrapper>
        );
    },
);
RadioButton.displayName = 'RadioButton';


