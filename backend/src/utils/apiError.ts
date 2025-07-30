class ApiError extends Error {
  codeStatus: number;
  isSuccess: boolean;
  erreurs: string[];

  constructor(
    codeStatus: number,
    message = 'Something went wrong',
    erreurs: string[] = [],
    stack?: string
  ) {
    super(message);
    this.name = this.constructor.name;
    this.codeStatus = codeStatus;
    this.isSuccess = false;
    this.erreurs = erreurs;

    if (stack !== undefined && stack !== null) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  toJSON() {
    return {
      codeStatus: this.codeStatus,
      isSuccess: this.isSuccess,
      message: this.message,
      erreurs: this.erreurs,
    };
  }
}

export default ApiError;
