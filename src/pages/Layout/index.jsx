import { Outlet } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import {
  BillOutline,
  AddCircleOutline,
  CalculatorOutline,
} from 'antd-mobile-icons'
import { useNavigate, useLocation } from 'react-router-dom'
import './index.scss'
export default function Layout() {
  const location = useLocation()
  const navigate = useNavigate()
  const tabs = [
    {
      key: '/',
      title: '月度账单',
      icon: <BillOutline />,
    },
    {
      key: '/new',
      title: '记账',
      icon: <AddCircleOutline />,
    },
    {
      key: '/year',
      title: '年度账单',
      icon: <CalculatorOutline />,
    },
  ]
  return (
    <div className="kaLayout">
      <div className="page">
        {/* 二级路由出口 */}
        <Outlet />
      </div>
      <TabBar
        className="tabbar"
        activeKey={location.pathname}
        onChange={(key) => navigate(key)}
      >
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  )
}
