import cookieUtil from './cookie';

/**
 * @description Helper method to retrieve csrf token
 * from document
 * @returns {string}
 */
 const token = () => {
  const csrfData = document.querySelector('meta[name="csrf-token"]');
  return csrfData && csrfData.content;
};

export const prepareQuery = (url, payload) => ({
  url: `http://localhost:3000/v1${url}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
      'X-CSRF-Token': token()
  },
  data: JSON.stringify(payload),
  mode: 'cors',
  credentials: 'same-origin'
});

export const isLoggedIn = cookieUtil.getItem('userData');

export const userData =
  cookieUtil.getItem('userData') && JSON.parse(cookieUtil.getItem('userData'));
