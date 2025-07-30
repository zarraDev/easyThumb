class ApiResponse {
  codeStatus: number;
  isSuccess: boolean;
  message: string;
  data?: object;

  constructor(codeStatus: number, data: object | undefined, message = "Success") {
    this.codeStatus = codeStatus;
    this.data = data;
    this.message = message;
    this.isSuccess = codeStatus < 400;
  }
}

export default ApiResponse;
