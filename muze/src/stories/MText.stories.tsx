import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MText from '../components/m-text/MText';

export default {
  title: 'Muze Text',
  component: MText,
} as Meta<typeof MText>;

const Template: StoryFn<typeof MText> = (args) => <MText {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'This is the MuzeText component.',
  size: 'medium',
};
