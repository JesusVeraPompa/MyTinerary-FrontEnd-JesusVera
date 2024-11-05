import React from 'react'

export default function LoadingComponents() {
    return (
        <>
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
        </>
    )
}
