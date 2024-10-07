import '../App'

import SliderComponents from '../components/SliderComponents'
import MenuComponents from '../components/MenuComponents'

export default function NavBarComponents() {
    return (
        <>
            <div className="relative">
                <div>
                    <div className="fixed top-0 z-20 w-full ">
                        <MenuComponents />
                    </div>
                    <div className="">
                        <SliderComponents />
                    </div>
                </div>
            </div>
        </>
    )
}
