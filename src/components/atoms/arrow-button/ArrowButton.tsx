import {ArrowButtonProps} from "@/types/components-types";
import {Icon} from "@/components/atoms/Icon";
import styled from "@emotion/styled";
import {addClass} from "@/utils/classNames";

const Wrapper = styled.div`

  border-radius: 100%;
  padding: 16px;
  border: 2px ${({theme}) => theme.components.primary} solid !important;
  background: ${({theme}) => theme.components.primary};

  &:hover {
    box-shadow: 0px 0px 15px 1px rgba(217, 217, 217, 0.75) inset;
  }

  &.outlined {
    border: 2px ${({theme}) => theme.components.primary} solid !important;
    color: transparent !important;
    background-color: transparent !important;

    &:hover {
      box-shadow: 0px 0px 15px 1px rgba(209, 209, 209, 0.75) inset;
    }
  }
`
export const ArrowButton = ({outlined, onClick, className}: ArrowButtonProps) => {
    return (
        <Wrapper className={addClass(className, outlined ? "outlined" : '')} onClick={onClick}>
            {outlined ?
                <Icon name="SliderArrowDark"/>
                :
                <Icon name="SliderArrowLight"/>
            }
        </Wrapper>
    );
};
