import { signUp, login } from '@/requests';
import { set } from '@/utils/localStorage';
import store from '@/store';
import router from '@/router';

interface IData {
  email: string;
  password: string;
}

export const authSubmit = async (formData: IData, isSignUp: boolean) => {
  const authData = (isSignUp ? await signUp(formData) : await login(formData)).data;

  set('authData', JSON.stringify(authData));

  store.commit('setAuthData', authData);

  router.push({
    name: 'home',
  });
};
