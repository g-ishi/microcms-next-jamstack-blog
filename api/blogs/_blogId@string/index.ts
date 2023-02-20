import { MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk';
import { Content } from '..';

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: Content;
  };
};
