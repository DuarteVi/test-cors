
export interface CallSection {
  url: string;
}

export const HttpMethod = {
    GET: 'GET',
    DELETE: 'DELETE',
  };

export const URL = {
  SAME_ORIGIN: 'https://test-cors-drab.vercel.app/api/data',
  REMOTE_VALID_ORIGIN: 'https://test-cors-second.vercel.app/api/data',
};