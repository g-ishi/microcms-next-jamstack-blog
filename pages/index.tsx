import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
// TODO: これが何かを調べる
import { Inter } from '@next/font/google';
import { useEffect } from 'react';
import { client, Content } from '@/api';

const inter = Inter({ subsets: ['latin'] });

export const getStaticProps = async () => {
  const res = await client.blogs.$get();
  return {
    props: {
      blogs: res.contents,
    },
  };
};

interface Home {
  blogs: Content[];
}

const HomePage: NextPage<Home> = ({ blogs }) => {
  useEffect(() => {
    const getBlogs = async () => {
      const res = await client.blogs.$get();
      console.dir(res, { depth: null });
    };
    getBlogs();
  });

  return (
    <>
      <Head>
        <title>Sample microCMS Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hello World</h1>
        {blogs.map((blog, i) => {
          return <div key={i}>{blog.title}</div>;
        })}
      </main>
    </>
  );
};

export default HomePage;
