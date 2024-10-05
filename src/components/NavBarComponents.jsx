import '../App'
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

import { Carousel, IconButton } from '@material-tailwind/react'

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Cities', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBarComponents() {
    return (
        <>
            <div id="NavBarComponents relative ">
                <div className="absolute top-0 z-10 w-full ">
                    <Disclosure as="nav" className="">
                        <div className="px-2 sm:px-6 lg:px-8 backdrop-blur-sm shadow-xl">
                            <div className="relative flex items-center justify-between ">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <DisclosureButton className="group border  relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                                        <img alt="logo" src={logo} className="w-[100%]" />
                                    </div>
                                    <div className="flex flex-col justify-center p-2">
                                        <h1 className="h1">My Tinerary</h1>
                                        <p className="text-[14px] w-[64px] white-with-blue-shadow">
                                            <strong className="text-yellow-600">Col</strong>
                                            <strong className="text-blue-800">om</strong>
                                            <strong className="text-red-700">bia</strong>
                                        </p>
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block content-center	 ">
                                        <div className="flex justify-center items-center space-x-4 ">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    aria-current={item.current ? 'page' : undefined}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-gray-900 text-white'
                                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'rounded-md px-3 py-2 text-sm font-medium'
                                                    )}
                                                >
                                                    {item.name}
                                                </a>
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
                                                <img
                                                    alt=""
                                                    src="https://avatars.githubusercontent.com/u/172582069?v=4"
                                                    className="w-12 rounded-full"
                                                />
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
                                                    Your Profile
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                                                >
                                                    Settings
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                                                >
                                                    Sign out
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
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current
                                                ? 'bg-gray-900 text-white'
                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                ))}
                            </div>
                        </DisclosurePanel>
                    </Disclosure>
                </div>
                <div className="absolute top-0 z-0">
                    <Carousel
                        autoplay={{ autoplay: true }}
                        //autoplayDelay= {{autoplayDelay:1000}}
                        loop={{ loop: true }}
                        transition={{ type: 'tween', duration: 0.5 }}
                        className=""
                        prevArrow={({ handlePrev }) => (
                            <IconButton
                                variant="text"
                                color="white"
                                size="lg"
                                onClick={handlePrev}
                                className="!absolute top-2/4 left-4 -translate-y-2/4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                    />
                                </svg>
                            </IconButton>
                        )}
                        nextArrow={({ handleNext }) => (
                            <IconButton
                                variant="text"
                                color="white"
                                size="lg"
                                onClick={handleNext}
                                className="!absolute top-2/4 !right-4 -translate-y-2/4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </IconButton>
                        )}
                    >
                        <div className="relative">
                            <img
                                src="https://images.ctfassets.net/cfexf643femz/7ffmw1z22uDIYLvOwPWKvc/d7cdd973106b745b58904dd19a36d687/razones-invertir-cartagena-colombia.jpg"
                                alt="Cartagena"
                                className="h-[700px] w-full object-cover brightness-[0.8]"
                            />
                            <p className="absolute parrafo inset-x-0 bottom-10 z-10 w-[100%] text-[40px] text-white text-center drop-shadow-xl">
                            Cartagena
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="https://img2.rtve.es/i/?w=1600&i=1503653374574.jpg"
                                alt="Cali"
                                className="h-[700px] w-full object-cover brightness-[0.8]"
                            />
                            <p className="absolute parrafo inset-x-0 bottom-10 z-10 w-[100%] text-[40px] text-white text-center drop-shadow-xl">
                            Cali
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/76/Bogota_SkyIine.jpg"
                                alt="Bogotá"
                                className="h-[700px] w-full object-cover brightness-[0.8]"
                            />
                            <p className="absolute parrafo inset-x-0 bottom-10 z-10 w-[100%] text-[40px] text-white text-center drop-shadow-xl">
                            Bogotá
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="https://www.triviantes.com/wp-content/uploads/2023/03/isla-de-san-andres-1.jpeg"
                                alt="San Andrés"
                                className="h-[700px] w-full object-cover brightness-[0.8]"
                            />
                            <p className="absolute parrafo inset-x-0 bottom-10 z-10 w-[100%] text-[40px] text-white text-center drop-shadow-xl">
                            San Andrés
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="https://turismoantioquia.travel/wp-content/uploads/2023/05/Medellin-2-scaled.jpg"
                                alt="Medellín"
                                className="h-[700px] w-full object-cover brightness-[0.8]"
                            />
                            <p className="absolute parrafo inset-x-0 bottom-10 z-10 w-[100%] text-[40px] text-white text-center drop-shadow-xl">
                            Medellín
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="https://www.semana.com/resizer/v2/IQCC6T2AQRGK3BLPJRE6ZN6EQQ.jpg?auth=633e133c4a95a49276e8bade388ba0b87e0bea8020026599ea031ff8804beab5&smart=true&quality=75&width=1980&height=1080"
                                alt="Barranquilla"
                                className="h-[700px] w-full object-cover brightness-[0.8]"
                            />
                            <p className="absolute parrafo inset-x-0 bottom-10 z-10 w-[100%] text-[40px] text-white text-center drop-shadow-xl">
                            Barranquilla
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="https://arriendo.com/co/blog/wp-content/uploads/2021/11/vivir-en-pereira-scaled.jpg"
                                alt="Pereira"
                                className="h-[700px] w-full object-cover brightness-[0.8]"
                            />
                            <p className="absolute parrafo inset-x-0 bottom-10 z-10 w-[100%] text-[40px] text-white text-center drop-shadow-xl">
                            Pereira
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Vista_a%C3%A9rea_de_C%C3%BAcuta.png"
                                alt="Cúcuta"
                                className="h-[700px] w-full object-cover brightness-[0.8]"
                            />
                            <p className="absolute parrafo inset-x-0 bottom-10 z-10 w-[100%] text-[40px] text-white text-center drop-shadow-xl">
                            Cúcuta
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="https://www.kayak.com.co/rimg/dimg/a1/98/0d5f3612-city-10076-177d80eab0a.jpg?width=1980&height=1080&xhint=3300&yhint=1766&crop=true"
                                alt="Santa Marta"
                                className="h-[700px] w-full object-cover brightness-[0.8]"
                            />
                            <p className="absolute parrafo inset-x-0 bottom-10 z-10 w-[100%] text-[40px] text-white text-center drop-shadow-xl">
                            Santa Marta
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="https://mediaim.expedia.com/destination/1/0850885a4a654a0503241d6136ad6dd9.jpg"
                                alt="Armenia"
                                className="h-[700px] w-full object-cover brightness-[0.8]"
                            />
                            <p className="absolute parrafo inset-x-0 bottom-10 z-10 w-[100%] text-[40px] text-white text-center drop-shadow-xl">
                            Armenia
                            </p>
                        </div>
                    </Carousel>
                    <div className="absolute letf-[50%] inset-x-0 bottom-0 z-10 h-[45%]">
                        <h2 className="text-[24px] md:text-[32px] text-center backdrop-blur-sm shadow-xl text-white">
                            "Find your perfect trip, designed by insiders who know and love their
                            cities!"
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}
