import React from 'react'
import { FilterProvider } from '../context/FilterContext';
import MenuComponents from '../components/MenuComponents'
import { CardsCitiesComponents } from '../components/CardsCitiesComponents'
import  CitiesFilter  from '../components/CitiesFilter'

export default function Cities() {

    return (
        <>
            <div className="fixed top-0 z-20 w-full ">
                <MenuComponents />
            </div>
            <div className="p-14"></div>
            <FilterProvider>
            <main className="Body flex flex-col justify-center items-center">
                <div className="flex">
                    <h1 className="text-[40px]">Cities</h1>
                </div>
                <CitiesFilter/>
                <div className="flex flex-col lg:flex-row">
                    <CardsCitiesComponents />
                </div>
            </main>
            </FilterProvider>
        </>
    )
}
