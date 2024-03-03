import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from '@/router'
import { Provider } from 'react-redux'
import store from '@/store'
import './App.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>,
)
