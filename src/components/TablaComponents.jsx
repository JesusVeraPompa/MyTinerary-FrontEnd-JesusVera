import React from 'react'
import { Link } from 'react-router-dom'
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Button } from '@material-tailwind/react'
const data = [
    {
        label: 'Russia',
        value: 'Russia',
        images: [
            {
                imageLink:
                    'https://ofsi.blog.gov.uk/wp-content/uploads/sites/217/2022/03/Russia-red-square.jpg',
            },
            {
                imageLink:
                    'https://www.state.gov/wp-content/uploads/2023/07/shutterstock_112421816v2.jpg',
            },
            {
                imageLink:
                    'https://career-advice.jobs.ac.uk/wp-content/uploads/Russia-e1634207469419-1170x630.jpg.optimal.jpg',
            },
            {
                imageLink:
                    'https://carnegie-production-assets.s3.amazonaws.com/static/media/images/iStock-171289370.jpg',
            },
            {
                imageLink:
                    'https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg',
            },
            {
                imageLink:
                    'https://i.cbc.ca/1.6602263.1664560095!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/1243620737.jpg',
            },
        ],
    },
    {
        label: 'China',
        value: 'China',
        images: [
            {
                imageLink: 'https://s10.s3c.es/imag/_v0/2986x1673/9/9/a/dreamstime_l_336586793.jpg',
            },
            {
                imageLink:
                    'https://miro.medium.com/v2/resize:fit:10670/1*0DLP1bcAkc7LFq-PO--8kg.jpeg',
            },
            {
                imageLink:
                    'https://media.cnn.com/api/v1/images/stellar/prod/cnne-1759787-china-comunista.jpg?q=w_1110,c_fill',
            },
            {
                imageLink:
                    'https://media.realinstitutoelcano.org/wp-content/uploads/2021/11/danza-dragon-puerta-del-sol-riccardocuppini.jpg',
            },
            {
                imageLink: 'https://studyinchinas.com/wp-content/uploads/2019/06/beauty1.jpg',
            },
            {
                imageLink:
                    'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/8d3a/live/302b9680-c4e2-11ee-be3f-71c082ac4827.jpg.webp',
            },
        ],
    },
    {
        label: 'EE.UU.',
        value: 'EE.UU.',
        images: [
            {
                imageLink:
                    'https://c.files.bbci.co.uk/185FF/production/_121793899_7d83eed3-475d-4486-a6ce-62bbd915d9e3.jpg',
            },
            {
                imageLink:
                    'https://media.es.wired.com/photos/6467c36ca566376ee967bc70/16:9/w_2560%2Cc_limit/To-Save-Downtowns-We-Must-Destroy-Them-Business-1252673490.jpg',
            },
            {
                imageLink: 'https://www.purosviajes.com/wp-content/uploads/2021/03/estatua-de.jpg',
            },
            {
                imageLink:
                    'https://static.hosteltur.com/app/public/uploads/img/articles/2016/08/01/L_5c1a496b7145a_usa-turismo1.jpg',
            },
            {
                imageLink:
                    'https://noticiaslogisticaytransporte.com/wp-content/uploads/2019/02/puerto-de-oakland.jpg',
            },
            {
                imageLink:
                    'https://fotografias.larazon.es/clipping/cmsimages01/2021/01/07/4782868C-543B-4F67-8436-2CC4A2FB22B0/98.jpg?crop=5472,3079,x0,y284&width=1900&height=1069&optimize=low&format=webply',
            },
        ],
    },
    {
        label: 'France',
        value: 'France',
        images: [
            {
                imageLink:
                    'https://i.natgeofe.com/k/54b5e731-f8d6-4a93-92e0-b7b137cac411/france-champs-elysees-paris.jpg?wp=1&w=1084.125&h=609',
            },
            {
                imageLink:
                    'https://www.state.gov/wp-content/uploads/2023/07/shutterstock_667548661v2.jpg',
            },
            {
                imageLink:
                    'https://lp-cms-production.imgix.net/2024-05/GettyImages-1707772810.jpg?w=1440&h=810&fit=crop&auto=format&q=75',
            },
            {
                imageLink:
                    'https://www.campusfrance.org/sites/default/files/styles/mobile_visuel_principal_page/public/143736_A_20128726.jpg?itok=1g2xcdLT',
            },
            {
                imageLink:
                    'https://www.welcometofrance.com/app/uploads/2019/12/alexander-kagan-t9Td0zfDTwI-unsplash-1920x1280.jpg',
            },
            {
                imageLink:
                    'https://www.francealumni.fr/ressources/temp/images/80_700t350_4231259205_2024111428-france-eiffel.jpg',
            },
        ],
    },
    {
        label: 'Japan',
        value: 'Japan',
        images: [
            {
                imageLink: 'https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg',
            },
            {
                imageLink:
                    'https://storage.googleapis.com/jpn-new-wp/uploads/2021/08/f4526278-image_tokyo.jpg',
            },
            {
                imageLink:
                    'https://media.cnn.com/api/v1/images/stellar/prod/230210161917-01-japan-never-traveler-culture-tokyo.jpg?c=16x9&q=h_833,w_1480,c_fill',
            },
            {
                imageLink: 'https://att-japan.net/wp-content/uploads/2023/06/pixta_97309535_M.webp',
            },
            {
                imageLink:
                    'https://admin.expatica.com/jp/wp-content/uploads/sites/18/2023/11/tokyo-skyline-fuji.jpg',
            },
            {
                imageLink:
                    'https://i.natgeofe.com/n/eb9f0faa-75bc-47e2-8b14-253031b74125/bigtripjapantokyocrossing.jpg',
            },
        ],
    },
    {
        label: 'Canada',
        value: 'Canada',
        images: [
            {
                imageLink:
                    'https://lestresorsderable.com/img/cms/Blog%20Canada%20l%20Juin/pourquoi-le-canada-est-consid%C3%A9re-comme-lun-des-pays-les-plus-surs-au-monde.jpg',
            },
            {
                imageLink: 'https://cdn.datosmundial.com/pics/og/tourism-CAN.jpg',
            },
            {
                imageLink:
                    'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/27000/27764-Moraine-Lake.jpg',
            },
            {
                imageLink:
                    'https://wp.growproexperience.com/wp-content/uploads/2020/09/ciudades-de-canada-vancouver.jpg',
            },
            {
                imageLink:
                    'https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/c_fill/w_1280/element/11/110845_shutterstock_255015211.jpg',
            },
            {
                imageLink:
                    'https://localadventures.mx/blog/wp-content/uploads/2023/06/1-3-1024x836.png',
            },
        ],
    },
    {
        label: 'Colombia',
        value: 'Colombia',
        images: [
            {
                imageLink:
                    'https://imagenes.eltiempo.com/files/image_1200_600/uploads/2024/04/23/6627faf6d6059.jpeg',
            },
            {
                imageLink:
                    'https://media.iatiseguros.com/wp-content/uploads/2018/03/04005252/es-seguro-viajar-a-colombia-3.jpg',
            },
            {
                imageLink:
                    'https://blog.centraldereservas.com/wp-content/uploads/2022/01/Que-ver-en-Colombia.jpg',
            },
            {
                imageLink:
                    'https://edicom.co/.imaging/default/website/es_co/blog/como-es-la-factura-electronica-en-colombia/image',
            },
            {
                imageLink:
                    'https://static.plusultra.com/media/1016/cual-es-la-capital-de-colombia-2.jpg?cropmode=percentaje&width=480',
            },
            {
                imageLink:
                    'https://expatmoney.com/hs-fs/hubfs/Streets%20of%20Cartagena%20in%20Colombia.jpg?width=850&height=478&name=Streets%20of%20Cartagena%20in%20Colombia.jpg',
            },
        ],
    },
    {
        label: 'Iceland',
        value: 'Iceland',
        images: [
            {
                imageLink: 'https://cdn.britannica.com/71/73371-050-9DFAEC1E/Reykjavik-Iceland.jpg',
            },
            {
                imageLink:
                    'https://res.cloudinary.com/icelandtours/g_auto,f_auto,c_auto,w_3840,q_auto:good/flatey_island_summer_e2506cca1c.jpg',
            },
            {
                imageLink:
                    'https://www.odysseys-unlimited.com/wp-content/uploads/2023/05/AdobeStock_329668972-scaled.jpeg',
            },
            {
                imageLink:
                    'https://www.discover-the-world.com/app/uploads/2018/10/iceland-south-west-seljalandsfoss-lone-person-sunburst-istk-1800x0-c-default.jpg',
            },
            {
                imageLink:
                    'https://res.cloudinary.com/enchanting/q_70,f_auto,w_838,h_474,c_fit/exodus-web/2021/12/kirkjufellsfoss_iceland.jpg',
            },
            {
                imageLink:
                    'https://a.storyblok.com/f/53624/4096x2222/b1c9d8bd74/iceland_horses-winter_pixabay_4096x2222.jpg',
            },
        ],
    },
    {
        label: 'Argentina',
        value: 'Argentina',
        images: [
            {
                imageLink:
                    'https://media.cnn.com/api/v1/images/stellar/prod/cnne-1761988-gettyimages-2175467260.jpg?c=16x9&q=h_438,w_780,c_fill',
            },
            {
                imageLink:
                    'https://plus.unsplash.com/premium_photo-1697729901052-fe8900e24993?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJnZW50aW5hJTIwfGVufDB8fDB8fHww',
            },
            {
                imageLink:
                    'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/a4e2/live/524bca40-6921-11ee-99df-dd674d5e8274.png.webp',
            },
            {
                imageLink:
                    'https://images.adsttc.com/media/images/6454/4a6b/e3fd/f201/7bc6/8886/newsletter/el-origen-de-las-ciudades-la-plata-argentina_2.jpg?1683245777',
            },
            {
                imageLink:
                    'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/latin-america/argport.jpg?crop=0%2C0%2C2500%2C1375&wid=4000&hei=2200&scl=0.625',
            },
            {
                imageLink:
                    'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/64000/64898-Argentina.jpg',
            },
        ],
    },
    {
        label: 'Egypt',
        value: 'Egypt',
        images: [
            {
                imageLink:
                    'https://i.natgeofe.com/k/109a4e08-5ebc-48a5-99ab-3fbfc1bbd611/Giza_Egypt_KIDS_0123_square.jpg',
            },
            {
                imageLink:
                    'https://i0.wp.com/www.touristegypt.com/wp-content/uploads/2023/03/giza-pyramids-cairo-egypt-with-palm.jpg?fit=2424%2C1500&ssl=1',
            },
            {
                imageLink:
                    'https://i.natgeofe.com/n/2f22b544-9d10-4f9f-8e20-5e84eaf78144/resized-GettyImages-1411179963.jpg',
            },
            {
                imageLink:
                    'https://www.travelmarvel.com.au/-/media/travelmarvel-responsive-website/africa/hero-panel-12-5/egypt-12-5/hc-t-egy-egypt-pyramids-of-giza-camel-1118623529-s-12x5.jpg?useCustomFunctions=1&rw=2280&w=1900&h=950&cropX=190&cropY=0',
            },
            {
                imageLink:
                    'https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F0636c382-ffa0-4979-941c-7bddb13cb190.jpg?crop=1320%2C880%2C440%2C0',
            },
            {
                imageLink:
                    'https://i.natgeofe.com/k/6d1c689e-d3b9-416f-be45-c87d523ca693/Abu%20Simbel_Egypt_KIDS_0123.jpg?wp=1&w=1084.125&h=721.875',
            },
        ],
    },
    {
        label: 'Cuba',
        value: 'Cuba',
        images: [
            {
                imageLink:
                    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/33/cuba.jpg?w=1400&h=1400&s=1',
            },
            {
                imageLink:
                    'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/9736_13B59293A09A4F66-4.jpg?w=1024',
            },
            {
                imageLink: 'https://www.sur.org.co/wp-content/uploads/2023/11/la-habana-2.jpg',
            },
            {
                imageLink:
                    'https://media.iatiseguros.com/wp-content/uploads/2020/01/04012925/itinerario-viaje-cuba-10-dias-2.jpg',
            },
            {
                imageLink:
                    'https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2020/03/Playas-de-Cuba.jpg?fit=1000%2C562&ssl=1',
            },
            {
                imageLink:
                    'https://archivo.prensa-latina.cu/wp-content/uploads/2023/03/Santiago-de-Cuba.jpg',
            },
        ],
    },
    {
        label: 'England',
        value: 'England',
        images: [
            {
                imageLink:
                    'https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/024/811/original/c56bd725101bef2aaef43b0def6a24c7/england-london-big-ben-river-night.jpg',
            },
            {
                imageLink:
                    'https://businesstraveldestinations.com/wp-content/uploads/2019/04/London-Skyline.jpg',
            },
            {
                imageLink:
                    'https://i.natgeofe.com/n/4def1048-f5e5-4973-ad3a-e188a97d363f/regents-street-london-england.jpg',
            },
            {
                imageLink:
                    'https://uceap.universityofcalifornia.edu/sites/default/files/marketing-images/life-in-city-images/london-england-glance.jpg',
            },
            {
                imageLink:
                    'https://www.travelstart.com.ng/blog/wp-content/uploads/2015/04/Chester-England.jpg',
            },
            {
                imageLink:
                    'https://media.cnn.com/api/v1/images/stellar/prod/160418173456-beautiful-england-18-london-england.jpg?q=w_1900,h_1095,x_0,y_0,c_fill/h_447',
            },
        ],
    },
]

export default function TablaComponents() {
    return (
        <>
            <div className="flex justify-center items-center p-4 pt-10">
                <h4 className="text-3xl font-bold text-gray-800 text-center">
                    View of the 12 most popular Cities in the World
                </h4>
            </div>
            <div className="relative">
                <div className="flex justify-center p-2">
                    <Tabs value="Russia">
                        <TabsHeader className="flex flex-wrap items-center justify-center">
                            {data.map(({ label, value }) => (
                                <Tab
                                    className="w-[100px] lg:w-[120px] align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-300 text-gray-900 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none active:text-gray-900"
                                    key={value}
                                    value={value}
                                >
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody className="grid grid-cols-1 gap-4 ">
                            {data.map(({ value, images }) => (
                                <TabPanel
                                    className="grid grid-cols-2 gap-4 md:grid-cols-3 rounded"
                                    key={value}
                                    value={value}
                                >
                                    {images?.map(({ imageLink }, index) => (
                                        <div className="group/item relative" key={index}>
                                            <img
                                                className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                                                src={imageLink}
                                                alt="image-photo"
                                            />
                                            <div className="absolute top-0 w-[100%] h-[100%] group/edit invisible hover:bg-slate-200 group-hover/item:visible z-20 flex  backdrop-brightness-50 justify-center items-center p-4">
                                                <Link
                                                    to={`/MyTineraryJesusVera/cities`}
                                                    className="link"
                                                >
                                                    <Button>See more information</Button>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                </div>
            </div>
        </>
    )
}
