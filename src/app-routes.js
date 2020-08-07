import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, DisplayDataPage, ProfilePage, GetMoviePage } from './pages';

const routes = [
  {
    path: '/display-data',
    component: DisplayDataPage
  },
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/home',
    component: HomePage
  }
, 
{
    path: '/get-movie',
    component: GetMoviePage
  }];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
