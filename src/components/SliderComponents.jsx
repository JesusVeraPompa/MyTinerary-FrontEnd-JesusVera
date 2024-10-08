import React from 'react'
import { Carousel, IconButton } from '@material-tailwind/react'

const countries = [
    {
        slider: '1',
        images: [
            {
                id: 1,
                name: 'Russia',
                image: 'https://dialogopolitico.org/wp-content/uploads/2023/02/Kremlin.jpg',
            },
            {
                id: 2,
                name: 'China',
                image: 'https://fotografias.larazon.es/clipping/cmsimages01/2023/03/09/23F89C33-987C-438A-8E77-AD2AF5EABC1F/turistas-visitan-vacaciones-fiesta-primavera-ciudad-antigua-jianchang-xichang-provincia-sichuan-suroeste-china-27-enero-2023-xinhuali-jieyi_69.jpg?crop=624,351,x0,y33&width=1280&height=720&optimize=low&format=jpg',
            },
            {
                id: 3,
                name: 'EE.UU.',
                image: 'https://media.realinstitutoelcano.org/wp-content/uploads/2023/01/royo011023ari-esta-muriendo-la-democracia-en-eeuu.jpg',
            },
            {
                id: 4,
                name: 'France',
                image: 'https://www.berlinsbi.com/uploads/sites/2/2023/07/paris-france-student-international-experience.jpg?w=1000&h=666&crop=1',
            },
        ],
    },
    {
        slider: '2',
        images: [
            {
                id: 5,
                name: 'Japan',
                image: 'https://www.viajes.cl/hs-fs/hubfs/Santuario%20de%20To%E2%80%93ji%20%20en%20Kioto,%20Jap%C3%B3n.jpg?width=1254&name=Santuario%20de%20To%E2%80%93ji%20%20en%20Kioto,%20Jap%C3%B3n.jpg',
            },
            {
                id: 6,
                name: 'Canada',
                image: 'https://i0.wp.com/fernandotorresimmigration.ca/wp-content/uploads/2023/08/Mejores-Ciudades-Para-Vivir-en-Canada-Como-Latino.png',
            },
            {
                id: 7,
                name: 'Colombia',
                image: 'https://res.cloudinary.com/hyvrprjak/image/upload/1000x400_colombia_01.jpg',
            },
            {
                id: 8,
                name: 'Iceland',
                image: 'https://www.viaempresa.cat/uploads/s1/26/36/08/76/istock-518400380_11_640x380.jpeg',
            },
        ],
    },
    {
        slider: '3',
        images: [
            {
                id: 9,
                name: 'Argentina',
                image: 'https://plus.unsplash.com/premium_photo-1697729901052-fe8900e24993?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJnZW50aW5hfGVufDB8fDB8fHww',
            },
            {
                id: 10,
                name: 'Egypt',
                image: 'https://baobabnature.com/wp-content/uploads/2023/06/egipto-980x551.jpg',
            },
            {
                id: 11,
                name: 'Cuba',
                image: 'https://www.segurilatam.com/wp-content/uploads/sites/5/2024/06/playa-coche-cuba.jpg',
            },
            {
                id: 12,
                name: 'England',
                image: 'https://www.tecidiomas.es/uploads/noticias/3392/imagenes/top-5-ciudades-hablar-ingles.jpg',
            },
        ],
    },
]

export default function SliderComponents() {
    return (
        <>
            <Carousel
                //autoplay={{ autoplay: true }}
                //loop={{ loop: true }}
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
                {countries.map(({ slider, images },index) => (
                    <div className="" key={index}>
                        <div className="flex flex-wrap overflow-hidden">
                            {images?.map(({ id, name, image }, index) => (
                                <div key={index} className=" relative h-[400px] w-[50%]">
                                    <img
                                        src={image}
                                        alt={name}
                                        className="h-[100%] w-[100%] object-cover brightness-[0.8] hover:scale-110 duration-700"
                                    />
                                    <div className="absolute top-[50%] left-[30%] lg:left-[40%]">
                                        <h4 className="parrafo z-10 w-[100%] text-[30px] md:text-[40px] lg:text-[50px] text-white text-center drop-shadow-xl">
                                            {name}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
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
