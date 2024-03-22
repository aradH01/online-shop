import styled from "@emotion/styled";
import {Button} from "@/components/molecules/Button/Buttom";
import {ErrorButtonProps} from "@/types/components-types";

const StyledButton = styled(Button)`
  width: fit-content;
  background-color: #F44A50;
  padding: 0 4rem;
  svg{
    animation: none;
    color: #FCFCFC;
    path{
      stroke: #FCFCFC;
    }
  }
`
export default function ErrorButton({title, onClick}: ErrorButtonProps) {
    return (
        <StyledButton title={title ?? "reload"} icon="Loading" onClick={onClick}/>
    )
}
