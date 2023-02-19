import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ContentDetail from '@/components/ui/ContentDetail';

export default {
  title: 'UI/ContentDetail',
  component: ContentDetail,
} as ComponentMeta<typeof ContentDetail>;

const Template: ComponentStory<typeof ContentDetail> = (args) => (
  <ContentDetail {...args} />
);

export const Primary = Template.bind({});
// Primary.args = {
//   companyName: 'Perfect Company',
//   companyDescription:
//     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
//   email: 'xxxxx@perfect.company.com',
//   phoneNumber: 'xx-xxxx-xxxx-xxxx',
// };
