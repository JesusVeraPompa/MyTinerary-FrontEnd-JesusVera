import '../App'
import { useDispatch, useSelector } from 'react-redux'
import { getCities } from '../store/actions/citiesActions'
import { getCity } from '../store/actions/cityActions'
import { useEffect, useState } from 'react'

import MenuComponents from '../components/MenuComponents'

export default function NavBarComponents() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCities())
    }, [dispatch])
    return (
        <>
            <header className="relative">
                <div>
                    <div className="fixed top-0 z-20 w-full ">
                        <MenuComponents />
                    </div>
                </div>
            </header>
        </>
    )
}
