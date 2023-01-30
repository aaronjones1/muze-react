import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MButton from '../components/m-button/MButton';

export default {
  title: 'Muze Button',
  component: MButton,
} as Meta<typeof MButton>;

const Template: StoryFn<typeof MButton> = (args) => <MButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Muze Button',
  size: 'medium',
};
