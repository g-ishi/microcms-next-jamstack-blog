import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ListItem from '@/components/ui/ListItem';

export default {
  title: 'UI/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => (
  <ListItem {...args} />
);

export const Primary = Template.bind({});
// Primary.args = {
//   companyName: 'Perfect Company',
//   companyDescription:
//     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
//   email: 'xxxxx@perfect.company.com',
//   phoneNumber: 'xx-xxxx-xxxx-xxxx',
// };
