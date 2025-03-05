import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
// console.log(apiUrl);

const authFetch = axios.create({ baseURL: apiUrl });
export default authFetch;
