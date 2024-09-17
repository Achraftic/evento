/* eslint-disable no-console */
import { getEvents } from '@/app/util/services';
import CardEvent from '@/components/cardEvent';
import Pagination from '@/components/pagination';
import { title } from '@/components/primitives';
import { LinkIcon } from '@nextui-org/link';
import { EventoEvent } from '@prisma/client';
import Link from 'next/link';


type EventListProps = {
  city: string;
  page: number;
};

async function EventList({ city, page = 1 }: EventListProps) {
  let data: EventoEvent[] = [];
  let countEvent = 0;

  try {
    const result = await getEvents(city, page);

    data = result.data;
    countEvent = result.countEvent;
  } catch (error: any) {
    throw new Error(error);
  }
  const prevPath = page > 1 ? `/events/${city}?page=${page - 1}` : ""
  const nextPath = countEvent > page * 8 ? `/events/${city}?page=${page + 1}` : ""

  return (

    <div>


      <div className="p-4 md:gap-5 gap-7 w-full min-h-72 mt-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4">
        {data.map((event) => (
          <CardEvent key={event.id} data={event} />
        ))}
      </div>
      <Pagination prevPath={prevPath} nextPath={nextPath} />

    </div>
  );
}

export default EventList;
