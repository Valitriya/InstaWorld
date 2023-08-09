
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', 
      component: () => import('pages/PageHome.vue') },
      { path: '/camera',
       component: () => import('pages/PageCamera.vue') },
      { path: '/message',
       component: () => import('pages/PageMessage.vue') },
      { path: '/notification',
       component: () => import('pages/PageNotification.vue') },
      { path: '/reels',
       component: () => import('pages/PageReels.vue') },
      { path: '/search',
       component: () => import('pages/PageSearch.vue') },
      { path: '/profile',
       component: () => import('pages/PageProfile.vue') },
      { path: '/interesting',
       component: () => import('pages/PageInteresting.vue') },
      { path: '/create',
       component: () => import('pages/PageCreate.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
