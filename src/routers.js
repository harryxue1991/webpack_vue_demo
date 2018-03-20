import Home1 from 'pages/home/myhome/home1';
import Home2 from 'pages/home/myhome/home2';

const routers = [
    {
        path: '/',
        component: () => import('./pages/index/index')
    },
    {
        path: '/home',
        component: () => import('./pages/home/home'),
        children: [
            {
                path: '/home1',
                component: Home1,
            },
            {
                path: '/home2',
                component: Home2,
            }
        ]
    },
    {
        path: '/page',
        component: () => import('./pages/page/page'),
    }
]
export default routers