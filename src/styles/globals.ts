import {read} from '@/utils/LocalStorage';
import {settings} from "@/styles/Settings";
import {AppTheme} from "@/styles/Themes";
import {css, SerializedStyles} from "@emotion/react";

export type Size = 'xsm ' | 'sm' | 'md' | 'lg' | 'xlg' | 'xxlg';
export type ColorEffect = 'solid' | 'linear';
export type Variant = 'text' | 'contained' | 'outlined';

export const colorOptions = [
    'primary',
] as const;
export type Color = (typeof colorOptions)[number];
export const typographySizeOptions = {
    xsm:'14px',
    sm: '16px',
    md: '18px',
    lg: '24px',
    xlg: '28px',
    xxlg: '48px',
    xxxlg: '82px',
};
export type TypographySize = keyof typeof typographySizeOptions;

export const typographyWeightOptions = {
    normal: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
};
export const textColorOptions = [
    'regular',
    'nonActive',
    'placeholder',
    'warning',
    'accent',
    'success',
    'danger',
    'info',
    'currentColor',
] as const;
export type TextColor = (typeof textColorOptions)[number];

export const GlobalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    color: var(--themeColor);
    font-family: ${settings.fontFamily};
  }
`;

export const getSize = (
    size?: Size,
    width?: string,
    borderRadius?: string
): SerializedStyles => {
    if (size === 'sm') {
        return css`
          width: ${width ? width : 'auto'};
          height: ${settings.elementHeight_sm};
          font-size: ${typographySizeOptions.sm};
          border-radius: ${borderRadius};
        `;
    }
    if (size === 'md') {
        return css`
          width: ${width ? width : '10rem'};
          height: ${settings.elementHeight_md};
          font-size: ${typographySizeOptions.md};
          border-radius: ${borderRadius};
        `;
    }
    if (size === 'lg') {
        return css`
          width: ${width ? width : '15rem'};
          height: ${settings.elementHeight_lg};
          font-size: ${typographySizeOptions.lg};
          border-radius: ${borderRadius};
        `;
    }
    if (size === 'xlg') {
        return css`
          width: ${width ? width : '15rem'};
          height: ${settings.elementHeight_xlg};
          font-size: ${typographySizeOptions.lg};
          border-radius: ${borderRadius};
        `;
    }
    return css``;
};

export const getColors = (
    color: Color,
    variant: Variant,
    theme?: AppTheme
): SerializedStyles => {
    return css`
      background: ${variant === 'contained'
              ? theme?.components[color]
              : 'transparent'} !important;
      color: ${variant === 'contained'
              ? theme?.font.button
              : theme?.components[color]};
      border: ${variant !== 'text'
              ? `2px solid ${theme?.components[color]}`
              : 'none'};

      &:hover:not([disabled]) {
        filter: brightness(110%);
        color: ${variant === 'contained' ? theme?.font.button : ``};
      }

      &:disabled {
        cursor: not-allowed;
        background: ${variant === 'contained'
                ? theme?.components.nonActive
                : 'transparent'};
        color: ${variant === 'contained'
                ? theme?.font.nonActive
                : theme?.components.nonActive};
        border: ${variant !== 'text'
                ? `2px solid ${theme?.components.nonActive}`
                : 'none'};
        box-shadow: none;
      }
    `;
};

export const getTileSize = (
    width?: string,
    height?: string
): SerializedStyles => css`
  width: ${width};
  height: ${height};
  border-radius: ${settings.borderRadius_sm};
`;

export const getIsDark = (): boolean => {
    const theme = read('theme');
    const themeExistsInStorage = Boolean(theme !== null);
    return themeExistsInStorage
        ? Boolean(theme === 'dark')
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const getInputColors = (
    status: Color,
    variant: Variant,
    isBordered?: boolean,
    theme?: AppTheme
): SerializedStyles => {
    return css`
      background: ${variant === 'contained' ? theme?.background : 'transparent'};
      color: ${theme?.font.primary};
      border-width: ${isBordered ? `1px` : 'none'};
      border-style: ${isBordered ? `solid` : 'none'};
      border-color: ${status !== 'primary'
              ? theme?.components[status]
              : '#E4E4E4'};

      &:hover:not([disabled]) {
        color: ${theme?.font.primary};
      }

      &:disabled {
        cursor: not-allowed;
        background: ${variant === 'contained'
                ? theme?.components.nonActive
                : 'transparent'};
        color: ${variant === 'contained'
                ? theme?.font.nonActive
                : theme?.components.nonActive};
        border: ${variant !== 'text'
                ? `1px solid ${theme?.components.nonActive}`
                : 'none'};
        box-shadow: none;
      }
    `;
};
