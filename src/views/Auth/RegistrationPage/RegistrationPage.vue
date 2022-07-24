<script setup lang="ts">
import { reactive, computed } from 'vue';

import LoginForm from '@/components/LoginForm';
import store from '@/store';
import router from '@/router';
import loginValidation from '@/utils/validation/loginValidation';
import { signUp } from '@/requests';

export interface IFormData {
  email: string;
  password: string;
}

const formData = reactive<IFormData>({
  email: '',
  password: '',
});
const isInvalidForm = computed<boolean>(() => !loginValidation(formData));

const onSubmit = async () => {
  // store.commit('setAuthData', {
  //   token: '',
  //   email: '',
  // });
  // router.push({
  //   name: 'home',
  // });

  const result = await signUp(formData);

  console.log(result, 'res');
};
</script>

<template>
  <div class="mainContainer">
    <login-form :formData="formData" :onSubmit="onSubmit" :isInvalidForm="isInvalidForm" />
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
