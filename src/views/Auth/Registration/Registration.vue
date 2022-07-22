<script setup lang="ts">
import { reactive } from 'vue';

import LoginForm from '@/components/LoginForm';
import store from '@/store';
import router from '@/router';

export interface IFormData {
  email: string;
  password: string;
}

const formData = reactive<IFormData>({
  email: '',
  password: '',
});

const onSubmit = () => {
  store.commit('setAuthData', {
    token: '',
    email: '',
  });
  router.push({
    name: 'home',
  });
};
</script>

<template>
  <div class="mainContainer">
    <login-form :formData="formData" :onSubmit="onSubmit" />
  </div>
</template>

<style scoped>
.mainContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
