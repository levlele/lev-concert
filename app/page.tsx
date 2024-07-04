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
      <main className="bg-neutral-900 py-8">
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
                variant={concert.variant as TicketProps["variant"]}
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
