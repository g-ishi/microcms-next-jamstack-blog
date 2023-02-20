import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MainBanner from '@/components/ui/MainBanner';

export default {
  title: 'UI/MainBanner',
  component: MainBanner,
} as ComponentMeta<typeof MainBanner>;

const Template: ComponentStory<typeof MainBanner> = (args) => (
  <MainBanner {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  mainTitle: 'Perfect Company',
  mainText:
    'Perfect CompanyPerfect CompanyPerfect CompanyPerfect CompanyPerfect CompanyPerfect CompanyPerfect CompanyPerfect CompanyPerfect Company',
  image: {
    src: 'https://images.unsplash.com/photo-1676614722679-8ab239411924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80',
    alt: 'external-image',
  },
};
