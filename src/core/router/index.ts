import { createRouter, createWebHistory } from 'vue-router';

const BasePage = () => import('@/components/BasePage.vue');
const GroupList = () => import('@/views/GroupList.vue');
const Group = () => import('@/views/Group.vue');
const Report = () => import('@/views/Report.vue');

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
            name: 'accountList',
            component: BasePage,
        },
        {
            path: '/account/:accountId(\\d+)',
            name: 'account',
            component: BasePage,
            props: (route) => ({ accountId: Number(route.params.accountId) }),
        },
        {
            path: '/group/:groupId(\\d+)',
            name: 'group',
            component: Group,
            props: (route) => ({ groupId: Number(route.params.groupId) }),
        },
        {
            path: '/report/:reportId(\\d+)',
            name: 'report',
            component: Report,
            props: (route) => ({ reportId: Number(route.params.reportId) }),
        },
        {
            path: '/battle/:battleId(\\d+)',
            name: 'battle',
            component: BasePage,
            props: (route) => ({ battleId: Number(route.params.battleId) }),
        },
    ],
});

export default router;
