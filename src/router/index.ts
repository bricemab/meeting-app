import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import Tabs from '../views/Tabs.vue'
import DefaultLayout from '../views/layouts/DefaultLayout.vue';
import LoginPage from '../views/pages/LoginPage.vue';
import RegisterPage from '../views/pages/RegisterPage.vue';

import AclManager from "@/AclManager";
import {Permission} from "@/permissions";

//todo: finir route
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import("@/App.vue"),
        children: [
            {
                path: "/",
                redirect: "login"
            },
            {
                path: "meet",
                component: DefaultLayout,
                children: [
                    {
                        path: '',
                        redirect: '/meet/matches'
                    },
                    {
                        path: "matches",
                        meta: {
                            permission: Permission.specialState.userLoggedIn
                        },
                        component: () => import("@/views/pages/MatchesPage.vue")
                    },
                    {
                        path: "likes",
                        meta: {
                            permission: Permission.specialState.userLoggedIn
                        },
                        component: () => import("@/views/pages/LikesPage.vue")
                    },
                    {
                        path: "conversations",
                        meta: {
                            permission: Permission.specialState.userLoggedIn
                        },
                        component: () => import("@/views/pages/ConversationsPage.vue")
                    }
                ]
            },
            {
                path: "login",
                component: LoginPage,
                meta: {
                    permission: Permission.specialState.userLoggedOff
                }
            },
            {
                path: "register",
                component: RegisterPage,
                meta: {
                    permission  : Permission.specialState.userLoggedOff
                }
            }
        ]
    },
    {
        path: "/redirect",
        component: DefaultLayout,
        meta: {
            permission: Permission.specialState.redirectToHome
        }
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
                meta: {
                    permission: Permission.specialState.allowAll
                },
                component: () => import('@/views/Tab1.vue')
            },
            {
                path: 'tab2',
                meta: {
                    permission: Permission.specialState.allowAll
                },
                component: () => import('@/views/Tab2.vue')
            },
            {
                path: 'tab3',
                meta: {
                    permission: Permission.specialState.allowAll
                },
                component: () => import('@/views/Tab3.vue')
            }
        ]
    },
    {
        path: "/not-found",
        component: () => import("@/views/pages/NotFoundPage.vue"),
        meta: {
            permission: Permission.specialState.allowAll
        }
    },
    { path: "/:pathMatch(.*)*", redirect: "/not-found" },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    console.log(to)
    console.log(to.meta.permission)
    const {isAllowed, redirectionRoute} = AclManager.hasUserAccessToPermission(
        to.meta.permission as string
    );

    if (isAllowed) {
        next();
    } else {
        if (redirectionRoute) {
            next(redirectionRoute);
        }
    }
})

export default router
