import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/actions/authActions'
import { Card, Input, Button, Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

export default function SignInComponents() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const authStore = useSelector((state) => state.authStore)
    console.log('Estado del Auth', authStore)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login({ email, password }))
    }

    const loading = authStore.loading
    const error = authStore.error
    return (
        <Card color="transparent" shadow={false}>
            <Typography variant="h2" color="blue-gray">
                Sign In
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Welcome, enter your credentials.
            </Typography>
            <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Email
                    </Typography>
                    <Input
                        type="email"
                        size="lg"
                        placeholder="name@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Password
                    </Typography>
                    <Input
                        type="password"
                        size="lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                    />
                </div>

                <Button type="submit" className="mt-6" fullWidth>
                    sign ip
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Don't have an account?{' '}
                    <a href="#" className="font-medium text-blue-900">
                        Register
                    </a>
                </Typography>
                {loading && <p className="text-center text-teal-400">Loading...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}
            </form>

            
        </Card>
    )
}
