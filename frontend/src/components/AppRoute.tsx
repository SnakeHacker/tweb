import Management from 'components/management/Management';
import Dashboard from 'components/dashboard/Dashboard';
import Account from 'components/account/Account';

const routes = [
    {
      path: '/',
      component: Dashboard,
    },
    {
      path: '/app/dashboard',
      component: Dashboard,
    },
    {
      path: '/app/management',
      component: Management,
    },
    {
      path: '/app/management/account',
      component: Account
    }
    
  ];

export default routes;