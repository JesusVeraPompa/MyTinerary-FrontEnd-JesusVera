import React from 'react'
import MenuComponents from '../components/MenuComponents'
import FooterComponents from '../components/FooterComponents'
import TablaComponents from '../components/TablaComponents'
import SearchComponents from '../components/SearchComponents'

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
                    <div className="w-[300px] h-[200px] border shadow p-4 m-4 flex justify-center">
                        <div className="animate-pulse">
                            <img
                                className="w-[200px]"
                                src="/src/assets/images/image-loading.svg"
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
                    <div className="w-[300px] h-[200px] border shadow p-4 m-4 flex justify-center">
                        <div className="animate-pulse">
                            <img
                                className="w-[200px]"
                                src="/src/assets/images/image-loading.svg"
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
                    <div className="w-[300px] h-[200px] border shadow p-4 m-4 flex justify-center">
                        <div className="animate-pulse">
                            <img
                                className="w-[200px]"
                                src="/src/assets/images/image-loading.svg"
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
                    <div className="w-[300px] h-[200px] border shadow p-4 m-4 flex justify-center">
                        <div className="animate-pulse">
                            <img
                                className="w-[200px]"
                                src="/src/assets/images/image-loading.svg"
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
                </div>
            </div>
            <FooterComponents />
        </>
    )
}
