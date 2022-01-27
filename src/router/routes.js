import pick from 'lodash/pick'

/* 只支持二级嵌套 */
export const menus = [
  {
    title: '一级',
    children: [
      {
        path: '/',
        title: '首页',
        component: () => import(/* webpackChunkName: "chunk-[request]" */ '@/pages/home')
      },
      {
        path: '/about',
        title: '关于',
        component: () => import(/* webpackChunkName: "chunk-[request]" */ '@/pages/about')
      }
    ]
  }
]

export const routes = menus.reduce((acc, cur) => {
  const list = cur.children.map(v => pick(v, ['path', 'component']))
  return [...acc, ...list]
}, [])
