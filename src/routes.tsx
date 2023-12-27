import Route from './core/types/route'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage1'
import Signup from './pages/Signup'
import ResetPassword from './pages/ResetPassword'
import UpdatePassword from './pages/UpdatePassword'

const routes: Route[] = [
  {
    path: '/login',
    Page: <LoginPage />,
    hideBreadcrumbds: true,
    displayName: 'Login',
  },
  {
    path: '/signup',
    Page: <Signup />,
    hideBreadcrumbds: true,
    displayName: 'Signup',
  },
  {
    path: '/reset-password',
    Page: <ResetPassword />,
    hideBreadcrumbds: true,
    displayName: 'Reset Password',
  },
  {
    path: '/update-password',
    Page: <UpdatePassword />,
    isProtected: true,
    hideBreadcrumbds: true,
    hideGlobalLayout: true,
    displayName: 'Update Password',
  },
  {
    path: '/company/new',
    Page: <LoginPage />,
    hideBreadcrumbds: true,
  },
  {
    path: '/',
    Page: <Homepage />,
    isProtected: true,
    hideBreadcrumbds: true,
    displayName: 'Home',
  },
  {
    path: '/websites',
    Page: <Homepage />,
    isProtected: true,
    hideBreadcrumbds: true,
    displayName: 'My Websites',
  },
]

export default routes
