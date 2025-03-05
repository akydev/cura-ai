import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
const adminFetch = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

adminFetch.interceptors.request.use(
  (request: InternalAxiosRequestConfig<any>) => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

adminFetch.interceptors.response.use(
  (request: AxiosResponse<any>) => {
    return request;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // localStorage.clear();
      setTimeout(() => {
        // window.location.href = "/login";
      }, 1000);
    }
    return Promise.reject(error);
  }
);

export default adminFetch;
