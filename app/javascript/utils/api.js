import axios from 'axios';

/**
 * @description This is a utility function that handles all API calls.
 * It simplifies the payload of the request to a single object.
 * it also formats the response such that both success and error
 * responses can be handled easily
 * @param {Object} payload the request payload. Should contain:
 * @param {string} [payload.url] the url to call,
 * @param {string} [payload.method] the http method. Defaults to 'get'
 * @param {object} [payload.headers] the http request headers object.
 * @param {object} [payload.data] the request body. For 'post', 'put', and 'patch'.
 */

export const fetchData = async (payload, method) => {
  const transformedPayload = {
    ...payload,
    method: method || 'get',
  };
  try {
    const response = await axios({ ...transformedPayload });
    return response;
  } catch (error) {
    throw error;
  }
};

export default fetchData;
