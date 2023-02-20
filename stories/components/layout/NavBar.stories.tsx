import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavBar from '@/components/layouts/NavBar';

export default {
  title: 'Layout/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  pageTitle: {
    title: 'Perfect Company',
    link: '/',
  },
  navItems: [
    {
      title: 'Blogs',
      link: '/blogs',
    },
    {
      title: 'Solutions',
      link: '/solutions',
    },
    {
      title: 'Cases',
      link: '/cases',
    },
    {
      title: 'Members',
      link: '/members',
    },
  ],
};
