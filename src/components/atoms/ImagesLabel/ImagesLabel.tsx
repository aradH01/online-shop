import styled from "@emotion/styled";
import {ImagesLabelProps} from "@/types/components-types";

const Wrapper = styled.div`
  padding: 10px 16px;
  background-color: ${({theme}) => theme.components.lightPrimary};
  border-radius: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;

  span {
    color: #FCFCFC;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
  }
`

export default function ImagesLabel({title, className}: ImagesLabelProps) {
    return (
        <Wrapper className={className}>
            <span>{title}</span>
        </Wrapper>
    )
}
