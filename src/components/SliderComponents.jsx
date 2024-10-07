import React from 'react'
import { Carousel, IconButton } from '@material-tailwind/react'

const countries =[
    {
        id: 1,
        name: 'Spain',
        image: 'https://www.countryflags.io/es/flat/64.png',
    }
]

export default function SliderComponents() {
    return (
        <>
            <Carousel
                autoplay={{ autoplay: true }}
                loop={{ loop: true }}
                transition={{ type: 'tween', duration: 0.5 }}
                className=""
                prevArrow={({ handlePrev }) => (
                    <IconButton
                        variant="text"
                        color="white"
                        size="lg"
                        onClick={handlePrev}
                        className="!absolute top-2/4 left-4 -translate-y-2/4 z-40"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                            />
                        </svg>
                    </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                    <IconButton
                        variant="text"
                        color="white"
                        size="lg"
                        onClick={handleNext}
                        className="!absolute top-2/4 !right-4 -translate-y-2/4 z-40"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </IconButton>
                )}
            >
                <div className="relative">
                    <div className="flex flex-wrap">
                        <img
                            src="https://dialogopolitico.org/wp-content/uploads/2023/02/Kremlin.jpg"
                            alt="Russia"
                            className="h-[400px] w-[50%] object-cover brightness-[0.8]  hover:scale-110 duration-700"
                        />
                        <p className="absolute parrafo inset-x-0 top-[200px] left-[-100px] md:left-[-200px]  lg:left-[-500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                            Russia
                        </p>
                        <img
                            src="https://fotografias.larazon.es/clipping/cmsimages01/2023/03/09/23F89C33-987C-438A-8E77-AD2AF5EABC1F/turistas-visitan-vacaciones-fiesta-primavera-ciudad-antigua-jianchang-xichang-provincia-sichuan-suroeste-china-27-enero-2023-xinhuali-jieyi_69.jpg?crop=624,351,x0,y33&width=1280&height=720&optimize=low&format=jpg"
                            alt="China"
                            className="h-[400px] w-[50%] object-cover brightness-[0.8] hover:scale-110 duration-700"
                        />
                        <p className="absolute parrafo inset-x-0 top-[200px] left-[100px] md:left-[200px] lg:left-[500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                            China
                        </p>
                        <img
                            src="https://media.realinstitutoelcano.org/wp-content/uploads/2023/01/royo011023ari-esta-muriendo-la-democracia-en-eeuu.jpg"
                            alt="EE.UU."
                            className="h-[400px] w-[50%] object-cover brightness-[0.8] hover:scale-110 duration-700"
                        />
                        <p className="absolute parrafo inset-x-0 top-[600px] left-[-100px] md:left-[-200px] lg:left-[-500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                            EE.UU.
                        </p>
                        <img
                            src="https://www.berlinsbi.com/uploads/sites/2/2023/07/paris-france-student-international-experience.jpg?w=1000&h=666&crop=1"
                            alt="France"
                            className="h-[400px] w-[50%] object-cover brightness-[0.8] hover:scale-110 duration-700"
                        />
                        <p className="absolute parrafo inset-x-0 top-[600px] left-[100px] md:left-[200px] lg:left-[500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                            France
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <div className="flex flex-wrap">
                        <img
                            src="https://www.viajes.cl/hs-fs/hubfs/Santuario%20de%20To%E2%80%93ji%20%20en%20Kioto,%20Jap%C3%B3n.jpg?width=1254&name=Santuario%20de%20To%E2%80%93ji%20%20en%20Kioto,%20Jap%C3%B3n.jpg"
                            alt="Japan"
                            className="h-[400px] w-[50%] object-cover brightness-[0.8] hover:scale-110 duration-700"
                        />
                        <p className="absolute parrafo inset-x-0 top-[200px] left-[-100px] md:left-[-200px]  lg:left-[-500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                            Japan
                        </p>
                        <img
                            src="https://i0.wp.com/fernandotorresimmigration.ca/wp-content/uploads/2023/08/Mejores-Ciudades-Para-Vivir-en-Canada-Como-Latino.png"
                            alt="Canada"
                            className="h-[400px] w-[50%] object-cover brightness-[0.8] hover:scale-110 duration-700"
                        />
                        <p className="absolute parrafo inset-x-0 top-[200px] left-[100px] md:left-[200px] lg:left-[500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                            Canada
                        </p>
                        <img
                            src="https://res.cloudinary.com/hyvrprjak/image/upload/1000x400_colombia_01.jpg"
                            alt="Colombia"
                            className="h-[400px] w-[50%] object-cover brightness-[0.8] hover:scale-110 duration-700"
                        />
                        <p className="absolute parrafo inset-x-0 top-[600px] left-[-100px] md:left-[-200px] lg:left-[-500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                            Colombia
                        </p>
                        <img
                            src="https://www.viaempresa.cat/uploads/s1/26/36/08/76/istock-518400380_11_640x380.jpeg"
                            alt="Iceland"
                            className="h-[400px] w-[50%] object-cover brightness-[0.8] hover:scale-110 duration-700"
                        />
                        <p className="absolute parrafo inset-x-0 top-[600px] left-[100px] md:left-[200px] lg:left-[500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                            Iceland
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <div className="flex flex-wrap">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1697729901052-fe8900e24993?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJnZW50aW5hfGVufDB8fDB8fHww"
                            alt="Argentina"
                            className="h-[400px] w-[50%] object-cover brightness-[0.8] hover:scale-110 duration-700"
                        />
                        <p className="absolute parrafo inset-x-0 top-[200px] left-[-100px] md:left-[-200px]  lg:left-[-500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                            Argentina
                        </p>
                        <img
                            src="https://baobabnature.com/wp-content/uploads/2023/06/egipto-980x551.jpg"
                            alt="China"
                            className="h-[400px] w-[50%] object-cover brightness-[0.8] hover:scale-110 duration-700"
                        />
                        <p className="absolute parrafo inset-x-0 top-[200px] left-[100px] md:left-[200px] lg:left-[500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                            Egypt
                        </p>
                        <img
                            src="https://www.segurilatam.com/wp-content/uploads/sites/5/2024/06/playa-coche-cuba.jpg"
                            alt="Cuba"
                            className="h-[400px] w-[50%] object-cover brightness-[0.8] hover:scale-110 duration-700"
                        />
                        <p className="absolute parrafo inset-x-0 top-[600px] left-[-100px] md:left-[-200px] lg:left-[-500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                            Cuba
                        </p>
                        <img
                            src="https://www.tecidiomas.es/uploads/noticias/3392/imagenes/top-5-ciudades-hablar-ingles.jpg"
                            alt="France"
                            className="h-[400px] w-[50%] object-cover brightness-[0.8] hover:scale-110 duration-700"
                        />
                        <p className="absolute parrafo inset-x-0 top-[600px] left-[100px] md:left-[200px] lg:left-[500px] z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                            England
                        </p>
                    </div>
                </div>
            </Carousel>
            <div className="absolute flex justify-center items-center letf-[50%] inset-x-0 top-[48%] md:top-[47%] z-10 ">
                <div className="w-[400px] flex justify-center items-center">
                    <h2 className="text-[24px] md:text-[32px] text-center backdrop-blur-xl drop-shadow-xl text-black bg-white px-2">
                        "Popular My Itineraries"
                    </h2>
                </div>
            </div>
        </>
    )
}
