import {TextProps, Typography,} from '@/components/atoms/Typography/Typography';
import {mockTypographyProps} from '@/components/atoms/Typography/Typography.mocks';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {typographySizeOptions, typographyWeightOptions} from "@/styles/globals";
import {FontColorKeys} from "@/styles/Themes";

const {Paragraph} = Typography;

export default {
    title: 'atoms/Typography/Paragraph',
    component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

export const BaseParagraph: ComponentStory<typeof Paragraph> = (args) => (
    <Paragraph {...args} />
);

BaseParagraph.args = {
    ...mockTypographyProps.paragraph,
} as TextProps;

BaseParagraph.argTypes = {
    size: {
        options: Object.keys(typographySizeOptions),
        control: {type: 'select'},
    },
    weight: {
        options: Object.keys(typographyWeightOptions),
        control: {type: 'select'},
    },
    color: {
        options: FontColorKeys,
        control: {type: 'select'},
    },
};
