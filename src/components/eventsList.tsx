import { EventoEvent } from '@/lib/types';
import EventCard from './event-card';

type EventsListProps ={
  city:string
}

const EventsList = async({city}:EventsListProps) => {

  const response =  await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
    {
      next: {
        revalidate: 300,
      }
    }
  );
  const events:EventoEvent[] = await response.json();


  return (
    <section className='flex flex-wrap gap-10 justify-center px-[20px]  '>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventsList;
