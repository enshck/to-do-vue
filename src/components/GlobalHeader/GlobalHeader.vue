<script setup lang="ts">
import store from '@/store';
import { clear } from '@/utils/localStorage';
import router from '@/router';

const logoutHandler = () => {
  clear();
  store.commit('cleanAuthData');
  router.push('/auth');
};
</script>

<template>
  <div :class="$style.mainContainer" v-if="!!store.state.authData">
    <a-page-header title="To-Do page" :ghost="false" style="border: 1px solid rgb(235, 237, 240)">
      <template #extra>
        <a-button type="primary" @click="logoutHandler">Logout</a-button>
      </template></a-page-header
    >
  </div>
</template>

<style module>
.mainContainer {
  width: 100%;
}
</style>
