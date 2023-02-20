import { MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk';

// ブログコンテンツの型
export type Content = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  shortDescription: string;
  mainContent: string;
  image: {
    src: {
      url: string;
      height: string;
      width: string;
    };
    alt: string;
  };
  personInCharge: string;
};

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSListResponse<Content>;
  };
};
