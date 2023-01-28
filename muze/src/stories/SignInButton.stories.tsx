import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SignInButton from '../components/signin-button/SignInButton';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Sign-in Button',
  component: SignInButton,
} as ComponentMeta<typeof SignInButton>;

const Template: ComponentStory<typeof SignInButton> = () => <SignInButton />;

export const Default = Template.bind({});