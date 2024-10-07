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
            <div className="relative">
                <div id="NavBarComponents relative">
                    <div className="fixed top-0 z-20 w-full ">
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
                                            <img alt="logo" src={logo} className="w-[100%]" />
                                        </div>
                                        <div className="flex flex-col justify-center p-2">
                                            <h1 className="h1 text-[24px] text-white bg-black drop-shadow-xl px-2 py-1 border rounded-md">My Tinerary</h1>
                                        </div>
                                        <div className="hidden sm:ml-6 sm:block content-center	 ">
                                            <div className="flex justify-center items-center space-x-4 ">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        aria-current={
                                                            item.current ? 'page' : undefined
                                                        }
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-gray-900 text-white'
                                                                : 'text-gray-900 bg-blue-gray-100 hover:bg-gray-700 hover:text-white',
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
                                                    <svg
                                                        width="50"
                                                        height="50"
                                                        viewBox="0 0 16 17"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            clip-rule="evenodd"
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
                    <div className="">
                        <Carousel
                            autoplay={{ autoplay: true }}
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
                                <div className="flex flex-wrap">
                                    <img
                                        src="https://dialogopolitico.org/wp-content/uploads/2023/02/Kremlin.jpg"
                                        alt="RRussiausia"
                                        className="h-[400px] w-[50%] object-cover brightness-[0.8]"
                                    />
                                    <p className="absolute parrafo inset-x-0 top-[200px] left-[-100px] md:left-[-200px]  lg:left-[-500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                                        Russia
                                    </p>
                                    <img
                                        src="https://fotografias.larazon.es/clipping/cmsimages01/2023/03/09/23F89C33-987C-438A-8E77-AD2AF5EABC1F/turistas-visitan-vacaciones-fiesta-primavera-ciudad-antigua-jianchang-xichang-provincia-sichuan-suroeste-china-27-enero-2023-xinhuali-jieyi_69.jpg?crop=624,351,x0,y33&width=1280&height=720&optimize=low&format=jpg"
                                        alt="China"
                                        className="h-[400px] w-[50%] object-cover brightness-[0.8]"
                                    />
                                    <p className="absolute parrafo inset-x-0 top-[200px] left-[100px] md:left-[200px] lg:left-[500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                                        China
                                    </p>
                                    <img
                                        src="https://media.realinstitutoelcano.org/wp-content/uploads/2023/01/royo011023ari-esta-muriendo-la-democracia-en-eeuu.jpg"
                                        alt="EE.UU."
                                        className="h-[400px] w-[50%] object-cover brightness-[0.8]"
                                    />
                                    <p className="absolute parrafo inset-x-0 top-[600px] left-[-100px] md:left-[-200px] lg:left-[-500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                                        EE.UU.
                                    </p>
                                    <img
                                        src="https://www.berlinsbi.com/uploads/sites/2/2023/07/paris-france-student-international-experience.jpg?w=1000&h=666&crop=1"
                                        alt="France"
                                        className="h-[400px] w-[50%] object-cover brightness-[0.8]"
                                    />
                                    <p className="absolute parrafo inset-x-0 top-[600px] left-[100px] md:left-[200px] lg:left-[500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                                        France
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="flex flex-wrap">
                                    <img
                                        src="https://www.viajes.cl/hs-fs/hubfs/Santuario%20de%20To%E2%80%93ji%20%20en%20Kioto,%20Jap%C3%B3n.jpg?width=1254&name=Santuario%20de%20To%E2%80%93ji%20%20en%20Kioto,%20Jap%C3%B3n.jpg"
                                        alt="Japan"
                                        className="h-[400px] w-[50%] object-cover brightness-[0.8]"
                                    />
                                    <p className="absolute parrafo inset-x-0 top-[200px] left-[-100px] md:left-[-200px]  lg:left-[-500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                                        Japan
                                    </p>
                                    <img
                                        src="https://i0.wp.com/fernandotorresimmigration.ca/wp-content/uploads/2023/08/Mejores-Ciudades-Para-Vivir-en-Canada-Como-Latino.png"
                                        alt="Canada"
                                        className="h-[400px] w-[50%] object-cover brightness-[0.8]"
                                    />
                                    <p className="absolute parrafo inset-x-0 top-[200px] left-[100px] md:left-[200px] lg:left-[500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                                        Canada
                                    </p>
                                    <img
                                        src="https://res.cloudinary.com/hyvrprjak/image/upload/1000x400_colombia_01.jpg"
                                        alt="Colombia"
                                        className="h-[400px] w-[50%] object-cover brightness-[0.8]"
                                    />
                                    <p className="absolute parrafo inset-x-0 top-[600px] left-[-100px] md:left-[-200px] lg:left-[-500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                                        Colombia
                                    </p>
                                    <img
                                        src="https://www.viaempresa.cat/uploads/s1/26/36/08/76/istock-518400380_11_640x380.jpeg"
                                        alt="Iceland"
                                        className="h-[400px] w-[50%] object-cover brightness-[0.8]"
                                    />
                                    <p className="absolute parrafo inset-x-0 top-[600px] left-[100px] md:left-[200px] lg:left-[500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                                        Iceland
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="flex flex-wrap">
                                    <img
                                        src="https://plus.unsplash.com/premium_photo-1697729901052-fe8900e24993?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJnZW50aW5hfGVufDB8fDB8fHww"
                                        alt="Argentina"
                                        className="h-[400px] w-[50%] object-cover brightness-[0.8]"
                                    />
                                    <p className="absolute parrafo inset-x-0 top-[200px] left-[-100px] md:left-[-200px]  lg:left-[-500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                                        Argentina
                                    </p>
                                    <img
                                        src="https://baobabnature.com/wp-content/uploads/2023/06/egipto-980x551.jpg"
                                        alt="China"
                                        className="h-[400px] w-[50%] object-cover brightness-[0.8]"
                                    />
                                    <p className="absolute parrafo inset-x-0 top-[200px] left-[100px] md:left-[200px] lg:left-[500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                                        Egypt
                                    </p>
                                    <img
                                        src="https://www.segurilatam.com/wp-content/uploads/sites/5/2024/06/playa-coche-cuba.jpg"
                                        alt="Cuba"
                                        className="h-[400px] w-[50%] object-cover brightness-[0.8]"
                                    />
                                    <p className="absolute parrafo inset-x-0 top-[600px] left-[-100px] md:left-[-200px] lg:left-[-500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                                        Cuba
                                    </p>
                                    <img
                                        src="https://www.tecidiomas.es/uploads/noticias/3392/imagenes/top-5-ciudades-hablar-ingles.jpg"
                                        alt="France"
                                        className="h-[400px] w-[50%] object-cover brightness-[0.8]"
                                    />
                                    <p className="absolute parrafo inset-x-0 top-[600px] left-[100px] md:left-[200px] lg:left-[500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                                        England
                                    </p>
                                </div>
                            </div>
                        </Carousel>
                        <div className="absolute flex justify-center items-center letf-[50%] inset-x-0 top-[48%] md:top-[47%] z-10 ">
                            <div className="w-[400px] flex justify-center items-center">
                                <h2 className="text-[24px] md:text-[32px] text-center backdrop-blur-xl drop-shadow-xl text-black bg-white px-2">
                                    "Popular My Itineraries"
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
