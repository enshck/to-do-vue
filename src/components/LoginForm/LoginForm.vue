<script setup lang="ts">
import { defineProps, toRef } from 'vue';
import type { IFormData } from '@/views/Auth/RegistrationPage/RegistrationPage.vue';

interface IProps {
  formData: IFormData;
  onSubmit: () => void;
  isInvalidForm: boolean;
}

const props = defineProps<IProps>();
const formData = toRef(props, 'formData');
</script>

<template>
  <div class="mainContainer">
    <a-input v-model="formData.email" type="email" placeholder="Email" />
    <a-input v-model="formData.password" type="password" placeholder="Password" />
    <a-button type="primary" @click="props.onSubmit" :disabled="props.isInvalidForm">Submit</a-button>
  </div>
</template>

<style scoped>
.mainContainer {
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 15px;
  flex: 0;
}

input {
  margin-top: 10px;
  width: 100%;
}

button {
  margin-top: 20px;
}
</style>
