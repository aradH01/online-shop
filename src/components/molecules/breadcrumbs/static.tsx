import Breadcrumb from './breadcrumbs';
import {addClass} from "@/utils/classNames";
import {BreadCrumbsProps} from "@/types/components-types";

export const StaticBreadcrumbs = ({
                                      crumbs,
                                      color = '#101A26',
                                      icon = {fill: '#101A26', opacity: 100},
                                      className = '',
                                  }: BreadCrumbsProps) => {
    return (
        <span className={addClass('flex flex-row-reverse flex-wrap items-center', className)}>
			{crumbs?.map((breadcrumb, _, arr) => {
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
