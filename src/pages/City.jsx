import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import MenuComponents from '../components/MenuComponents'
import FooterComponents from '../components/FooterComponents'

export default function City() {
    const params = useParams()
    const [city, setCity] = useState([])
    const [loading, setLoading] = useState(true)
    // Hacemnos llamado de la API
    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:8080/api/cities/city/${params.id}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                //console.log(data.data)
                setCity(data.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])

    return (
        <>
            <div className="fixed top-0 z-20 w-full ">
                <MenuComponents />
            </div>
            <div className="p-14"></div>

            <div className="p-2 my-4 flex flex-wrap justify-center gap-4 ">
                {loading ? (
                    <div className="w-[300px] h-[380px] border shadow p-4 flex justify-center">
                        <div className="animate-pulse">
                            <img
                                className="w-[200px]"
                                src="https://icones.pro/wp-content/uploads/2021/02/icono-de-camara-gris.png"
                                alt=""
                            />
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
                                <p className="text-center text-[18px] text-[#B2B5B4]">Loading...</p>
                            </div>
                        </div>
                    </div>
                ) : city.length > 0 ? (
                    <div className="Body flex flex-col justify-center items-center p-6">
                        <div className="flex">
                            {city.map((item) => (
                                <div className="text-center">
                                    <div className="flex p-2">
                                        <Link to={`/MyTineraryJesusVera/cities`} className="link">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-16 mr-4 ml-[-80px]"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                                                />
                                            </svg>
                                        </Link>
                                        <h1 className="text-[40px]">{item.name}</h1>
                                    </div>
                                    <div className="">
                                        <img
                                            className="h-[300px] w-[300px] object-cover"
                                            src={item.photo}
                                            alt=""
                                        />
                                    </div>
                                    <div className="">
                                        <h2 className=" p-2">
                                            Country: <strong>{item.country}</strong>
                                        </h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-wrap gap-6 border-gray-300 pb-[50px]">
                        <div className="text-start">
                            <h4 className="text-[20px]">No results found...</h4>
                        </div>
                    </div>
                )}
            </div>
            <FooterComponents />
        </>
    )
}
