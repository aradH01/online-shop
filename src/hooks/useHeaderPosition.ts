import {useMemo} from 'react';
import {useScrollPosition} from './useScrollPosition';
import {usePathname} from 'next/navigation';

export const useThemeHeader = () => {
    const scroll = useScrollPosition();
    const pathname = usePathname();

    const computedThemeHeader: 'SubHeader' | 'Header' = useMemo(() => {
        if (scroll > 140) {
            return 'SubHeader';
        }
        return 'Header';
    }, [scroll]);

    return computedThemeHeader;
};
