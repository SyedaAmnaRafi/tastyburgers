import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { AppLayout } from './components/Layout/AppLayout'
import { Home } from './pages/Home'
import { getAllBurgersApiData } from '../public/GetAllBurgerData'

function App() {
  const router = createBrowserRouter([
    {
      path: "/tastyburgers/",
      element: <Home/>,
      loader: getAllBurgersApiData,
    },
    {
      path: "/tastyburgers/about",
      element: <Home/>,
      loader: getAllBurgersApiData,
    }
  ])
  

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
