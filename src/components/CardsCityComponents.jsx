import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Dialog, DialogBody, DialogFooter } from '@material-tailwind/react'
import meGustaImg from '../assets/Image/icons8-me-gusta-100.png'

export default function CardsCityComponents({
    id,
    name,
    photo,
    description,
    country,
    flag_country,
    continent,
    population,
    language,
    currency,
    img_currency,
    time_zone,
    ensign,
    flag_cities,
    photo2,
}) {
    const { city, loading } = useSelector((state) => state.cityStore)

    const [size, setSize] = useState(null)

    const handleOpen = (value) => setSize(value)

    return (
        <>
            <div className="text-center">
                <div className="flex justify-center items-center p-2 ">
                    <div className="flex justify-start items-center w-[100%] md:w-[600px]">
                        <Link to={`/MyTineraryJesusVera/cities`} className="link">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-12 bg-black text-white rounded-md p-2 mr-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                                />
                            </svg>
                        </Link>
                        <h1 className="text-[40px]">{name}</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img className="h-[400px] w-[600px] object-cover" src={photo} alt="" />
                </div>
                <div className="flex-col justify-center items-center">
                    <h4 className="text-[24px] font-bold p-4">Description:</h4>
                    <p className="p-2">{description}</p>
                </div>
                <div className="flex-col justify-center items-center ">
                    <h4 className="text-[24px] font-bold p-4">More Info:</h4>
                    <div className="md:flex w-auto justify-center items-center p-2 bg-black text-white">
                        <div className="flex justify-center items-start p-2">
                            <table className="border-collapse border border-slate-500 ... text-left">
                                <tbody>
                                    <tr>
                                        <td className="border border-slate-700 ... font-bold p-2">
                                            Country:
                                        </td>
                                        <td className="border border-slate-700 ... p-2">
                                            {country}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-700 ... font-bold p-2">
                                            Flag Country:
                                        </td>
                                        <td className="border border-slate-700 ... p-2">
                                            <img src={flag_country} alt="" className="w-[100px]" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-700 ... font-bold p-2">
                                            Continent:
                                        </td>
                                        <td className="border border-slate-700 ... p-2">
                                            {continent}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-700 ... font-bold p-2">
                                            Population:
                                        </td>
                                        <td className="border border-slate-700 ... p-2">
                                            {new Intl.NumberFormat('de-DE').format(population)}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-700 ... font-bold p-2">
                                            Language:
                                        </td>
                                        <td className="border border-slate-700 ... p-2">
                                            {language}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-700 ... font-bold p-2">
                                            Currency:
                                        </td>
                                        <td className="border border-slate-700 ... p-2">
                                            {currency}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-700 ... font-bold p-2">
                                            Image Currency:
                                        </td>
                                        <td className="border border-slate-700 ... p-2">
                                            <img src={img_currency} alt="" className="w-[100px]" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-700 ... font-bold p-2">
                                            Time Zone:
                                        </td>
                                        <td className="border border-slate-700 ... p-2">
                                            {time_zone}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-700 ... font-bold p-2">
                                            Ensign Cities:
                                        </td>
                                        <td className="border border-slate-700 ... p-2">
                                            {ensign === 'not found' ? (
                                                'image not found'
                                            ) : (
                                                <img src={ensign} alt="" className="w-[100px]" />
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-700 ... font-bold p-2">
                                            Flag Cities:
                                        </td>
                                        <td className="border border-slate-700 ... p-2">
                                            {flag_cities === 'not found' ? (
                                                'image not found'
                                            ) : (
                                                <img
                                                    src={flag_cities}
                                                    alt=""
                                                    className="w-[100px]"
                                                />
                                            )}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-center items-center p-2">
                            <img src={photo2} alt="" className="w-[600px] h-[400px] object-cover" />
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <h4 className="text-[26px] font-bold p-4">Itineraries:</h4>
                    </div>
                    <div className="p-2 my-4 flex flex-wrap justify-center gap-4 ">
                        {city[0].itineraries.length > 0 ? (
                            city[0].itineraries.map((items) => (
                                <div
                                    key={items._id}
                                    className="w-[300px] h-[565px] max-w-sm rounded overflow-hidden shadow-lg p-2 bg-white"
                                >
                                    <img
                                        className="h-[200px] object-cover"
                                        src={items.img_itinerary}
                                        alt={items.name_itinerary}
                                    />
                                    <div className="p-2">
                                        <div className="font-bold text-[22px] h-[70px]">
                                            {items.name_itinerary}
                                        </div>
                                        <div className="">
                                            <div className="">
                                                Duration: <strong>{items.duration}</strong>
                                            </div>
                                            <div className="">
                                                Price: <strong>{items.price}</strong>
                                            </div>
                                            <div className="h-[45px]">
                                                <strong className="text-[14px]">
                                                    {items.hashtags}
                                                </strong>
                                            </div>
                                            <div className="p-2 shadow-lg rounded-full">
                                                <h4 className="">Created by</h4>
                                                <div className="flex justify-center items-center">
                                                    <img
                                                        src={items.photo}
                                                        alt=""
                                                        className="w-[60px] h-[60px] object-cover rounded-full"
                                                    />
                                                    <strong className="p-2">
                                                        {items.name_user}
                                                    </strong>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <div className="flex justify-around items-center">
                                                <div className="flex ">
                                                    <div className="">
                                                        <button>
                                                            <img
                                                                src={meGustaImg}
                                                                alt=""
                                                                className="w-[50px]"
                                                            />
                                                        </button>
                                                    </div>
                                                    <div className="bg-red-900 hover:bg-sky-500 text-white w-[22px] h-[23px] rounded-full ">
                                                        {items.likes}
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <Button
                                                        onClick={() => handleOpen('xl')}
                                                        variant="gradient"
                                                    >
                                                        View More
                                                    </Button>
                                                </div>
                                            </div>
                                            <Dialog
                                                open={size === 'xl'}
                                                size={size || 'md'}
                                                handler={handleOpen}
                                            >
                                                <DialogBody>
                                                    <div className="md:flexjustify-center items-center text-center">
                                                        <div className="flex-col justify-center items-center text-center">
                                                            <div className="">
                                                                <h4 className="text-[20px] text-black font-bold p-4">
                                                                    ACTIVITIES:
                                                                </h4>
                                                            </div>
                                                            <div className="h-[250px] border shadow flex justify-center">
                                                                <div className="animate-pulse flex-col justify-center items-center text-center">
                                                                    <div className="w-[100px] text-center">
                                                                        <img
                                                                            className=""
                                                                            src="https://icones.pro/wp-content/uploads/2021/02/icono-de-camara-gris.png"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <div className="p-2 pt-5">
                                                                        <div className="h-2 bg-[#B2B5B4] rounded"></div>
                                                                    </div>
                                                                    <div className="p-2">
                                                                        <div className="h-2 bg-[#B2B5B4] rounded"></div>
                                                                    </div>
                                                                    <div className="p-2">
                                                                        <div className="h-2 bg-[#B2B5B4] rounded"></div>
                                                                    </div>
                                                                    <div className="p-2">
                                                                        <p className="text-center text-[18px] text-[#B2B5B4]">
                                                                            Under construction...
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex-col justify-center items-center text-center">
                                                            <div className="">
                                                                <h4 className="text-[20px] text-black font-bold p-4">
                                                                    COMMENTS:
                                                                </h4>
                                                            </div>
                                                            <div className=" h-[250px] border shadow flex justify-center">
                                                                <div className="animate-pulse flex-col justify-center items-center text-center">
                                                                    <div className="w-[100px] text-center">
                                                                        <img
                                                                            className=""
                                                                            src="https://icones.pro/wp-content/uploads/2021/02/icono-de-camara-gris.png"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <div className="p-2 pt-5">
                                                                        <div className="h-2 bg-[#B2B5B4] rounded"></div>
                                                                    </div>
                                                                    <div className="p-2">
                                                                        <div className="h-2 bg-[#B2B5B4] rounded"></div>
                                                                    </div>
                                                                    <div className="p-2">
                                                                        <div className="h-2 bg-[#B2B5B4] rounded"></div>
                                                                    </div>
                                                                    <div className="p-2">
                                                                        <p className="text-center text-[18px] text-[#B2B5B4]">
                                                                            Under construction...
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </DialogBody>
                                                <DialogFooter>
                                                    <Button
                                                        variant="text"
                                                        color="red"
                                                        onClick={() => handleOpen(null)}
                                                        className="mr-1 bg-red-600 text-white hover:bg-black"
                                                    >
                                                        <span>Close</span>
                                                    </Button>
                                                </DialogFooter>
                                            </Dialog>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="h-[380px] flex flex-wrap gap-6 border-gray-300 pb-[50px]">
                                <div className="text-start">
                                    <h4 className="text-[20px]">
                                        No itineraries yet for this city...
                                    </h4>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
