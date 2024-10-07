import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Cities from './pages/Cities'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
    { path: '/MyTineraryJesusVera/', element: <Home /> },
    { path: '/MyTineraryJesusVera/home', element: <Home /> },
    { path: '/MyTineraryJesusVera/cities', element: <Cities /> },
    { path: "/MyTineraryJesusVera/*", element: <NotFound></NotFound> },
]);

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}
