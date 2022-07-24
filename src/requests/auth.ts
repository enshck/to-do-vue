import constants from './const';
import axios from '@/config/axios';

interface ILoginData {
  email: string;
  password: string;
}

export const login = async (data: ILoginData) => await axios.post(constants.login, data);

export const signUp = async (data: ILoginData) => await axios.post(constants.signUp, data);
