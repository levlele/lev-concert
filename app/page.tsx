"use client";
import { concerts } from "@/lib/concerts";
import { Ticket, Filter, Header } from "@/components/index";
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
      <Header />
      <Filter
        initialOrderBy={currentOrderBy}
        onOrderByChange={setCurrentOrderBy}
      />
      <main className="container mx-auto flex flex-wrap gap-8 p-8">
        {sortedConcerts.map((concert) => (
          <Ticket
            key={concert.id}
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
                | null
                | undefined
            }
          />
        ))}
      </main>
    </>
  );
}
