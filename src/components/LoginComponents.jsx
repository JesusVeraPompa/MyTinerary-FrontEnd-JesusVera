import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/actions/authActions'
import {
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
} from '@material-tailwind/react'
import { ChevronDownIcon, PowerIcon } from '@heroicons/react/24/solid'

export default function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const closeMenu = () => setIsMenuOpen(false)

    const user = useSelector((state) => state.authStore.user)


    const dispatch = useDispatch()

    const isLastItem1 = false
    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900 p-0.5 w-[49px] h-[50px] object-cover"
                        src={`${
                            user
                                ? user.photo
                                : 'https://img.freepik.com/vector-premium/icono-perfil-avatar-predeterminado-imagen-usuario-redes-sociales-icono-avatar-gris-silueta-perfil-blanco-ilustracion-vectorial_561158-3408.jpg'
                        }`}
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="">
                {!user && (
                    <Link to={`/MyTineraryJesusVera/sign-in`}>
                        <Button
                            className="flex items-center w-full text-transform: capitalize"
                            variant="text"
                        >
                            <div className="px-2">
                                {React.createElement(PowerIcon, {
                                    className: `h-4 w-4 ml-2`,
                                    strokeWidth: 2,
                                })}
                            </div>
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color="inherit"
                            >
                                <span>Sign In</span>
                            </Typography>
                        </Button>
                    </Link>
                )}
                {user && (
                    <div
                        onClick={closeMenu}
                        className="flex items-center"
                    >
                        <div className="flex items-center justify-center text-center w-full">
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color="inherit"
                            >
                                <strong>{user.name}{' '}{user.surname}</strong>
                            </Typography>
                        </div>
                    </div>
                )}
                {user && (
                    <div
                        onClick={closeMenu}
                        className="flex items-center"
                    >
                        <div className="flex items-center justify-center text-center w-full">
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color="inherit"
                            >
                                {user.email}
                            </Typography>
                        </div>
                    </div>
                )}
                {user && (
                    <div
                        onClick={closeMenu}
                        className="flex items-center"
                    >
                        <div className="flex items-center justify-center text-center w-full">
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color="inherit"
                            >
                                Role: <strong>{user.role}</strong>
                            </Typography>
                        </div>
                    </div>
                )}
                {user && (
                    <Link to={`/MyTineraryJesusVera/sign-in`}>
                        <Button
                            onClick={() => dispatch(logout())}
                            className="flex items-center w-full text-transform: capitalize"
                            variant="text"
                        >
                            <div className="px-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6 text-red-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                                    />
                                </svg>
                            </div>
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color="red"
                            >
                                <span>Sign Out</span>
                            </Typography>
                        </Button>
                    </Link>
                )}
            </MenuList>
        </Menu>
    )
}
