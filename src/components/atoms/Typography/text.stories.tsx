import {Typography} from "@/components/atoms/Typography/Typography";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {mockTypographyProps} from "@/components/atoms/Typography/Typography.mocks";
import {textColorOptions, typographySizeOptions, typographyWeightOptions} from "@/styles/globals";

const {Text} = Typography;

export default {
    title: 'atoms/Typography/Text',
    component: Text,
} as ComponentMeta<typeof Text>;

export const BaseText: ComponentStory<typeof Text> = (args) => (
    <Text {...args} />
);

BaseText.args = {
    ...mockTypographyProps.text,
};

BaseText.argTypes = {
    size: {
        options: Object.keys(typographySizeOptions),
        control: {type: 'select'},
    },
    weight: {
        options: Object.keys(typographyWeightOptions),
        control: {type: 'select'},
    },
    color: {
        options: textColorOptions,
        control: {type: 'select'},
    },
};
