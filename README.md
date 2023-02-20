This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# microcms-next-jamstack-blog

## メモ

storybook とのインテグレーション手順

https://storybook.js.org/blog/get-started-with-storybook-and-next-js/

next.js のプロジェクトルートからの import を storybook に認識させる方法

https://github.com/storybookjs/storybook/issues/11639#issuecomment-801724587

tailwind を storybook に認識させる方法

https://zenn.dev/youichiro/articles/d625e602ed47c1#tailwind-css%E3%82%92storybook%E3%81%A7%E8%AA%AD%E3%81%BF%E8%BE%BC%E3%82%80

layout(に限らないかもしれないけど)の注意点

https://nextjs.org/docs/basic-features/layouts

フォルダ名が大文字(キャメルケース)とかだと vercel 側で import エラーになるみたい。
