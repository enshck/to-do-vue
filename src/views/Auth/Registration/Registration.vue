<script setup lang="ts">
import { reactive } from 'vue';
import LoginForm from '@/components/LoginForm';

export interface IFormData {
  email: string;
  password: string;
}

const formData = reactive<IFormData>({
  email: '',
  password: '',
});
</script>

<template>
  <div>
    {{ formData }}
    <div class="mainContainer">
      <login-form v-model:formData="formData" />
    </div>
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
