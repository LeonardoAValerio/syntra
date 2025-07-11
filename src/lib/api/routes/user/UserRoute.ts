import { AxiosInstance } from "axios";
import { BaseRoute } from "../base/BaseRoute";
import { User } from "./user";
import { updateProfileDto } from "./dto/updateProfileDto";

export class UserRoute extends BaseRoute {

    constructor(api: AxiosInstance) {
        super({api, routeName: "user"});
    }

    async profile(): Promise<User> {
        const response = await this.api.get<User>(this.path("profile"));
        console.log(response)
        return response.data;
    }

    async updateProfile(dto: updateProfileDto): Promise<User> {
        const response = await this.api.put<User>(this.path("profile"), dto);
        console.log(response);
        return response.data;
    }
}