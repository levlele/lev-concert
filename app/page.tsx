"use client";
import { concerts } from "@/lib/concerts";
import { Ticket, Filter, Header } from "@/components/index";
import { useState } from "react";

export default function Home() {
  const [currentOrderBy, setCurrentOrderBy] = useState("date");

  const sortedConcerts =
    currentOrderBy === "name"
      ? concerts.slice().sort((a, b) => a.bandName.localeCompare(b.bandName))
      : currentOrderBy === "date"
        ? concerts
            .slice()
            .sort(
              (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
            )
        : currentOrderBy === "price"
          ? concerts.slice().sort((a, b) => a.price - b.price)
          : concerts;

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
