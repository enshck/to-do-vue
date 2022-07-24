<script setup lang="ts">
import { onMounted, ref } from 'vue';
import jwt_decode from 'jwt-decode';
import type { JwtPayload } from 'jwt-decode';

import { get, clear } from '@/utils/localStorage';
import router from '@/router';
import store from '@/store';
import axios from '@/config/axios';

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
  <div id="app" v-if="isComponentMounted"><router-view /></div>
</template>
