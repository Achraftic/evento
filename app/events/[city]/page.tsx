
import { Suspense } from 'react';

import EventList from './eventList';
import Loading from './loading';
import { title } from '@/components/primitives';
import { console } from 'inspector';
import { Button } from '@nextui-org/button';
import { IoIosArrowRoundBack,IoIosArrowRoundForward } from "react-icons/io";
import Pagination from '@/components/pagination';

type Props = {
    params: {
        city: string;
    };

};
type EventsPageProps =Props & {

    searchParams:{[key:string]:string|string[]|undefined}
};


export function generateMetadata({ params }: Props) {
    const city = params.city;

    return {
        title: `Events in ${city}`,
        description: `Find the latest events happening in ${city}. Stay updated with the best events, festivals, and more.`,
    };
}



const EventsPage = ({ params,searchParams }: EventsPageProps) => {   
    const city = params.city
    const page=searchParams.page ?? 1
    return (
        <div>
            <h1 className={`${title({ size: 'md' })} capitalize`}>{city} Events</h1>
            <Suspense  key={city+page} fallback={<Loading />}>
                <EventList city={city} page={+page} />    
            </Suspense>
        </div>
    );
};

export default EventsPage;
