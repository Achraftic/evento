

import { LinkIcon } from '@nextui-org/link';
import axios from 'axios';
import Link from 'next/link';
import { subtitle, title } from '@/components/primitives';
import React from 'react';
import Image from 'next/image';
import { CiLocationOn, CiCalendarDate } from "react-icons/ci";
import { HiOutlineTicket } from "react-icons/hi2";
import { Button } from '@nextui-org/button';
import { getEvent } from '@/app/util/services';
import { EventoEvent } from '@prisma/client';

type OneEventPageProps = {
    params: {
        slug: string;
    };
}

const OneEventPage = async ({ params }: OneEventPageProps) => {

    const { slug } = params;
    let data: EventoEvent;

    try {
        data = await getEvent(slug)

    } catch (error: any) {
        throw new Error(error)
    }
    return (
        <div>
            <div className=' min-h-72 relative overflow-hidden rounded-md     '>
                <Image className='w-full  blur-3xl   h-full object-cover absolute inset-0 z-0'
                    src={data.imageUrl}
                    alt={data.name}
                    height={300}
                    width={300}
                    quality={50}
                    priority


                />
                <div className=' relative h-full w-full gap-5  max-w-3xl m-auto flex sm:flex-row flex-col justify-center items-center sm:p-17 p-10'>


                    <Image className=' w-full rounded-md  relative'
                        src={data.imageUrl}
                        alt={data.name}
                        height={300}
                        width={201}


                    />


                    <div className=' relative inset-0 w-full  dark:text-content1-foreground text-content1  h-full  flex flex-col gap-2 md:p-4  '>
                        <h1 className={` text-3xl font-bold `}> {data.name}</h1>
                        <h2 className={`${subtitle}`}>  Organizer par: {data.organizerName} </h2>
                        <h2 className={`${subtitle} flex items-center gap-1`}> <CiLocationOn size={23} /> {data.location} , {data.city} </h2>
                        <p className='text-sm flex items-center gap-1'> <CiCalendarDate size={23} />
                            {new Date(data.date).toLocaleDateString('en-US', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            })} </p>
                        <Button color="secondary" className='w-max' fullWidth={false} variant="shadow" endContent={<HiOutlineTicket size={20} />}>Get Tickets</Button>
                    </div>
                </div>
            </div>

            <div className='max-w-3xl m-auto my-5 p-5'>
                <h1 className={`${title({ size: "sm" })}`}>Description</h1>
                <p className='my-5 text-opacity-80 text-content1-foreground'>{data.description} </p>
            </div>
        </div>
    );
}

export default OneEventPage;
