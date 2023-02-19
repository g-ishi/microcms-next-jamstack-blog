/**
 * storybook側でのみ、Imageコンポーネントの挙動を変更する設定
 * (unoptimizedオプションで、「_next」に画像をキャッシュしない挙動にする)
 */
import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

/**
 * Next.js側のスタイルを共有
 */
import '../styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
