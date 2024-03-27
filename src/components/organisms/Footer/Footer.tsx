import styled from "@emotion/styled";
import Image from "next/image";
import {Input} from "@/components/molecules/Input/Input";
import {Button} from "@/components/molecules/Button/Buttom";
import Link from "next/link";
import {Icon} from "@/components/atoms/Icon";
import {MediaLinks} from "@/constants/SocialMediaLinks";


const FooterWrapper = styled.div`
  background-color: ${({theme}) => theme.components.primary};
  width: 100%;
  padding: 80px 48px 46px;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media all and (max-width: 868px) {
    flex-direction: column;
  }
`
const Form = styled.div`
  width: 30%;
  margin-right: 111px;
  margin-top: 46px;

  p {
    color: ${({theme}) => theme.font.white};
    font-size: 2rem;
    font-weight: 400;
  }

  @media all and (max-width: 868px) {
    width: 80%;
    margin: 46px auto;
  }
`
const StyledButton = styled(Button)`
  background: ${({theme}) => theme.components.linearButton};
  margin-top: 1.5rem;
`
const StyledInput = styled(Input)`
  input {
    border-radius: 500px !important;

  }
`
const LinksTitle = styled.p`
  color: ${({theme}) => theme.font.grayMedium};
  font-size: 20px;
  font-weight: 400;
`
const Contant = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${({theme}) => theme.font.white};
    font-size: 16px;
    font-weight: 400;
  }

`
const StyledLink = styled(Link)`
  color: ${({theme}) => theme.font.white};
  font-size: 16px;
  font-weight: 600;
`
const CopyDec = styled.span`
  color: ${({theme}) => theme.font.grayLight};
  font-size: 16px;
  font-weight: 400;
  opacity: 0.7;
  margin-right: 1.5rem;
  text-align: center;
`
export default function Footer() {
    const GetInTouchLinks = [
        {}
    ]
    const MoreLinks = [
        {}
    ]
    const CorporateLinks = [
        {}
    ]

    return (
        <FooterWrapper>
            <div className="w-[84rem] max-w-[95%] mx-auto">
                <Image src="" alt='Trigan Logo'/>
                <div>
                    <Content>
                        <div
                            className="flex flex-col sm:flex-row items-center sm:items-start lt:w-[70%] justify-center sm:justify-end lt:gap-[40px] gap-[16px] w-full">
                            {/*<div className="flex flex-wrap flex-col items-center sm:items-start gap-[24px]">
                                <LinksTitle>Get in touch</LinksTitle>
                                {GetInTouchLinks.map((link) => (
                                    <StyledLink href={link.href} key={link.id}>{link.title}</StyledLink>
                                ))}
                            </div>
                            <div className="flex flex-wrap flex-col items-center sm:items-start gap-[24px]">
                                <LinksTitle>More</LinksTitle>
                                {MoreLinks.map((link) => (
                                    <StyledLink href={link.href} key={link.id}>{link.title}</StyledLink>
                                ))}
                            </div>
                            <div className="flex flex-wrap flex-col items-center sm:items-start gap-[24px]">
                                <LinksTitle>Corporate</LinksTitle>
                                {CorporateLinks.map((link) => (
                                    <StyledLink href={link.href} key={link.id}>{link.title}</StyledLink>
                                ))}
                            </div>*/}
                            <div className="flex flex-wrap flex-col gap-[24px]">
                                <LinksTitle className="text-center sm:text-start">More information</LinksTitle>
                                <div className="flex flex-col gap-[24px] items-center sm:items-start">
                                    <Contant>
                                        <Icon name="Location"/>
                                        <span>ghfhfghgfh</span>
                                    </Contant>
                                    <Contant>
                                        <Icon name="Phone"/>
                                        <span>+455445654645</span>
                                    </Contant>
                                    <div className="flex items-center gap-[16px]">
                                        <Link href={MediaLinks.facebook}>
                                            <Icon name="Facebook"/>
                                        </Link>
                                        <Link href={MediaLinks.instagram}>
                                            <Icon name="Instagram"/>
                                        </Link>
                                        <Link href={MediaLinks.telegram}>
                                            <Icon name="Telegram"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Content>
                    <div className="flex flex-col sm:flex-row items-center mt-[40px] justify-center">
                        <CopyDec>&copy; 2019 - 2023 fdfsdfsdfsdfsdfsdf</CopyDec>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    )
}
