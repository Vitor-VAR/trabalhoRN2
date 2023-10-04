import api from './api';
import {IUserReponse, ILoginUser} from '../common/user-interface';

export const fetchUsers = async (): Promise<IUserReponse> => {
  const response = await api.get<IUserReponse>('/users');
  return response.data;
};

export const login = async (user: ILoginUser): Promise<Number> => {
  const response = await api.post('/users', user);
  return response.status;
};
