import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

import ToDoPage from '@/views/Home/ToDo';
import AuthRootPage from '@/views/Auth/index.vue';
import LoginPage from '@/views/Auth/LoginPage';
import RegistrationPage from '@/views/Auth/RegistrationPage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/to-do',
    meta: {
      isPrivate: true,
    },
  },
  {
    path: '/to-do',
    name: 'todo',
    component: ToDoPage,
    meta: {
      isPrivate: true,
    },
  },
  {
    path: '/auth',
    name: 'auth',
    redirect: '/auth/login',
    component: AuthRootPage,
    children: [
      {
        path: 'login',
        name: 'login',
        component: LoginPage,
        meta: {
          isPrivate: false,
        },
      },
      {
        path: 'signUp',
        name: 'signUp',
        component: RegistrationPage,
        meta: {
          isPrivate: false,
        },
      },
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  const isAuthorized = !!store.state.authData;

  if (to?.meta?.isPrivate && !isAuthorized) {
    next('/auth');
    return;
  }

  if (!to?.meta?.isPrivate && isAuthorized) {
    next('/');
    return;
  }

  next();
});

export default router;
