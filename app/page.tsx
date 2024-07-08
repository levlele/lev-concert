"use client";
import { Link } from "next-view-transitions";
import { concerts } from "@/lib/concerts";
import {
  Ticket,
  TicketProps,
  Filter,
  NoiseBackground,
} from "@/components/index";
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
      <main className="relative flex-grow bg-gradient-to-r from-neutral-900 to-neutral-950 py-8">
        <NoiseBackground />
        <div className="container flex flex-wrap gap-8">
          {sortedConcerts.map((concert) => (
            <Link href={`/concerts/${concert.id}`} key={concert.id}>
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
