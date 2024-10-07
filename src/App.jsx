import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../src/pages/Home'
import Cities from '../src/pages/Cities'
import NotFound from '../src/pages/NotFound'

const router = createBrowserRouter([
    { path: '/MyTineraryJesusVera/', element: <Home /> },
    { path: '/MyTineraryJesusVera/home', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/MyTineraryJesusVera/cities', element: <Cities /> },
    { path: '/cities', element: <Cities /> },
    { path: "/MyTineraryJesusVera/*", element: <NotFound></NotFound> },
    { path: "/*", element: <NotFound></NotFound> },
]);

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}
