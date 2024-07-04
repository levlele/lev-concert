import { Ticket } from "@/components/index";
import { ConcertType } from "@/types/index";

export default function ConcertClient({ concert }: { concert: ConcertType }) {
  return (
    <div style={{ viewTransitionName: concert.id }}>
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
        variant={
          concert.variant as
            | "default"
            | "green"
            | "blue"
            | "orange"
            | "yellow"
            | "red"
            | "skyblue"
            | "darkblue"
            | "lightblue"
            | "amber"
            | "darkred"
            | "slate"
            | "pink"
            | "black"
            | "lightorange"
        }
      />
    </div>
  );
}
