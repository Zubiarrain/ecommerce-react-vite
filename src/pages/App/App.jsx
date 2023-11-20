import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import {Home} from '../Home'
import {MyAccount} from '../MyAccount'
import {MyOrder} from '../MyOrder'
import {MyOrders} from '../MyOrders'
import {NotFound} from '../NotFound'
import {SignIn} from '../SignIn'
import {NavBar} from '../../Components/NavBar'
import './App.css'
import { Layout } from '../../Components/Layout'


const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/mens-clothing', element: <Home />},
    {path: '/womens-clothing', element: <Home />},
    {path: '/jewelery', element: <Home />},
    {path: '/electronics', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders/last', element: <MyOrder />},
    {path: '/my-orders/:id', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/sign-in', element: <SignIn />},
    {path: '/*', element: <NotFound />}
  ])

  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />  
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
