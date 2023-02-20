import { useRouter } from 'next/router';
import ContentDetail from '@/components/ui/ContentDetail';
import { client } from '@/api';
import { NextPage } from 'next';

export const getStaticPaths = async () => {
  const res = await client.blogs.$get();
  const paths = res.contents.map(({ id }) => {
    return {
      params: {
        blogId: id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params);
  const { title, mainContent, updatedAt, image, personInCharge } =
    await client.blogs._blogId(params.blogId).$get();
  return {
    props: {
      content: {
        title,
        mainContent,
        date: updatedAt,
        personInCharge,
        image: {
          src: image.src.url,
          alt: image.alt,
        },
      },
    },
  };
};

const BlogDetail: NextPage = ({ content }) => {
  const router = useRouter();
  const { blogId } = router.query;

  return <ContentDetail {...content} />;
};

export default BlogDetail;
