import {addClass} from "@/utils/classNames";
import {Icon} from "@/components/atoms/Icon";
import Link from "next/link";
import styled from "@emotion/styled";
import {usePathname} from "next/navigation";
import {Path} from "@/constants/enums";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background: #F5F5F7;
  padding: 1.5rem 0;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  a {
    color: ${({theme}) => theme.font.primary};
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    cursor: pointer;

    &.disable {
      color: #6E6E73;
      pointer-events: none;
      cursor: not-allowed;
    }

    &.link {
      color: #5E9CBF;
    }
  }
`;
export default function SubHeader(props:{className?:string}){
    const url = usePathname()
    return(
        <Wrapper
            className={addClass(props.className)}>
            <div className="w-[84rem] max-w-[95%] flex justify-between items-center flex-col sm:flex-row">
                <div className="flex items-center justify-evenly w-full flex-wrap gap-[24px] mb-4 md:mb-0">
                    <div className="flex items-center gap-2">
                        <Icon name="ProfileV2" className="w-6 h-6"/>
                        <Link href={Path.Dashboard} className={addClass(Path.Dashboard === url ? "disable" : '')}>اطلاعات کاربری</Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <Icon name="LocationV2" className="w-6 h-6"/>
                        <Link href={Path.Addresses} className={addClass( Path.Addresses === url ? "disable" : '')}>آدرس ها</Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <Icon name="Notification" className="w-6 h-6"/>
                        <Link href={Path.Notification} className={addClass(Path.Notification === url ? "disable" : '')}>پیغام ها</Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <Icon name="Heart" className="w-6 h-6"/>
                        <Link href={Path.Favorites} className={addClass(Path.Favorites === url ? "disable" : '')}>لیست ها</Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <Icon name="Bag" className="w-6 h-6"/>
                        <Link href={Path.OrdersList} className={addClass(Path.OrdersList === url ? "disable" : '')}>سفارش ها</Link>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
