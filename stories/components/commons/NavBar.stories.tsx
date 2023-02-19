import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavBar from 'components/layout/NavBar';

export default {
  title: 'Layout/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
