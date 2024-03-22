import {ComponentMeta, ComponentStory} from "@storybook/react";
import {mockTypographyProps} from "@/components/atoms/Typography/Typography.mocks";
import {titleLevelOptions, Typography} from "@/components/atoms/Typography/Typography";
import {typographySizeOptions, typographyWeightOptions} from "@/styles/globals";
import {FontColorKeys} from "@/styles/Themes";


const {Title} = Typography;

export default {
    title: 'atoms/Typography/Title',
    component: Title,
} as ComponentMeta<typeof Title>;

export const BaseTitle: ComponentStory<typeof Title> = (args) => (
    <Title {...args} />
);

BaseTitle.args = {
    ...mockTypographyProps.title,
};

BaseTitle.argTypes = {
    level: {
        options: titleLevelOptions,
        control: {type: 'select'},
    },
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
