import { lazy } from 'react'

export const router = [
  {
    path: '/',
    component: lazy(() => import('@/pages/home')),
    children: []
  },
  {
    path: '/login',
    component: lazy(() => import('@/pages/login')),
    children: []
  },
  {
    path: '/MES/VMI/*',
    component: lazy(() => import('@/pages/mes/vmi')),
    children: []
  },
  {
    path: '/MES/QMS/*',
    component: lazy(() => import('@/pages/mes/qms')),
    children: []
  },
  {
    path: '*',
    component: lazy(() => import('@/pages/not-found')),
    children: []
  }
]