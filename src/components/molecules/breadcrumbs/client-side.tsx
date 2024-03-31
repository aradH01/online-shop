'use client';

import {usePathname} from 'next/navigation';
import {useMemo} from 'react';
import {generateLinkOutput} from './utils/generateLinkOutput';
import Breadcrumb from './breadcrumbs';
import {BreadCrumbsProps} from "@/types/components-types";
import {addClass} from "@/utils/classNames";

export const ClientBreadcrumbs = ({
                                      color = '#101A26',
                                      icon = {fill: '#101A26', opacity: 100},
                                      className = '',
                                  }: BreadCrumbsProps) => {
    const pathname = usePathname();

    const breadCrumbsComputed: BreadCrumbsProps['crumbs'] = useMemo(() => {
        return generateLinkOutput(pathname);
    }, [pathname]);

    if (breadCrumbsComputed.length > 1)
        return (
            <span className={addClass('flex flex-wrap items-center', className)}>
				{breadCrumbsComputed?.map((breadcrumb, _, arr) => {
                    const activeRoute = breadcrumb === arr.at(-1);
                    return (
                        <Breadcrumb
                            {...{activeRoute, color, icon, breadcrumb}}
                            key={breadcrumb?.label}
                        />
                    );
                })}
			</span>
        );
};
