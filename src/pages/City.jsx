import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getCity } from '../store/actions/cityActions'

import MenuComponents from '../components/MenuComponents'
import LoadingComponents from '../components/LoadingComponents'
import CardsCityComponents from '../components/CardsCityComponents'

export default function City() {
    let dispatch = useDispatch()

    const paramsURL = useParams()

    useEffect(() => {
        dispatch(getCity(paramsURL.nameValue))
    }, [])

    const { city, loading } = useSelector((state) => state.cityStore)

    return (
        <>
            <div className="fixed top-0 z-20 w-full ">
                <MenuComponents />
            </div>
            <div className="p-10"></div>

            <div className="p-2 my-4 flex flex-wrap justify-center gap-4 ">
                {loading ? (
                    <LoadingComponents />
                ) : city.length > 0 ? (
                    city.map((item) => (
                        <div className="Body flex flex-col justify-center items-center">
                            <div className="flex">
                                <CardsCityComponents
                                    id={item.id}
                                    name={item.name}
                                    photo={item.photo}
                                    description={item.description}
                                    country={item.country}
                                    flag_country={item.flag_country}
                                    continent={item.continent}
                                    population={item.population}
                                    language={item.language}
                                    currency={item.currency}
                                    img_currency={item.img_currency}
                                    time_zone={item.time_zone}
                                    ensign={item.ensign}
                                    flag_cities={item.flag_cities}
                                    photo2={item.photo2}
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="flex flex-wrap gap-6 border-gray-300 pb-[50px]">
                        <div className="text-start">
                            <h4 className="text-[20px]">No results found...</h4>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
