import { createRouter, createWebHistory } from 'vue-router';
import GroupList from '@/views/GroupList.vue';
import Group from '@/views/Group.vue';
import BasePage from '@/components/BasePage.vue';

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
