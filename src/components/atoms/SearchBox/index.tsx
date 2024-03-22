import styled from "@emotion/styled";
import {Icon} from "@/components/atoms/Icon";
import {SearchBoxProps} from "@/types/components-types";

const Wrapper = styled.div`
  background-color: transparent;
  padding: 7.5px 6px;
  width: max-content;
  transition: all ease 500ms;

  &.error {
    input {
      border-color: red !important;
    }
  }

  .group {
    position: relative;
    width: 100%;
    text-align: left;

    input {
      text-align: left;
      padding: 10px 10px 10px 3.3rem;
      background-color: transparent;
      display: block;
      transition: all ease 500ms;
      width: 1px;
      color: ${({theme}) => theme.font.primary};

      &:focus, &:valid {
        outline: none;
        background-color: #fff !important;
        width: 15rem !important;
        transition: all ease 500ms;
        border: 1px solid #000;
        @media all and (max-width: 700px) {
          width: 10rem !important;
        }

        ~ .icon {
          &::after {
            display: unset;
          }
        }
      }
    }

    .icon {
      position: absolute;
      top: 13px;
      left: 12px;

      &::after {
        display: none;
        content: "";
        width: 1.5px;
        background-color: #6b6b6b;
        height: 18px;
        position: absolute;
        left: 30px;
        top: 2px;
      }
    }

  }

  .error {
    color: red;
    margin: 5px 8px;
    font-size: 12px;
  }

`
const StyledIcon = styled(Icon)`
  position: absolute;
  top: 13px;
  left: 12px;
  pointer-events: none;

  &::after {
    display: none;
    content: "";
    width: 1.5px;
    background-color: #6b6b6b;
    height: 18px;
    position: absolute;
    left: 30px;
    top: 2px;
  }
`
export default function SearchBox({className, error, onChange, type = "text", placeholder, label, onClick, onFocus, onBlur, id, ...props}: SearchBoxProps) {
    return (
        <Wrapper className={`search-box ${className ?? ''} ${error ? "error" : ''}`} onClick={onClick}>
            <div className="group">

                <input required type={type} onFocus={onFocus} onBlur={onBlur} onChange={onChange}
                       placeholder={placeholder} {...props} aria-label="Search" className="cursor-pointer"/>

                <StyledIcon name="Search"/>
            </div>
            {error &&
                <span className="error">
              {error}
            </span>
            }
        </Wrapper>
    )
}
