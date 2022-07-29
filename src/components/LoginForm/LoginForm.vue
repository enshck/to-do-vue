<script setup lang="ts">
import { defineProps, toRef } from 'vue';
import type { IFormData } from '@/views/Auth/RegistrationPage/RegistrationPage.vue';

interface IProps {
  formData: IFormData;
  onSubmit: () => void;
  isInvalidForm: boolean;
  isLoginForm: boolean;
}

const props = defineProps<IProps>();
const formData = toRef(props, 'formData');
</script>

<template>
  <div :class="$style.mainContainer">
    <h1>{{ props.isLoginForm ? 'Login' : 'Sign Up' }}</h1>
    <a-input v-model="formData.email" type="email" placeholder="Email" />
    <a-input v-model="formData.password" type="password" placeholder="Password" />
    <div :class="$style.buttonContainer">
      <router-link to="/auth/signUp" v-if="props.isLoginForm">Sign up</router-link>
      <router-link to="/auth/login" v-else>Login</router-link>
      <a-button type="primary" @click="props.onSubmit" :disabled="props.isInvalidForm">Submit</a-button>
    </div>
  </div>
</template>

<style scoped>
input {
  margin-top: 10px;
  width: 100%;
}
</style>

<style module>
.mainContainer {
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 15px;
  flex: 0;
}

.mainContainer > h1 {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  padding: 0;
}

.buttonContainer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
</style>
