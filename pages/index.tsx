import type { NextPage } from 'next';
import Head from 'next/head';
// TODO: これが何かを調べる
import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

import MainBanner from '@/components/ui/MainBanner';
import SubBanner from '@/components/ui/SubBanner';

const MAIN_BANNER = {
  mainTitle: 'Perfect Company',
  mainText:
    '「ようこそおいでくださいました！ 」「我々はあなた方を歓迎いたします」「どうぞ我が国を楽しんでいってください」柚希(ゆずき)が目を開けるとそこには女神がいた。彼女は言った。ここは異世界であると。「えっ？まじで？」そして彼女は言った。「まじで？」こうして異次元からやってきた勇者によって平和を取り戻した世界は、魔法の力を持った勇者たちが',
  image: {
    src: 'https://images.unsplash.com/photo-1672924986550-eea7b31eb414?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1735&q=80',
    alt: 'external-image',
  },
};

const SUB_BANNERS = [
  {
    subTitle: 'ブログがあります。',
    subText:
      '『......は？』そこには優しそうな人魚の少女がいて、柚希は「あれ？夢かな？」と喜ぶ。でも夢の中で会った少女は言うのだ。「あなたが落としたのはこの金の玉ですか、銀の玉ですか」そして始まるweb小説でよく見る魔法陣によって転移させられた先は、なんとハロウィン王国！ 異世界の王女様が',
    image: {
      src: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      alt: 'external-image',
    },
    link: '/blogs',
  },
  {
    subTitle: '製品があります。',
    subText:
      '『......は？』そこには優しそうな人魚の少女がいて、柚希は「あれ？夢かな？」と喜ぶ。でも夢の中で会った少女は言うのだ。「あなたが落としたのはこの金の玉ですか、銀の玉ですか」そして始まるweb小説でよく見る魔法陣によって転移させられた先は、なんとハロウィン王国！ 異世界の王女様が',
    image: {
      src: 'https://images.unsplash.com/photo-1676614722679-8ab239411924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      alt: 'external-image',
    },
    link: '/solutions',
  },
  {
    subTitle: '事例があります。',
    subText:
      '『......は？』そこには優しそうな人魚の少女がいて、柚希は「あれ？夢かな？」と喜ぶ。でも夢の中で会った少女は言うのだ。「あなたが落としたのはこの金の玉ですか、銀の玉ですか」そして始まるweb小説でよく見る魔法陣によって転移させられた先は、なんとハロウィン王国！ 異世界の王女様が',
    image: {
      src: 'https://images.unsplash.com/photo-1675526193131-83c24921f33c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      alt: 'external-image',
    },
    link: '/cases',
  },
];

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sample microCMS Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="my-20">
          <MainBanner {...MAIN_BANNER} />
        </div>
        {SUB_BANNERS.map((item, i) => {
          return (
            <div key={i} className="my-16">
              <SubBanner {...item} />
            </div>
          );
        })}
      </main>
    </>
  );
};

export default HomePage;
