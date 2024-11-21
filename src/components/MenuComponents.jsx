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
import ProfileMenu from './LoginComponents'




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
                            <ProfileMenu />
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
