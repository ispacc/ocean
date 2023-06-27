// 固定的响应格式
interface BaseResponse<T = any> {
  code: number
  message: string
  data: T
}

type ResponseData<T = any> = Promise<BaseResponse<T>>
