<script setup lang="ts">
import { defineProps, toRefs } from 'vue';
// import { IFormData } from '@/views/Auth/Registration/Registration.vue';

interface IProps {
  formData: {
    email: string;
    password: string;
  };
}

const props = defineProps<IProps>();
const { formData } = toRefs(props);
</script>

<template>
  <div class="mainContainer">
    <a-input v-model:value="formData.email" type="email" placeholder="Email" />
    <a-input v-model:value="formData.password" type="password" placeholder="Password" />
    <a-button type="primary">Submit</a-button>
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
