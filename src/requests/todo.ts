import constants from './const';
import axios from '@/config/axios';

interface IGetTodoElements {
  date: string;
}

export const getTodoElements = async (data: IGetTodoElements) => await axios.post(constants.login, data);
