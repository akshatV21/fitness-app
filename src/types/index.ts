export interface HttpSuccessResponse<T> {
  success: true
  message: string
  data: T
}
