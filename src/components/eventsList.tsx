import { EventoEvent } from "@prisma/client";
import EventCard from "./event-card";
import { getEvents } from "@/lib/utils";
import PaginationControls from "./PaginationControls";

type EventsListProps = {
  city: string;
  page: number;
};

const EventsList = async ({ city, page }: EventsListProps) => {
  const events = await getEvents(city, page);

  const PreviousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const NextPath = `/events/${city}?page=${page + 1}`;

  return (
    <section className="flex flex-wrap gap-10 justify-center px-[20px]  ">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      <PaginationControls PreviousPath={PreviousPath} NextPath={NextPath} />
    </section>
  );
};

export default EventsList;
