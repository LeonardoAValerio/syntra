import { AxiosInstance } from "axios";
import { BaseRoute, IBaseRoute } from "../base/BaseRoute";
import { AuthDto } from "./dtos/AuthDto";
import { LoginDto } from "./dtos/Login";

export class AuthRoute extends BaseRoute {
    constructor(api: AxiosInstance) {
        super({api, routeName: "auth"});
    }

    async login(dto: AuthDto): Promise<LoginDto> {
        const response = await this.api.post<LoginDto>(this.path("login/oAuth"), dto);
        const data = response.data;

        return data;
    }

    async createUser(dto: AuthDto): Promise<void> {
        await this.api.post(this.path("create"), dto);
    }
}