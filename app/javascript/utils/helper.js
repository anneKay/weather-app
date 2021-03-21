import CookieUtil from './cookie';

/**
 * @description Helper method to retrieve csrf token
 * from document
 * @returns {string}
 */
 const token = () => {
  const csrfData = document.querySelector('meta[name="csrf-token"]');
  return csrfData && csrfData.content;
};
export const authToken = CookieUtil.getItem('user-auth');

export const userData = CookieUtil.getItem('user');
export const prepareQuery = (url, payload) => ({
  url: `/v1${url}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-Token': token(),
    ...(authToken) && {
      'Authorization': `Bearer ${authToken}`
    }
  },
  data: JSON.stringify(payload),
  mode: 'cors',
  credentials: 'same-origin'
});
