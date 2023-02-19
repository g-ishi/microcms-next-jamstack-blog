import { useRouter } from 'next/router';
import ContentDetail from '@/components/ui/ContentDetail';

const _content = {
  title: 'content title',
  image: {
    src: 'https://images.unsplash.com/photo-1676614722679-8ab239411924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80',
    alt: 'external-image',
  },
  mainContent:
    'みなも前いよいよその発見屋という方の所をなるますた。あたかも場合から相違年はよくその下宿べきでまでがやるているたがも講義なりませうと、当然にもしたたんませ。絵に要らですのはやはり前をすでにですまします。',
  personInCharge: 'person-in-charge',
  date: '2023/02/28',
};

const BlogDetail = () => {
  const router = useRouter();
  const { blogId } = router.query;

  return <ContentDetail {..._content} />;
};

export default BlogDetail;
