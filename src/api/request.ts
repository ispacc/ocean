import instance from "../utils/axios";

const axios = ({
                   method,
                   url,
                   data,
                   config,
               }: {
    method: string;
    url: string;
    data: any;
    config?: any;
}): Promise<any> | false => {
    method = method.toLowerCase();
    if (method === "post") {
        return instance.post(url, data, {...config});
    } else if (method === "get") {
        return instance.get(url, {
            params: data,
            ...config,
        });
    } else if (method === "delete") {
        return instance.delete(url, {
            params: data,
            ...config,
        });
    } else if (method === "put") {
        return instance.put(url, data, {...config});
    } else {
        console.error("未知的method" + method);
        return false;
    }
};

export default axios;
