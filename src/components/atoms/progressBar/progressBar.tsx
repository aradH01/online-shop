
import React from "react";
import styled from "@emotion/styled";

export interface IProgressBar{
    width:number
}

export const ProgressBar:React.FC<IProgressBar> =({width})=>{
    const Container=styled.div`
      width: 100%;
    `
    const Progressbar=styled.div`
        background-color: ${({theme})=>theme.components.tableBorder};
      width: 100%;
      height: 0.4rem;
      overflow: hidden;
      border-radius: 16px;
    `
    const ProgressLoading=styled.div`
    background-color:  ${({theme})=>theme.font.success};
      width: ${width}%;
      height: 0.4rem;
      border-radius: 16px;
    `
    return(
        <Container>
            <Progressbar>
                <ProgressLoading/>
            </Progressbar>

        </Container>
    )
}
