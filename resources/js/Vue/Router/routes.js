export default [
    {
        path: '/',
        component: require('@/Pages/Home').default,
        name: 'home'
    },
    {
        path: '/login',
        component: require('@/Pages/Auth/Login').default,
        name: 'login'
    },
]