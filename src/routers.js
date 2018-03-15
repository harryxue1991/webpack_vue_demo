import Index from 'pages/index/index';
import Home from 'pages/home/home';
import Home1 from 'pages/home/myhome/home1';
import Home2 from 'pages/home/myhome/home2';

const routers = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/home',
        component: Home,
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
    }
]
export default routers