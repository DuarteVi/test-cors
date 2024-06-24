
export interface CallSection {
  index : string,
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
  REMOTE_VALID_ORIGIN: 'https://test-cors-second.vercel.app/api/data1',
};

// export const URL = {
//   SAME_ORIGIN: 'http://my-site.com:3000/api/data',
//   REMOTE_VALID_ORIGIN: 'http://my-api.com:7080/api/data1',
// };