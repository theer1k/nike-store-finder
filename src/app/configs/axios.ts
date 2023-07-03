import Axios from 'axios';
import { configure as configureAxiosHooks } from 'axios-hooks';
import axiosRetry from 'axios-retry';
import { environment } from 'environment';

const axiosStaticInstance = Axios.create({
  baseURL: `${environment.apiURL}`,
});

configureAxiosHooks({ axios: axiosStaticInstance });
axiosRetry(axiosStaticInstance, { retries: 3 });

export default axiosStaticInstance;
