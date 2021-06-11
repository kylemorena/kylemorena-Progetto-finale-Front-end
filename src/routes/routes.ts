import IRoute from 'interfaces/Iroute';
import HomePage from 'pages/home';
import ChangePasswordPage from 'pages/auth/ChangePassword';
import ForgetPage from 'pages/auth/Forget';
import LogInPage from 'pages/auth/Login';
import LogOutPage from 'pages/auth/Logout';
import SignUpPage from 'pages/auth/Signup';

const routes: IRoute[] = [
    {
        path: '/',
        exact: true,
        component: HomePage,
        name: 'Home Page',
        protected: true
    },
    {
        path: '/change',
        exact: true,
        component: ChangePasswordPage,
        name: 'Change Password Page',
        protected: false
    },
    {
        path: '/forget',
        exact: true,
        component: ForgetPage,
        name: 'Forget Page',
        protected: false
    },
    {
        path: '/login',
        exact: true,
        component: LogInPage,
        name: 'Login Page',
        protected: false
    },
    {
        path: '/logout',
        exact: true,
        component: LogOutPage,
        name: 'Logout Page',
        protected: true
    },
    {
        path: '/signup',
        exact: true,
        component: SignUpPage,
        name: 'Register Page',
        protected: false
    },
];

export default routes;