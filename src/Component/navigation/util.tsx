import { NavigationItem as NavigationItemProps } from './types';

const menuItems: NavigationItemProps[] = [
  {
    id: 'home',
    text: 'Home',
    path: '/',
    icon: 'house'
  },
  {
    id: 'repairOrders',
    text: 'Repair Orders',
    path: '/'
  },
  {
    id: 'pendingPayment',
    text: 'Pending Payment',
    path: '/'
  }
];

export { menuItems };
