import { useRouter } from 'next/router';
import ContentDetail from '@/components/ui/ContentDetail';
import { client } from '@/api';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';

export const getStaticPaths: GetStaticPaths<BlogParams> = async () => {
  const res = await client.blogs.$get();
  const paths = res.contents.map(({ id }) => {
    return {
      params: {
        solutionId: id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// getStaticPathsとgetStaticPropsの間のインターフェース
interface BlogParams extends ParsedUrlQuery {
  solutionId: string;
}

export const getStaticProps: GetStaticProps<BlogProps, BlogParams> = async ({
  params,
}) => {
  const { title, mainContent, updatedAt, image, personInCharge } =
    await client.blogs._blogId(params!.solutionId).$get();
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

interface BlogProps {
  content: {
    title: string;
    mainContent: string;
    date: string;
    personInCharge: string;
    image: {
      src: string;
      alt: string;
    };
  };
}

const BlogDetail: NextPage<BlogProps> = ({ content }) => {
  const router = useRouter();
  const { solutionId } = router.query;

  return <ContentDetail {...content} />;
};

export default BlogDetail;
