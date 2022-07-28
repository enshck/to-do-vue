<script setup lang="ts">
import { onMounted, ref } from 'vue';
import jwt_decode from 'jwt-decode';
import type { JwtPayload } from 'jwt-decode';

import { get, clear } from '@/utils/localStorage';
import router from '@/router';
import store from '@/store';
import axios from '@/config/axios';
import GlobalHeader from '@/components/GlobalHeader';

const isComponentMounted = ref<boolean>(false);

onMounted(() => {
  const authData = get('authData');
  const authDataParsed = authData ? JSON.parse(authData) : null;

  if (!authDataParsed) {
    isComponentMounted.value = true;
    return;
  }

  const token = authDataParsed.token;
  const decodedToken: JwtPayload = jwt_decode(token || '');
  const tokenExpires = decodedToken.exp;
  const currentDate = +new Date();

  if (currentDate >= +`${tokenExpires}000`) {
    clear();
    store.commit('cleanAuthData');
    router.push('/');
    isComponentMounted.value = true;
    return;
  }

  axios.defaults.headers.common['Authorization'] = `Bearer ${token}` || '';
  store.commit('setAuthData', {
    token,
    email: (decodedToken as any)?.email,
  });
  router.push({
    name: 'home',
  });
  isComponentMounted.value = true;
});
</script>

<template>
  <div :class="$style.mainContainer" v-if="isComponentMounted"><global-header /><router-view /></div>
</template>

<style module>
.mainContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
