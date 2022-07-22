import { createRouter, createWebHistory } from 'vue-router';

import ToDoPage from '@/views/Home/ToDo';
import LoginPage from '@/views/Auth/Login';
import RegistrationPage from '@/views/Auth/Registration';

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/to-do',
    children: [
      {
        path: 'to-do',
        name: 'todo',
        component: ToDoPage,
        meta: {
          isPrivate: true,
        },
      },
    ],
  },
  {
    path: '/auth',
    name: 'auth',
    redirect: '/auth/login',
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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  const isAuthorized = false;

  if (to.meta.isPrivate && !isAuthorized) {
    return {
      name: 'auth',
    };
  }

  if (!to.meta.isPrivate && isAuthorized) {
    return {
      name: 'home',
    };
  }
});

export default router;
