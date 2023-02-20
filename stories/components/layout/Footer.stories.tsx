import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from '@/components/layouts/Footer';

export default {
  title: 'Layout/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  companyName: 'Perfect Company',
  companyDescription:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  email: 'xxxxx@perfect.company.com',
  phoneNumber: 'xx-xxxx-xxxx-xxxx',
};
