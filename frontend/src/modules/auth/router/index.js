export default {
    name: 'auth',
    component: () => import(/* webpackChunkName: "signinView" */ '@/modules/auth/layouts/LoginLayout.vue'),
    children: [
        {
            name: 'SigninView',
            path: 'signin',
            component: () => import(/* webpackChunkName: "signinView" */ '@/modules/auth/views/SigninView.vue'),
        },
        {
            name: 'SignupView',
            path: 'signup',
            component: () => import(/* webpackChunkName: "signupView" */ '@/modules/auth/views/SignupView.vue'),
        },
        {
            name: 'ForgotPassView',
            path: 'forgotpass',
            component: () => import(/* webpackChunkName: "forgotPassView" */ '@/modules/auth/views/ForgotPassView.vue'),
        }
    ]
}