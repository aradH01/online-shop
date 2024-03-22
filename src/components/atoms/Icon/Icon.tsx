import React, {FC} from 'react';
import styled from '@emotion/styled';

import {Icons} from './Icons';
import {TypographySize, typographySizeOptions} from '@/styles/globals';

export type AvailableIcons = keyof typeof Icons;

export type Props = {
    /** Icon name */
    name: AvailableIcons;
    size?: TypographySize;
    color?: string;
} & React.SVGProps<SVGSVGElement>;

export const Icon: FC<Props> = ({name, size = 'md', color, ...rest}) => {
    const Icon = styled(Icons[name])`
      color: ${color ? color : ({theme}) => theme.font.primary};
    `;

    const sizeInRem = `${typographySizeOptions[size]}`;
    const sizes = {width: sizeInRem, height: sizeInRem};

    return <Icon role="img" aria-label={name} {...sizes} {...rest} />;
};
