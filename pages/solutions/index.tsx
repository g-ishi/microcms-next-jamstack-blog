import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
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
        link: `/solutions/${id}`,
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

const SolutionsPage: NextPage<ContentListProps> = ({ contents }) => {
  return (
    <>
      <Head>
        <title>Solution List Page</title>
      </Head>
      <p className='my-5 text-4xl'>Solutions</p>
      <ContentList contents={contents} />
    </>
  );
};

export default SolutionsPage;
