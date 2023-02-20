import type { NextPage, GetStaticProps } from 'next';
import ContentList, { ContentListProps } from '@/components/ui/ContentList';
import { client } from '@/api';

export const getStaticProps: GetStaticProps<ContentListProps> = async () => {
  const res = await client.blogs.$get();
  const contents = res.contents.map(
    ({
      id,
      title,
      shortDescription,
      mainContent,
      image,
      personInCharge,
      updatedAt,
    }) => {
      return {
        link: `/blogs/${id}`,
        title,
        shortDescription,
        mainContent,
        image: {
          src: image.src.url,
          alt: image.alt,
        },
        personInCharge,
        date: updatedAt,
      };
    }
  );
  return {
    props: {
      contents,
    },
  };
};

const BlogsPage: NextPage<ContentListProps> = ({ contents }) => {
  return <ContentList contents={contents} />;
};

export default BlogsPage;
