import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Academics from './Pages/Academics'
import Users from './Pages/Users'
import UserDetails from './Pages/UserById'
import Addmission from './Pages/Addmission'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,  
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'Users',
          element: <Users />
        },
        {
          path: '/user/:id',
          element: <UserDetails />
        },
        {
          path: 'Academics',
          element: <Academics />
        },
        {
          path: 'Addmission',
          element: <Addmission />
        },
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
