import Management from 'components/management/Management';
import Dashboard from 'components/dashboard/Dashboard';

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
    }
    
  ];

export default routes;