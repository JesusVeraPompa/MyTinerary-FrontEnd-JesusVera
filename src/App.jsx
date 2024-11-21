import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import StandarLayout from './layout/StandarLayout'
import Home from '../src/pages/Home'
import Cities from '../src/pages/Cities'
import City from '../src/pages/City'
import SignIn from '../src/pages/SignIn'
import NotFound from '../src/pages/NotFound'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUser } from './store/actions/authActions'
import SignRoute from './components/SignRoute'
import { Navigate } from "react-router-dom";

const router = createBrowserRouter([
    {
        element: <StandarLayout />,
        children: [
            { path: '/MyTineraryJesusVera/', element: <Home /> },
            { path: '/MyTineraryJesusVera/home', element: <Home /> },
            { path: '/MyTineraryJesusVera/cities', element: <Cities /> },
            { path: '/MyTineraryJesusVera/cities/city/:nameValue', element: <City /> },
            {
                path: '/MyTineraryJesusVera/sign-in',
                element: (
                    <SignRoute>
                        <SignIn></SignIn>
                    </SignRoute>
                ),
            },
            { path: '/MyTineraryJesusVera/*', element: <NotFound></NotFound> },
            { path: '/*', element: <NotFound></NotFound> },
        ],
    },
])

const loginWithToken = async (token) => {
    try {
        console.log('Se ejecuto Login With Token')

        const response = await axios.get('http://localhost:8080/api/users/validateToken', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        console.log(response.data.response)
        return response.data.response
    } catch (error) {
        console.log('error', error)
        if (error.message === 'Request failed with status code 401') {
            localStorage.removeItem('token')
            return <Navigate to="/MyTineraryJesusVera/home"></Navigate>
        }
    }
}

export default function App() {
    const dispatch = useDispatch()
    let token = localStorage.getItem('token')
    if (token) {
        loginWithToken(token).then((user) => {
            dispatch(setUser({ user, token }))
        })
    }
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}
