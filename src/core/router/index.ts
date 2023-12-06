import { createRouter, createWebHistory } from 'vue-router';

const BasePage = () => import('@/components/BasePage.vue');
const GroupList = () => import('@/views/GroupList.vue');
const Group = () => import('@/views/Group.vue');

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: BasePage,
        },
        {
            path: '/group',
            name: 'groupList',
            component: GroupList,
        },
        {
            path: '/account',
            name: 'account',
            component: BasePage,
        },
        {
            path: '/group/:groupId(\\d+)',
            name: 'group',
            component: Group,
            props: (route) => ({ groupId: Number(route.params.groupId) }),
        },
    ],
});

export default router;
