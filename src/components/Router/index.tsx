import Layout from '../Layout'
import Home from '../../pages/Home'
import Logement from '../../pages/Logement'
import APropos from '../../pages/APropos'
import Error from '../../pages/Error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/logement/:logementId',
        element: <Logement />,
      },
      {
        path: '/a-propos',
        element: <APropos />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
])

function Router() {
  return <RouterProvider router={router} />
}
export default Router
