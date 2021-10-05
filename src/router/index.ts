import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import AppComponent from '../App.vue';
import DefaultLayout from '../views/layouts/DefaultLayout.vue';
import NoLayout from '../views/layouts/NoLayout.vue';
import MatchesComponent from '../components/MatchesComponent.vue';
import LoginPage from '../views/pages/LoginPage.vue';
import {Permission} from "@/permissions";
import AclManager from "@/AclManager";

//todo: finir route
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AppComponent,
    children: [
      {
        path: "/meet",
        component: DefaultLayout,
        children: [
          {
            path: "/matches",
            component: MatchesComponent
          }
        ]
      },
      {
        path: "/",
        component: LoginPage,
        // children: [
        //   {
        //     path: "/login",
        //     name: "login",
        //     component: LoginPage,
        //     meta: {
        //       permission: Permission.specialState.userLoggedOff
        //     }
        //   },
        //   {
        //     path: "/",
        //     redirect: "login"
        //   }
        // ]
      }
    ]
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const { isAllowed, redirectionRoute } = AclManager.hasUserAccessToPermission(
    to.meta.permission as string
  );

  if (isAllowed) {
    next();
  } else {
    next(redirectionRoute!);
  }
});

export default router
