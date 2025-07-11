import axios from "axios"
import { AuthRoute } from "./routes/auth/AuthRoute";
import Cookies from "js-cookie";
import { UserRoute } from "./routes/user/UserRoute";

const api = axios.create({
    baseURL: "http://localhost:8080/"
});

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export const clientApi = {
  user: new UserRoute(api),
  auth: new AuthRoute(api)
}