import type {UseFetchOptions} from "nuxt/app";

type Methods = "GET" | "POST" | "DELETE" | "PUT";

const BASE_URL = 'api';

export interface IResultData<T> {
    code: number;
    data: T;
    message: string;
}

class HttpRequest {
    async request<T = any>(
        url: string,
        method: Methods,
        data: any,
        options?: UseFetchOptions<T>,
    ) {
        const newOptions: UseFetchOptions<T> = {
            baseURL: BASE_URL,
            method: method,
            ...options,
        };

        if (method === "GET" || method === "DELETE") {
            newOptions.params = data;
        }
        if (method === "POST" || method === "PUT") {
            newOptions.body = data;
        }

        try {
            const response = await useFetch(url, newOptions);
            return response.data.value;
        } catch (error) {
            throw error;
        }
    }

    // 封装常用方法

    get<T = any>(url: string, params?: any, options?: UseFetchOptions<T>) {
        return this.request(url, "GET", params, options);
    }

    post<T = any>(url: string, data: any, options?: UseFetchOptions<T>) {
        return this.request(url, "POST", data, options);
    }

    put<T = any>(url: string, data: any, options?: UseFetchOptions<T>) {
        return this.request(url, "PUT", data, options);
    }

    delete<T = any>(url: string, params: any, options?: UseFetchOptions<T>) {
        return this.request(url, "DELETE", params, options);
    }
}

const httpRequest = new HttpRequest();

export default httpRequest;

