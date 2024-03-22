import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ILoadingCircle, LoadingCircle} from './LoadingCircle';
import {mockLoadingCircleProps} from './LoadingCircle.mocks';

export default {
    title: 'atoms/LoadingCircle',
    component: LoadingCircle,
    argTypes: {},
} as ComponentMeta<typeof LoadingCircle>;

const Template: ComponentStory<typeof LoadingCircle> = (args) => (
    <LoadingCircle {...args} />
);

export const Base = Template.bind({});
Base.args = {
    ...mockLoadingCircleProps.base,
} as ILoadingCircle;
