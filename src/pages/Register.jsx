import React from 'react'
import MenuComponents from '../components/MenuComponents'
import SignUpComponents from '../components/SignUpComponents'

export default function Register() {
    return (
        <>
            <div className="fixed top-0 z-20 w-full ">
                <MenuComponents />
            </div>
            <div className="p-12"></div>

            <div className="p-2 my-4 Body flex flex-wrap justify-center gap-4 ">
                <SignUpComponents />
            </div>
        </>
    )
}
