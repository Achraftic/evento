/* eslint-disable no-console */
import { getEvents } from '@/app/util/services';
import CardEvent from '@/components/cardEvent';
import Pagination from '@/components/pagination';
import { title } from '@/components/primitives';
import { LinkIcon } from '@nextui-org/link';
import { EventoEvent } from '@prisma/client';
import Link from 'next/link';
import React from 'react';

type EventListProps = {
  city: string;
  page: number;
};

async function EventList({ city, page }: EventListProps) {
  let data: EventoEvent[] = [];
  let countEvent = 0;

  try {
    const result = await getEvents(city, page);
 
    data = result.data;
    countEvent = result.countEvent;
  } catch (error: any) {
    console.error('Error fetching data:', error);
    const errorMsg = error.message;

    return (
      <div className='w-max m-auto flex flex-col items-center justify-center gap-4 mt-7'>
        <p className={`${title({ size: 'sm' })}`}>
          {errorMsg === 'Not found' ? `Events ${errorMsg}` : 'Something went wrong'}
        </p>
        <Link
          className='flex w-max space-x-3 items-center outline-white/50 hover:outline-white transition outline p-2 rounded-lg text-sm'
          href='/'
        >
          <LinkIcon /> Back to home
        </Link>
      </div>
    );
  }
    const prevPath= page>1? `/events/${city}?page=${page-1}`:""
    const nextPath= countEvent>page*8 ? `/events/${city}?page=${page+1}`:""

  return (

    <div>
      

    <div className="p-4 md:gap-5 gap-7 w-full min-h-72 mt-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4">
      {data.map((event) => (
        <CardEvent key={event.id} data={event} />
      ))}
    </div>
    <Pagination  prevPath={prevPath} nextPath={nextPath} />

    </div>
  );
}

export default EventList;
