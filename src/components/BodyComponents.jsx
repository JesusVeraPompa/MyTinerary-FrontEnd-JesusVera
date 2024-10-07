import '../App'
import React from 'react'
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react'

import {
    Collapse,
    Button,
    Card,
    Typography,
    CardBody,
    List,
    ListItem,
    Input,
} from '@material-tailwind/react'

const data = [
    {
        label: 'Russia',
        value: 'Russia',
        images: [
            {
                imageLink:
                    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
            },
            {
                imageLink:
                    'https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg',
            },
            {
                imageLink:
                    'https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
            },
        ],
    },
    {
        label: 'China',
        value: 'China',
        images: [
            {
                imageLink:
                    'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
            },
        ],
    },
    {
        label: 'EE.UU.',
        value: 'EE.UU.',
        images: [
            {
                imageLink:
                    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
            },
            {
                imageLink:
                    'https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg',
            },
            {
                imageLink:
                    'https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
            },
        ],
    },
    {
        label: 'France',
        value: 'France',
        images: [
            {
                imageLink:
                    'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
            },
        ],
    },
    {
        label: 'Japan',
        value: 'Japan',
        images: [
            {
                imageLink:
                    'https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg',
            },
            {
                imageLink:
                    'https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
            },
        ],
    },
    {
        label: 'Canada',
        value: 'Canada',
        images: [
            {
                imageLink:
                    'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
            },
        ],
    },
    {
        label: 'Colombia',
        value: 'Colombia',
        images: [
            {
                imageLink:
                    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
            },
            {
                imageLink:
                    'https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg',
            },
            {
                imageLink:
                    'https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
            },
        ],
    },
    {
        label: 'Iceland',
        value: 'Iceland',
        images: [
            {
                imageLink:
                    'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
            },
        ],
    },
    {
        label: 'Argentina',
        value: 'Argentina',
        images: [
            {
                imageLink:
                    'https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg',
            },
            {
                imageLink:
                    'https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
            },
        ],
    },
    {
        label: 'Egypt',
        value: 'Egypt',
        images: [
            {
                imageLink:
                    'https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg',
            },
            {
                imageLink:
                    'https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
            },
        ],
    },
    {
        label: 'Cuba',
        value: 'Cuba',
        images: [
            {
                imageLink:
                    'https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg',
            },
            {
                imageLink:
                    'https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
            },
        ],
    },
    {
        label: 'England',
        value: 'England',
        images: [
            {
                imageLink:
                    'https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg',
            },
            {
                imageLink:
                    'https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
            },
            {
                imageLink:
                    'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
            },
        ],
    },
]

export default function BodyComponents() {
    const [openInput, setOpenInput] = React.useState(false)
    const toggleOpenInput = () => setOpenInput((cur) => !cur)

    const [openDateStart, setOpenDateStart] = React.useState(false)
    const toggleOpenDateStart = () => setOpenDateStart((cur) => !cur)

    const [openDateEnd, setOpenDateEnd] = React.useState(false)
    const toggleOpenDateEnd = () => setOpenDateEnd((cur) => !cur)

    return (
        <>
            <div id="BodyComponents flex justify-center items-center">
                <div className="flex justify-center items-center p-4 pt-10">
                    <h2 className="text-[24px] md:text-[32px] text-center">
                        "Find your perfect trip, designed by insiders who know and love their
                        cities!"
                    </h2>
                </div>
                <div className="flex flex-col justify-center items-center md:flex-row p-2  mt-10 mb-10">
                    <div className="flex flex-col border rounded-lg shadow-lg p-2 md:flex-row">
                        <div className="flex flex-col justify-center items-center p-2">
                            <div className="">
                                <h4 className="text-[18px]">Reservation: </h4>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center p-2">
                            <div className="">
                                <Input
                                    label="Where to? Destination"
                                    onClick={toggleOpenInput}
                                    className="w-[350px]"
                                />
                            </div>
                            <div className="">
                                <Collapse open={openInput}>
                                    <Card className="">
                                        <CardBody>
                                            <List>
                                                <ListItem>Russia</ListItem>
                                                <ListItem>China</ListItem>
                                                <ListItem>EE.UU.</ListItem>
                                                <ListItem>France</ListItem>
                                                <ListItem>Japan</ListItem>
                                                <ListItem>Canada</ListItem>
                                                <ListItem>Colombia</ListItem>
                                                <ListItem>Iceland</ListItem>
                                                <ListItem>Argentina</ListItem>
                                                <ListItem>Egypt</ListItem>
                                                <ListItem>Cuba</ListItem>
                                                <ListItem>England</ListItem>
                                            </List>
                                        </CardBody>
                                    </Card>
                                </Collapse>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center p-2">
                            <div className="">
                                <Input
                                    label="Check In"
                                    onClick={toggleOpenDateStart}
                                    className=""
                                />
                            </div>
                            <div className="">
                                <Collapse open={openDateStart}>
                                    <Card className="p-4">
                                        <table className="">
                                            <thead>
                                                <tr>
                                                    <th>Su</th>
                                                    <th>Mo</th>
                                                    <th>Tu</th>
                                                    <th>We</th>
                                                    <th>Th</th>
                                                    <th>Fr</th>
                                                    <th>Sa</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>1</th>
                                                    <th>2</th>
                                                    <th>3</th>
                                                    <th>4</th>
                                                    <th>5</th>
                                                    <th>6</th>
                                                    <th>7</th>
                                                </tr>
                                                <tr>
                                                    <th>8</th>
                                                    <th>9</th>
                                                    <th>10</th>
                                                    <th>11</th>
                                                    <th>12</th>
                                                    <th>13</th>
                                                    <th>14</th>
                                                </tr>
                                                <tr>
                                                    <th>15</th>
                                                    <th>16</th>
                                                    <th>17</th>
                                                    <th>18</th>
                                                    <th>19</th>
                                                    <th>20</th>
                                                    <th>21</th>
                                                </tr>
                                                <tr>
                                                    <th>22</th>
                                                    <th>23</th>
                                                    <th>24</th>
                                                    <th>25</th>
                                                    <th>26</th>
                                                    <th>27</th>
                                                    <th>28</th>
                                                </tr>
                                                <tr>
                                                    <th>29</th>
                                                    <th>30</th>
                                                    <th>31</th>
                                                    <th>.</th>
                                                    <th>.</th>
                                                    <th>.</th>
                                                    <th>.</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Card>
                                </Collapse>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center p-2">
                            <div className="">
                                <Input label="Check Out" onClick={toggleOpenDateEnd} className="" />
                            </div>
                            <div className="">
                                <Collapse open={openDateEnd}>
                                    <Card className="p-4">
                                        <table className="">
                                            <thead>
                                                <tr>
                                                    <th>Su</th>
                                                    <th>Mo</th>
                                                    <th>Tu</th>
                                                    <th>We</th>
                                                    <th>Th</th>
                                                    <th>Fr</th>
                                                    <th>Sa</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>1</th>
                                                    <th>2</th>
                                                    <th>3</th>
                                                    <th>4</th>
                                                    <th>5</th>
                                                    <th>6</th>
                                                    <th>7</th>
                                                </tr>
                                                <tr>
                                                    <th>8</th>
                                                    <th>9</th>
                                                    <th>10</th>
                                                    <th>11</th>
                                                    <th>12</th>
                                                    <th>13</th>
                                                    <th>14</th>
                                                </tr>
                                                <tr>
                                                    <th>15</th>
                                                    <th>16</th>
                                                    <th>17</th>
                                                    <th>18</th>
                                                    <th>19</th>
                                                    <th>20</th>
                                                    <th>21</th>
                                                </tr>
                                                <tr>
                                                    <th>22</th>
                                                    <th>23</th>
                                                    <th>24</th>
                                                    <th>25</th>
                                                    <th>26</th>
                                                    <th>27</th>
                                                    <th>28</th>
                                                </tr>
                                                <tr>
                                                    <th>29</th>
                                                    <th>30</th>
                                                    <th>31</th>
                                                    <th>.</th>
                                                    <th>.</th>
                                                    <th>.</th>
                                                    <th>.</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Card>
                                </Collapse>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center p-2">
                            <div className="">
                                <Button>Search</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center p-4 pt-10">
                    <h4 className="text-3xl font-bold text-gray-800 text-center">
                        View of the 12 most popular cities in the world
                    </h4>
                </div>
                <div className="relative pb-16">
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
                                            <div className='group/item relative' key={index}>
                                                <img
                                                    className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                                                    src={imageLink}
                                                    alt="image-photo"
                                                />
                                                <div className="absolute top-0 w-[100%] h-[100%] group/edit invisible hover:bg-slate-200 group-hover/item:visible z-20 flex  backdrop-brightness-50 justify-center items-center p-4">
                                                    <Button>See more information</Button>
                                                </div>
                                            </div>
                                        ))}
                                    </TabPanel>
                                ))}
                            </TabsBody>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    )
}
