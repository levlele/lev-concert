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
        <div className="flex-no-wrap container flex items-start gap-8">
          <div className="flex flex-col gap-8">
            <div className="w-auto max-w-prose text-primary-foreground">
              <p className="max-w-prose text-primary-foreground">
                {concert.description}
              </p>
            </div>
            <div className="text-primary-foreground">
              <h2 className="font-chackra text-4xl font-bold uppercase">
                Setlist
              </h2>
              {concert.songs ? (
                <ol className="mt-4 list-decimal pl-5">
                  {concert.songs.map((song, index) => (
                    <li key={index}> {song}</li>
                  ))}
                </ol>
              ) : (
                <p>I could not find any setlist.</p>
              )}
            </div>
          </div>
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
