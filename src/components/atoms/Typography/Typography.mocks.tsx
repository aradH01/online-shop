import {TextProps, TitleProps,} from '@/components/atoms/Typography/Typography';

const title: TitleProps = {
    size: 'md',
    weight: 'medium',
    children: 'I a title',
    level: 'h1',
    color: 'primary',
};
const text: TextProps = {
    size: 'md',
    weight: 'medium',
    children: 'I a Text',
    color: 'primary',
};

const paragraph: TextProps = {
    size: 'md',
    weight: 'medium',
    children: 'I a Paragraph',
    color: 'primary',
};

export const mockTypographyProps = {
    title,
    text,
    paragraph,
};
