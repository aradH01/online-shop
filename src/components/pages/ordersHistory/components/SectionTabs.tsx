import React from 'react';
import styled from '@emotion/styled';
import {OrderHistoryTabsProps} from "@/types/components-types";
import {addClass} from "@/utils/classNames";
import {useRouter, useSearchParams} from "next/navigation";


const Wrapper = styled.div`
  display: flex;
  border-bottom: 2px solid ${({theme}) => theme.components.primary};
`;
const Tab = styled.div`
  min-width: 156px;
  text-align: center;
  padding: 1rem 2rem;
  color: ${({theme}) => theme.font.primary};
  cursor: pointer;

  span {
    font-size: 18px;
    font-weight: 600;
    color: ${({theme}) => theme.font.primary};
  }

  &.active {
    position: relative;

    span {
      font-size: 18px;
      font-weight: 600;
      color: ${({theme}) => theme.font.componentPrimary};
    }

    &::after {
      border-bottom: 5px solid ${({theme}) => theme.components.primary};
      border-radius: 200px 200px 0 0;
      --bar-height: 2px;
      position: absolute;
      content: '';
      width: 100%;
      left: 0;
      bottom: calc(-1 * var(--bar-height));
      height: var(--bar-height);
      background-image: ${({theme}) => theme.components.primary};
    }
  }

  &.isDisplay {
    opacity: 0.5;

    pointer-events: none;
    cursor: no-drop !important;
  }
`;


export const OrderHistoryTabs = ({setCurrentTab, currentTab, tabs}: OrderHistoryTabsProps) => {
    const router = useRouter()
    // const params = useSearchParams()
    return (
        <Wrapper className="w-full overflow-x-auto overflow-y-hidden">
            <Tab
                onClick={() => {
                    setCurrentTab(2)
                    const tmpParams = new URLSearchParams("1")
                    tmpParams.set("tab", "2")
                    router.replace(`?${tmpParams.toString()}`, {scroll: false})
                }}
                className={addClass(2 == currentTab && 'active')}

            >
                <span> جاری</span>
            </Tab>
            <Tab
                onClick={() => {
                    setCurrentTab(1)
                    const tmpParams = new URLSearchParams("2")
                    tmpParams.set("tab", "1")
                    router.replace(`?${tmpParams.toString()}`, {scroll: false})
                }}
                className={addClass(1 == currentTab && 'active')}

            >
                <span> تحویل داده شده</span>
            </Tab>


        </Wrapper>
    );
};
