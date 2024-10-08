"use client";
import { Link } from "next-view-transitions";
import { concerts } from "@/lib/concerts";
import { Ticket, TicketProps, Filter } from "@/components/index";
import { useState } from "react";

export default function Home() {
  const [currentOrderBy, setCurrentOrderBy] = useState("date");

  const byName = (a: { bandName: string }, b: { bandName: string }) =>
    a.bandName.localeCompare(b.bandName);
  const byDate = (a: { date: string }, b: { date: string }) =>
    new Date(a.date).getTime() - new Date(b.date).getTime();
  const byPrice = (a: { price: number }, b: { price: number }) =>
    a.price - b.price;

  const orderBy: { [key: string]: (a: any, b: any) => number } = {
    name: byName,
    date: byDate,
    price: byPrice,
  };

  const sortedConcerts = concerts.slice().sort(orderBy[currentOrderBy]);

  return (
    <>
      <Filter
        initialOrderBy={currentOrderBy}
        onOrderByChange={setCurrentOrderBy}
      />
      <main className="flex-grow overflow-hidden bg-foreground py-8">
        <div className="z-10 mb-8 grid grid-cols-1 place-items-center px-8 md:container md:mb-0 md:grid-cols-2 md:place-items-stretch md:gap-x-8 md:gap-y-4">
          {sortedConcerts.map((concert) => (
            <Link
              key={concert.id}
              href={`/concerts/${concert.id}`}
              className="twist z-20 -mb-8 w-full shadow-2xl transition-[z-index] hover:z-30 md:mb-0 md:w-auto"
            >
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
                className="cursor-pointer"
                style={{ viewTransitionName: concert.id }}
                ticketBackground={
                  concert.variant as TicketProps["ticketBackground"]
                }
                ticketText={concert.variant as TicketProps["ticketText"]}
                ticketBorder={concert.variant as TicketProps["ticketBorder"]}
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
