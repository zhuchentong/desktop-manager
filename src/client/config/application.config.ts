export const ApplicationList = [
  {
    name: 'user-manage',
    icon: '/icons/user.png',
    title: '用户管理',
    root: () => import('@/apps/user-manage/user-manage.vue'),
  },
  {
    name: 'desktop-manage',
    icon: '/icons/desktop.png',
    title: '桌面管理',
    root: () => import('@/apps/desktop-manage/desktop-manage.vue'),
  },
];

export enum ApplicationState {
  NORMAL,
  MAX,
  MIN,
}