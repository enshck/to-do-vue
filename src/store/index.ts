import { createStore } from 'vuex';

interface IAuthData {
  token: string;
  email: string;
}

interface IStore {
  authData: IAuthData | null;
}

export default createStore<IStore>({
  state() {
    return {
      authData: null,
    };
  },
  mutations: {
    setAuthData: (state, payload) => {
      state.authData = payload;
    },
    cleanAuthData: (state) => {
      state.authData = null;
    },
  },
});
