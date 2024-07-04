import { concerts } from "@/lib/concerts";
import { Nav } from "@/components/index";
import ConcertClient from "./ConcertClient";

export async function generateStaticParams() {
  return concerts.map((concert) => ({
    id: concert.id,
  }));
}

export default function ConcertPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const concert = concerts.find((concert) => concert.id === id);

  if (!concert) {
    return <div>Concert not found</div>;
  }

  return (
    <>
      <Nav />
      <main className="bg-neutral-900 py-8">
        <div className="container flex flex-wrap gap-8">
          <ConcertClient concert={concert} />
        </div>
      </main>
    </>
  );
}