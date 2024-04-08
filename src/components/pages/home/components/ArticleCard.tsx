import Image from "next/image";
import {EventsCardProps} from "@/types/components-types";
import styled from "@emotion/styled";
import Link from "next/link";
import {addClass} from "@/utils/classNames";
import Placeholder from '@/assets/imagePlaceholder.svg'

const Wrapper = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 49.92%, rgba(0, 0, 0, 0.92) 90.24%), lightgray 1.592px -6.754px / 100% 224.37% no-repeat;
  width: fit-content;
`
const Title = styled(Link)`
  color: ${({theme}) => theme.font.primary};
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`
const Description = styled.p`
  color: ${({theme}) => theme.font.grayMedium};
  font-size: 14px;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 13px;
`
const StyledLink = styled(Link)`
  color: ${({theme}) => theme.font.primary};
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  padding-bottom: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.components.primary};
  width: fit-content;
`
const Information = styled.div`
  background: ${({theme}) => theme.components.white};
  filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  overflow: hidden;
  transition: all ease 300ms;
`
export default function ArticleCard({ title, description, href, image, glassMorphism}: EventsCardProps) {
    return (
        <div className="group hover:rounded transition-all w-fit">
            <Wrapper className="relative flex justify-center items-center">
                <Link href={href || '/'}>
                    <div className="w-[350px] h-[440px] max-w-full">
                        <Image src={image} alt={title || "event Picture"} priority
                               fill
                               quality={60}
                               className="hover:scale-[0.95] group-hover:blur-sm  transition-all object-cover"
                               sizes="(max-width: 768px) 50vw 33vw, (max-width: 1200px) 100vw"
                        />

                    </div>
                </Link>
                <Information
                    className="opacity-0 group-hover:opacity-100 transition-all py-[10px] translate-y-[50%] absolute flex flex-col items-center w-[90%] px-6 top-[20%]">
                    <div className="w-full">
                        <Title href={href || '/'}>{title}</Title>
                        <div className="note">
                            <Description>{description}</Description>
                            <StyledLink href={href || '/'}>Read More</StyledLink>
                        </div>
                    </div>
                </Information>
            </Wrapper>
        </div>
    )
}
