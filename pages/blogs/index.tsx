import type { NextPage, GetStaticProps } from 'next';
import ContentList, { ContentListProps } from '@/components/ui/ContentList';
import { client } from '@/api';
import Head from 'next/head';

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
  return (
    <>
      <Head>
        <title>Blog List Page</title>
      </Head>
      <p className='my-5 text-4xl'>Blogs</p>
      <ContentList contents={contents} />
    </>
  );
};

export default BlogsPage;
