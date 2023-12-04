import { createRouter, createWebHistory } from 'vue-router';
import GroupList from '../views/GroupList.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/group',
            name: 'groupList',
            component: GroupList,
        },
    ],
});

export default router;
