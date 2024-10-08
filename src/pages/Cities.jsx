import React from 'react'
import MenuComponents from '../components/MenuComponents'
import FooterComponents from '../components/FooterComponents'
import TablaComponents from '../components/TablaComponents'
import SearchComponents from '../components/SearchComponents'
import LoadingComponents from '../components/LoadingComponents'




export default function Cities() {
    return (
        <>
            <div className="fixed top-0 z-20 w-full ">
                <MenuComponents />
            </div>
            <div className="">
                <TablaComponents />
            </div>
            <div className="Body flex flex-col justify-center items-center p-6">
                <div className="flex">
                    <h1 className="text-[40px]">Cities</h1>
                </div>
                <div className="">
                    <SearchComponents />
                </div>
                <div className="flex flex-col lg:flex-row p-6">
                    <LoadingComponents/>
                    <LoadingComponents/>
                    <LoadingComponents/>
                    <LoadingComponents/>
                </div>
            </div>
            <FooterComponents />
        </>
    )
}
