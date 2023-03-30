import Layout from '../Layout'
import Home from '../../pages/Home'
import Logement from '../../pages/Logement'
import APropos from '../../pages/APropos'
import Error from '../../pages/Error'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import loader from '../../utils/loader'

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Navigate replace to="/404" />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/logement/:logementId',
        element: <Logement />,
        loader: async ({ params }) => {
          return loader({ logementId: `${params.logementId}` })
        },
      },
      {
        path: '/a-propos',
        element: <APropos />,
      },
      {
        path: '/404',
        element: <Error />,
      },
    ],
  },
])

function Router() {
  return <RouterProvider router={router} />
}
export default Router
