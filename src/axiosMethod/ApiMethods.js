import axios from 'axios';
import Constants from '../axiosMethod/Constants';
export default ApiMethod = {
  getData: async (endPoint, token) => {
    let url = Constants.base_url + endPoint;
    let headers = {
      Accept: '*/*',
      Content: 'application/json',
    };

    let config = {
      headers: headers,
    };

    if (token) headers['Authorization'] = 'Bearer ' + token;

    // console.log('headers', JSON.stringify(headers));
    console.log('url', url);

    try {
      let response = await axios.get(url, config);
      return response;
    } catch (error) {
      console.log('error', error);
    }
  },

  postData: async (endPoint, body, token) => {
    let url = Constants.base_url + endPoint;
    let headers = {
      Accept: '*/*',
      Content: 'application/json',
    };

    let config = {
      headers: headers,
    };

    if (token) headers['Authorization'] = 'Bearer ' + token;

    console.log('token', token);
    console.log('url', url);

    try {
      let response = await axios.post(url, body, config);
      //   console.log(' post response', response);
      return response;
    } catch (error) {
      console.log('error', error);
    }
  },

  putData: async (endPoint, body, token) => {
    let url = Constants.base_url + endPoint;
    let headers = {
      Accept: '*/*',
      Content: 'application/json',
    };

    let config = {
      headers: headers,
    };

    if (token) headers['Authorization'] = 'Bearer ' + token;

    console.log('token', token);
    console.log('url', url);

    try {
      let response = await axios.post(url, body, config);
      //   console.log(' post response', response);
      return response;
    } catch (error) {
      console.log('error', error);
    }
  },

  deleteData: async (endPoint, token) => {
    let url = Constants.base_url + endPoint;
    let headers = {
      Accept: '*/*',
      Content: 'application/json',
    };

    let config = {
      headers: headers,
    };

    if (token) headers['Authorization'] = 'Bearer ' + token;

    // console.log('headers', JSON.stringify(headers));
    console.log('url', url);

    try {
      let response = await axios.delete(url, config);
      return response;
    } catch (error) {
      console.log('error', error);
    }
  },
};
