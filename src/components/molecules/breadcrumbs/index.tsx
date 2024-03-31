import {ClientBreadcrumbs} from './client-side';
import {StaticBreadcrumbs} from './static';
import {BreadCrumbsProps} from "@/types/components-types";

export const BreadCrumbs = ({
                                crumbs,
                                color = '#101A26',
                                icon = {fill: '#101A26', opacity: 100},
                                className = '',
                            }: BreadCrumbsProps) => {
    if (crumbs)
        return <StaticBreadcrumbs {...{className, icon, color, crumbs}} />;

    return <ClientBreadcrumbs {...{className, icon, color}} />;
};
