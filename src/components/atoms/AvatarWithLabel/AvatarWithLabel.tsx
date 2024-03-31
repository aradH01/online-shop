import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import {Avatar} from "@/components/atoms/Avatar";
import {AvatarButtonProps} from "@/types/components-types";

const Wrapper = styled.div`
  display: flex;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: space-between;
`;

const AvatarWrapper = styled.div`
  margin: auto 0;

  span:first-of-type {
    color: ${({theme}) => theme.font.white};
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.008em;
  }
`;

export const AvatarWithLabel: React.FC<AvatarButtonProps> = ({
                                                                 title,
                                                                 avatar,
                                                                 className,
                                                                 avatarClass,
                                                             }) => {
    return (
        <Wrapper className={className}>
            <AvatarWrapper>
                {avatar ? (
                    <Image
                        src={avatar}
                        alt="ProfileImage"
                        width="32"
                        height="32"
                        className="rounded-full"
                    />
                ) : (
                    <Avatar text={title.slice(0, 2).toUpperCase()} className={avatarClass}/>
                )}
            </AvatarWrapper>
        </Wrapper>
    );
};
