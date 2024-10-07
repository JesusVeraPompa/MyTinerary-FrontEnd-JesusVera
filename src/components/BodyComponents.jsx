import '../App'

import React from 'react'
import TablaComponents from '../components/TablaComponents'





export default function BodyComponents() {
    

    return (
        <>
            <div id="BodyComponents flex justify-center items-center">
                <div className="flex justify-center items-center p-4 pt-10">
                    <h2 className="text-[24px] md:text-[32px] text-center">
                        "Find your perfect trip, designed by insiders who know and love their
                        cities!"
                    </h2>
                </div>
                
                
                <TablaComponents/>



            </div>
        </>
    )
}
