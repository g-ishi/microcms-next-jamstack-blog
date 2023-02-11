import api from './$api';
import aspida, { FetchConfig } from '@aspida/fetch';

const fetchConfig = {
  baseURL: `https://${process.env.NEXT_PUBLIC_MICROCMS_ENDPOINT}/api/v1`,
  headers: {
    'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_APIKEY,
  },
};

console.log(fetchConfig);
export const client = api(aspida(fetch, fetchConfig as any as FetchConfig));
