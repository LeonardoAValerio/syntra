import axios from "axios"
import { AuthRoute } from "./routes/auth/AuthRoute";

export class Api {
    private static api = axios.create({
        baseURL: process.env.API_URL
    });

    static get auth() {
        return new AuthRoute(this.api);
    }
}