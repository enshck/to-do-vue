<script setup lang="ts">
import { reactive, computed } from 'vue';
import { message } from 'ant-design-vue';

import LoginForm from '@/components/LoginForm';
import loginValidation from '@/utils/validation/loginValidation';
import { authSubmit } from '@/utils/handlers/auth';
import { signUpErrors } from '@/requests/errors/auth';

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
  try {
    await authSubmit(formData, true);
  } catch (err: any) {
    message.error(signUpErrors[err.response.status] || 'Error');
  }
};
</script>

<template>
  <div :class="$style.mainContainer">
    <login-form
      :formData="formData"
      :onSubmit="onSubmit"
      :isInvalidForm="isInvalidForm"
      :isLoginForm="false"
    />
  </div>
</template>

<style module>
.mainContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
