import Layout from '@/pages/Layout'
import Month from '@/pages/Month'
import YearBill from '@/pages/YearBill'
import KeepAccount from '@/pages/KeepAccount'
import { createBrowserRouter } from 'react-router-dom'
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Month />,
      },
      {
        path: 'year',
        element: <YearBill />,
      },
    ],
  },
  {
    path: '/new',
    element: <KeepAccount />,
  },
])
export default routes
