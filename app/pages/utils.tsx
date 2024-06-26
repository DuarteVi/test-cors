
export interface CallSection {
  index? : string,
  url: string;
}

export const HttpMethod = {
    GET: 'GET',
    POST: 'POST',
    HEAD: 'HEAD',
    DELETE: 'DELETE',
    PUT:'PUT',
    PATCH: 'PATCH',
    OPTIONS: 'OPTIONS',
  };

export const URL = {
  SAME_ORIGIN: 'https://test-cors-drab.vercel.app/api/data',
  REMOTE_VALID_ALL_ORIGIN: 'https://test-cors-second.vercel.app/api/data1',
  REMOTE_VALID_MY_ORIGIN: 'https://test-cors-second.vercel.app/api/data2',
  REMOTE_PUT_METHOD: 'https://test-cors-second.vercel.app/api/data3',
  REMOTE_NOBODY_ORIGIN: 'https://test-cors-second.vercel.app/api/data4',
  REMOTE_WRONG_PROTOCOL: 'https://test-cors-second.vercel.app/api/data5',
  REMOTE_WRONG_PORT: 'https://test-cors-second.vercel.app/api/data6',
  REMOTE_SUBDOMAIN: 'https://test-cors-second.vercel.app/api/data7',
};

export const ORIGIN = {
  ALL: '*',
  MY_ORIGIN: 'https://test-cors-drab.vercel.app',
  OTHER: 'other-website.com',
  WRONG_PROTOCOL: 'http://test-cors-drab.vercel.app',
  WRONG_PORT: 'http://test-cors-drab.vercel.app:7404',
  SUBDOMAIN: 'https://vercel.app',
};

// export const URL = {
//   SAME_ORIGIN: 'http://my-site.com:3000/api/data',
//   REMOTE_VALID_ALL_ORIGIN: 'http://my-api.com:7080/api/data1',
//   REMOTE_VALID_MY_ORIGIN: 'http://my-api.com:7080/api/data2',
//   REMOTE_PUT_METHOD: 'http://my-api.com:7080/api/data3',
//   REMOTE_NOBODY_ORIGIN: 'http://my-api.com:7080/api/data4',
//   REMOTE_WRONG_PROTOCOL: 'http://my-api.com:7080/api/data5',
//   REMOTE_WRONG_PORT: 'http://my-api.com:7080/api/data6',
//   REMOTE_SUBDOMAIN: 'http://my-api.com:7080/api/data7',
// };

// export const ORIGIN = {
//   ALL: '*',
//   MY_ORIGIN: 'http://my-site.com:3000',
//   OTHER: 'other-website.com',
//   WRONG_PROTOCOL: 'https://my-site.com:3000',
//   WRONG_PORT: 'http://my-site.com:7404',
//   SUBDOMAIN: 'http://com:3000',
// };