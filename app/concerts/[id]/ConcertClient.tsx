import { Ticket } from "@/components/index";
import { TicketProps } from "@/components/Ticket";

export default function ConcertClient({ concert }: { concert: TicketProps }) {
  return (
    <Ticket
      id={concert.id}
      festivalName={concert.festivalName}
      bandName={concert.bandName}
      date={concert.date}
      place={concert.place}
      location={concert.location}
      company={concert.company}
      price={concert.price}
      small={concert.small}
      variant={concert.variant as TicketProps["variant"]}
    />
  );
}
