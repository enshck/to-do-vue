import axios from 'axios';

import variables from './variables';
import { clear } from '@/utils/localStorage';
import router from '@/router';
import apiUrls from '@/requests/const';

const axiosInstanse = axios.create({
  baseURL: variables.apiUrl,
});

const publicMethodsApi = [apiUrls.login, apiUrls.signUp];

axiosInstanse.interceptors.response.use(
  (response) => response,
  (error) => {
    const requestUrl = error?.response?.config?.url;
    const isNotAuthorizedError = !publicMethodsApi.includes(requestUrl) && error?.response?.status === 401;

    if (isNotAuthorizedError) {
      clear();

      router.push('/');
      return;
    }
    throw error;
  },
);

export default axiosInstanse;
