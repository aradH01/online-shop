import Link from 'next/link';
import {addClass} from "@/utils/classNames";
import {BreadCrumbsProps} from "@/types/components-types";

type BreadCrumbProps = {
    breadcrumb: Required<BreadCrumbsProps>['crumbs'][0];
    activeRoute: boolean;
    icon: BreadCrumbsProps['icon'];
    color: BreadCrumbsProps['color'];
};
const Breadcrumb = ({
                        color = '#101A26',
                        icon = {fill: '#101A26', opacity: 100},
                        breadcrumb,
                        activeRoute,
                    }: BreadCrumbProps) => {
    return (
        <>
            {breadcrumb.static !== true && breadcrumb.href !== '/' && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={addClass(
                        `${icon.opacity === 50 ? 'opacity-50' : 'opacity-100'}`,
                        'mx-2',
                    )}
                >
                    <path
                        d="M8.6998 17.3008C8.51647 17.1174 8.4248 16.8841 8.4248 16.6008C8.4248 16.3174 8.51647 16.0841 8.6998 15.9008L12.5998 12.0008L8.6998 8.10078C8.51647 7.91745 8.4248 7.68411 8.4248 7.40078C8.4248 7.11745 8.51647 6.88411 8.6998 6.70078C8.88314 6.51745 9.11647 6.42578 9.3998 6.42578C9.68314 6.42578 9.91647 6.51745 10.0998 6.70078L14.6998 11.3008C14.7998 11.4008 14.8708 11.5091 14.9128 11.6258C14.9548 11.7424 14.9755 11.8674 14.9748 12.0008C14.9748 12.1341 14.9538 12.2591 14.9118 12.3758C14.8698 12.4924 14.7991 12.6008 14.6998 12.7008L10.0998 17.3008C9.91647 17.4841 9.68314 17.5758 9.3998 17.5758C9.11647 17.5758 8.88314 17.4841 8.6998 17.3008Z"
                        fill={icon.fill}
                    />
                </svg>
            )}
            <Link
                prefetch={false}
                href={breadcrumb.href}
                style={{color}}
                className={addClass(
                    'text-[18px] font-bold capitalize transition-all leading-[2.4rem]',
                    activeRoute
                        ? 'opacity-50 pointer-events-none'
                        : 'opacity-100 cursor-pointer',
                )}
            >
                {breadcrumb.label}
            </Link>
        </>
    );
};

export default Breadcrumb;
