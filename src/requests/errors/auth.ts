interface IError {
  [key: number]: string;
}

export const loginErrors: IError = {
  401: 'Invalid credentionals',
  404: 'User not Found',
  500: 'Internal server error',
};

export const signUpErrors: IError = {
  400: 'User already exist',
  500: 'Internal server error',
};
