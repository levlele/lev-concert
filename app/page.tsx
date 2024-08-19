"use client";
import { Link } from "next-view-transitions";
import { concerts } from "@/lib/concerts";
import { Ticket, TicketProps, Filter } from "@/components/index";
import { useRef, useState } from "react";
import { delay, motion,useInView } from "framer-motion";

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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
      },
    },
  };


  return (
    <>
      <Filter
        initialOrderBy={currentOrderBy}
        onOrderByChange={setCurrentOrderBy}
      />
      <main className="flex-grow overflow-hidden bg-foreground py-8">
        <motion.div
          className="z-10 mb-8 grid grid-cols-1 place-items-center px-8 md:container md:mb-0 md:grid-cols-2 md:place-items-stretch md:gap-x-8 md:gap-y-4"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {sortedConcerts.map((concert) => (
            <motion.div key={concert.id} variants={itemVariants}>
              <Link
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
            </motion.div>
          ))}
        </motion.div>
      </main>
    </>
  );
}
