import React from 'react'
import { Link } from 'react-router-dom'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/Image/logo.png'
const navigation = [
    { id: '1', name: 'Home', to: '/MyTineraryJesusVera/home', current: true },
    { id: '2', name: 'Cities', to: '/MyTineraryJesusVera/cities', current: false },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function MenuComponents() {
    return (
        <>
            <Disclosure as="nav" className="">
                <div className="px-2 sm:px-6 lg:px-8 backdrop-blur-sm shadow-xl">
                    <div className="relative flex items-center justify-between ">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <DisclosureButton className="group border  relative inline-flex items-center justify-center rounded-md p-2 bg-black text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon
                                    aria-hidden="true"
                                    className="block h-6 w-6 group-data-[open]:hidden"
                                />
                                <XMarkIcon
                                    aria-hidden="true"
                                    className="hidden h-6 w-6 group-data-[open]:block"
                                />
                            </DisclosureButton>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex items-center w-[100px] p-2">
                                <Link to={`/MyTineraryJesusVera/home`}>
                                    <img alt="logo" src={logo} className="w-[100%]" />
                                </Link>
                            </div>
                            <div className="flex flex-col justify-center p-2">
                                <Link to={`/MyTineraryJesusVera/home`}>
                                    <h1 className="h1 text-[24px] text-white bg-black drop-shadow-xl px-2 py-1 border rounded-md">
                                        My Tinerary
                                    </h1>
                                </Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:block content-center	 ">
                                <div className="flex justify-center items-center space-x-4 ">
                                    {navigation.map((item) => (
                                        <Link
                                            to={item.to}
                                            key={item.id}
                                            className={classNames(
                                                item.current
                                                    ? 'bg-gray-900 text-white link'
                                                    : 'bg-gray-900 text-white hover:bg-gray-700 hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium'
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <svg
                                            width="50"
                                            height="50"
                                            viewBox="0 0 16 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M16 8.5C16 10.6217 15.1571 12.6566 13.6569 14.1569C12.1566 15.6571 10.1217 16.5 8 16.5C5.87827 16.5 3.84344 15.6571 2.34315 14.1569C0.842855 12.6566 0 10.6217 0 8.5C0 6.37827 0.842855 4.34344 2.34315 2.84315C3.84344 1.34285 5.87827 0.5 8 0.5C10.1217 0.5 12.1566 1.34285 13.6569 2.84315C15.1571 4.34344 16 6.37827 16 8.5ZM10 5.5C10 6.03043 9.78929 6.53914 9.41421 6.91421C9.03914 7.28929 8.53043 7.5 8 7.5C7.46957 7.5 6.96086 7.28929 6.58579 6.91421C6.21071 6.53914 6 6.03043 6 5.5C6 4.96957 6.21071 4.46086 6.58579 4.08579C6.96086 3.71071 7.46957 3.5 8 3.5C8.53043 3.5 9.03914 3.71071 9.41421 4.08579C9.78929 4.46086 10 4.96957 10 5.5ZM8 9.5C7.0426 9.49981 6.10528 9.77449 5.29942 10.2914C4.49356 10.8083 3.85304 11.5457 3.454 12.416C4.01668 13.0706 4.71427 13.5958 5.49894 13.9555C6.28362 14.3152 7.13681 14.5009 8 14.5C8.86319 14.5009 9.71638 14.3152 10.5011 13.9555C11.2857 13.5958 11.9833 13.0706 12.546 12.416C12.147 11.5457 11.5064 10.8083 10.7006 10.2914C9.89472 9.77449 8.9574 9.49981 8 9.5Z"
                                                fill="#85c1e9"
                                            />
                                        </svg>
                                    </MenuButton>
                                </div>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                                        >
                                            Login
                                        </a>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </div>

                <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.id}
                                as="a"
                                href={item.to}
                                aria-current={item.current ? 'page' : undefined}
                                className={classNames(
                                    item.current
                                        ? 'bg-gray-900 text-white z-40'
                                        : 'bg-gray-900 text-white z-40 hover:bg-gray-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium'
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </>
    )
}
