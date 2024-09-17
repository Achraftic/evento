import { Suspense } from 'react';
import EventList from './eventList';
import Loading from './loading';
import { title } from '@/components/primitives';
import { z } from 'zod';

type Props = {
    params: {
        city: string;
    };

};
type EventsPageProps = Props & {

    searchParams: { [key: string]: string | string[] | undefined }
};

export function generateMetadata({ params }: Props) {
    const city = params.city;

    return {
        title: `Events in ${city}`,
        description: `Find the latest events happening in ${city}. Stay updated with the best events, festivals, and more.`,
    };
}
const pageNumberShema = z.coerce.number().int().positive().optional()

const EventsPage = ({ params, searchParams }: EventsPageProps) => {
    const city = params.city
    const paresedPage = pageNumberShema.safeParse(searchParams.page)

    if (!paresedPage.success) {
        throw new Error("invalid Page Number")
    }
    const page = paresedPage.data
    
    return (
        <div>
            <h1 className={`${title({ size: 'md' })} capitalize`}>{city} Events</h1>
            <Suspense key={city + page} fallback={<Loading />}>
                <EventList city={city} page={page || 1} />
            </Suspense>
        </div>
    );
};

export default EventsPage;
