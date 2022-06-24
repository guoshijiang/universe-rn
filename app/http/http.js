import axios from 'axios';

axios.defaults.timeout = 10000;
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
});
//HTTPrequest拦截
axios.interceptors.response.use((res) => {
  return res.data;
}, error => {
  return Promise.reject(new Error(error));
})

export default axios;