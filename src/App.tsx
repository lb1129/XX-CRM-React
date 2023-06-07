import React, { useState, useEffect } from 'react'
import { ConfigProvider, App as AntdApp } from 'antd'
import { useTranslation } from 'react-i18next'
import { useRoutes, type RouteObject } from 'react-router-dom'
import { type MenuDataItemType, setMenuData } from '@/store/menuDataSlice'
import { setUserInfo } from '@/store/userInfoSlice'
import baseRoutes from '@/router/baseRoutes'
import { lazyLoad } from '@/router/utils'
import { useAppSelector, useAppDispatch } from '@/store/hook'
import { tokenLocalforage } from '@/utils/localforage'
import type { Locale } from 'antd/es/locale'
import enUS from 'antd/locale/en_US'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import userMenuData from '@/router/userMenuData.json'

const App = () => {
  const [routes, setRoutes] = useState<RouteObject[]>(baseRoutes)
  const [locale, setLocal] = useState<Locale>()
  const { i18n } = useTranslation()
  const theme = useAppSelector((state) => state.theme)
  const menuData = useAppSelector((state) => state.menuData)

  const dispatch = useAppDispatch()

  useEffect(() => {
    // mock 已登录刷新流程
    tokenLocalforage.get().then((token) => {
      if (token) {
        setTimeout(() => {
          // 获取用户菜单
          const menuData = userMenuData[token as keyof typeof userMenuData]
          if (menuData) {
            // 更新redux内的菜单数据
            dispatch(setMenuData(menuData))
            // 更新redux内的用户数据
            dispatch(setUserInfo({ userName: token }))
          }
        }, 500)
      }
    })
  }, [dispatch])

  // 用户菜单数据生成动态路由
  useEffect(() => {
    const dynamicRoutes: RouteObject[] = []
    const generateRoutes = (list: MenuDataItemType[], parentPath?: string) => {
      list.forEach((record) => {
        if (record.children && record.children.length) {
          generateRoutes(record.children, `${parentPath ?? ''}${record.path}`)
        } else if (record.viewUrl) {
          dynamicRoutes.push({
            path: `${parentPath ?? ''}${record.path}`,
            element: lazyLoad(`${record.viewUrl}`)
          })
        }
      })
    }
    generateRoutes(menuData.data)
    // 动态路由在基础路由的首页及个人中心之间插入
    baseRoutes[0].children = [
      baseRoutes[0].children![0],
      ...dynamicRoutes,
      baseRoutes[0].children![1]
    ]
    // 404路由添加element
    if (menuData.done) baseRoutes[baseRoutes.length - 1].element = lazyLoad('PageNotFound')
    setRoutes([...baseRoutes])
  }, [menuData])

  const element = useRoutes(routes)

  useEffect(() => {
    switch (i18n.language) {
      case 'zh-CN':
        dayjs.locale('zh-cn')
        setLocal(zhCN)
        break
      case 'en':
        dayjs.locale('en')
        setLocal(enUS)
        break
    }
  }, [i18n.language])

  return (
    <ConfigProvider locale={locale} theme={theme} input={{ autoComplete: 'off' }}>
      <AntdApp
        style={{
          height: '100%'
        }}
      >
        {element}
      </AntdApp>
    </ConfigProvider>
  )
}

export default App
