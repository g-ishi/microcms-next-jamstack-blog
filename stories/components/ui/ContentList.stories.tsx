import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ContentList from '@/components/ui/ContentList';

export default {
  title: 'UI/ContentList',
  component: ContentList,
} as ComponentMeta<typeof ContentList>;

const Template: ComponentStory<typeof ContentList> = (args) => (
  <ContentList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  contents: [
    {
      link: 'blogs/1',
      image: {
        src: 'https://images.unsplash.com/photo-1676614722679-8ab239411924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80',
        alt: 'external-image',
      },
      title: 'item-title',
      shortDescription:
        'みなも前いよいよその発見屋という方の所をなるますた。あたかも場合から相違年はよくその下宿べきでまでがやるているたがも講義なりませうと、当然にもしたたんませ。絵に要らですのはやはり前をすでにですまします。',
      date: '2023/02/28',
      personInCharge: 'person-in-charge',
    },
    {
      link: 'blogs/1',
      image: {
        src: 'https://images.unsplash.com/photo-1676614722679-8ab239411924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80',
        alt: 'external-image',
      },
      title: 'item-title',
      shortDescription:
        'みなも前いよいよその発見屋という方の所をなるますた。あたかも場合から相違年はよくその下宿べきでまでがやるているたがも講義なりませうと、当然にもしたたんませ。絵に要らですのはやはり前をすでにですまします。',
      date: '2023/02/28',
      personInCharge: 'person-in-charge',
    },
    {
      link: 'blogs/1',
      image: {
        src: 'https://images.unsplash.com/photo-1676614722679-8ab239411924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80',
        alt: 'external-image',
      },
      title: 'item-title',
      shortDescription:
        'みなも前いよいよその発見屋という方の所をなるますた。あたかも場合から相違年はよくその下宿べきでまでがやるているたがも講義なりませうと、当然にもしたたんませ。絵に要らですのはやはり前をすでにですまします。',
      date: '2023/02/28',
      personInCharge: 'person-in-charge',
    },
    {
      link: 'blogs/1',
      image: {
        src: 'https://images.unsplash.com/photo-1676614722679-8ab239411924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80',
        alt: 'external-image',
      },
      title: 'item-title',
      shortDescription:
        'みなも前いよいよその発見屋という方の所をなるますた。あたかも場合から相違年はよくその下宿べきでまでがやるているたがも講義なりませうと、当然にもしたたんませ。絵に要らですのはやはり前をすでにですまします。',
      date: '2023/02/28',
      personInCharge: 'person-in-charge',
    },
    {
      link: 'blogs/1',
      image: {
        src: 'https://images.unsplash.com/photo-1676614722679-8ab239411924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80',
        alt: 'external-image',
      },
      title: 'item-title',
      shortDescription:
        'みなも前いよいよその発見屋という方の所をなるますた。あたかも場合から相違年はよくその下宿べきでまでがやるているたがも講義なりませうと、当然にもしたたんませ。絵に要らですのはやはり前をすでにですまします。',
      date: '2023/02/28',
      personInCharge: 'person-in-charge',
    },
    {
      link: 'blogs/1',
      image: {
        src: 'https://images.unsplash.com/photo-1676614722679-8ab239411924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80',
        alt: 'external-image',
      },
      title: 'item-title',
      shortDescription:
        'みなも前いよいよその発見屋という方の所をなるますた。あたかも場合から相違年はよくその下宿べきでまでがやるているたがも講義なりませうと、当然にもしたたんませ。絵に要らですのはやはり前をすでにですまします。',
      date: '2023/02/28',
      personInCharge: 'person-in-charge',
    },
  ],
};
