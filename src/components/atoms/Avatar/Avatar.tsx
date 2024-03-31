import React from 'react';
import styled from '@emotion/styled';
import {Typography} from '@/components/atoms/Typography';
import {AvatarProps} from "@/types/components-types";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 52px;
  width: 52px;
`;

const WrapperText = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 100%;
  height: 100%;
  background: ${({theme}) => theme.components.linearButton};
  color: ${({theme}) => theme.font.white};

  span {
   
  }
`;

export const Avatar: React.FC<AvatarProps> = ({
                                                  color,
                                                  text,
                                                  className
                                              }) => {
    return (
        <Wrapper color={color} className={className}>
            <WrapperText>
                <Typography.Text weight="semiBold" size="md">
                    {text}
                </Typography.Text>
            </WrapperText>
        </Wrapper>
    );
};
