import React from 'react'
import { setUser } from '../store/actions/authActions'
import BodyComponents from '../components/BodyComponents'
import SliderComponents from '../components/SliderComponents'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect  } from 'react'
import axios from 'axios'


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

export default function Home() {
    let navigate = useNavigate()
    const dispatch = useDispatch()

    

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const token = params.get('token')
        if (token) {
            localStorage.setItem('token', token)

            loginWithToken(token).then((user) => {
                dispatch(setUser({ user, token }))
            })
            navigate('/MyTineraryJesusVera/home')
        }
    }, [dispatch, navigate])

    return (
        <>
            <SliderComponents />
            <BodyComponents />
        </>
    )
}
