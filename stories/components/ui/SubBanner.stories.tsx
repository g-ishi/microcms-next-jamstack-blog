import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SubBanner from '@/components/ui/SubBanner';

export default {
  title: 'UI/SubBanner',
  component: SubBanner,
} as ComponentMeta<typeof SubBanner>;

const Template: ComponentStory<typeof SubBanner> = (args) => (
  <SubBanner {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  subTitle: 'Perfect Company',
  subText:
    'Perfect CompanyPerfect CompanyPerfect CompanyPerfect CompanyPerfect CompanyPerfect CompanyPerfect CompanyPerfect CompanyPerfect Company',
  image: {
    src: 'https://images.unsplash.com/photo-1676614722679-8ab239411924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80',
    alt: 'external-image',
  },
};
