import IRoute from 'interfaces/route';
import HomePage from 'pages/home';
import ChangePasswordPage from 'pages/auth/ChangePassword';
import ForgetPage from 'pages/auth/Forget';
import LogInPage from 'pages/auth/Login';
import LogOutPage from 'pages/auth/Logout';
import RegisterPage from 'pages/auth/Register';
import Register from 'pages/auth/Register';

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
        protected: true
    },
    {
        path: '/logout',
        exact: true,
        component: LogOutPage,
        name: 'Logout Page',
        protected: true
    },
    {
        path: '/register',
        exact: true,
        component: Register,
        name: 'Register Page',
        protected: true
    },
];

export default routes;