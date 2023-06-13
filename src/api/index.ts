import axios from "./request";

export const login = (data: any): Promise<any> | false => {
    return axios({
        url: "api/admin/login",
        method: "post",
        data,
        config: {
            timeout: 3000
        }
    })
}
