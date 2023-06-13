import axios from "axios"

const instance = axios.create({
    baseURL: "/api",
    timeout: 5000,
});

// 添加请求拦截器
instance.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        config.headers["Content-type"] = "application/json";
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
instance.interceptors.response.use(
    (response) => {
        // 对响应数据做点什么
        // 隐藏加载图
        // 获取code
        const data = response.data;
        // 返回成功
        if (data.code == 200) {
            return data;
        }
        // token 异常
        if (data.code === 508 || data.code === 512 || data.code === 514) {
            // 登出 清除token缓存
        }
        return response;
    },
    (error) => {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

export default instance;
