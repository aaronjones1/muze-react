import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MButton from '../components/m-button/MButton';

export default {
  title: 'Muze Button',
  component: MButton,
} as ComponentMeta<typeof MButton>;

const Template: ComponentStory<typeof MButton> = () => <MButton text='Muze Button' />;

export const Default = Template.bind({});