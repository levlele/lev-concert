import { concerts } from "@/lib/concerts";
import { Nav } from "@/components/index";
import ConcertClient from "./ConcertClient";

type VariantType =
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
  | "default"
  | null
  | undefined;

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

  const validVariant: VariantType = concert.variant as VariantType;

  return (
    <>
      <Nav />
      <main className="relative flex-grow bg-foreground/75 py-8">
        <div className="container flex flex-wrap gap-8">
          <ConcertClient
            concert={{
              ...concert,
              ticketBackground: validVariant,
              ticketText: validVariant,
              ticketBorder: validVariant,
            }}
          />
        </div>
      </main>
    </>
  );
}
