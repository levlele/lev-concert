import { cva, type VariantProps } from "class-variance-authority";
import { cn, formatDate } from "@/lib/utils";
import { PerspectiveCard } from "./PerspectiveCard";

const ticketVariants = cva("border-8", {
  variants: {
    ticketBackground: {
      default: "bg-card-foreground ",
      green: "bg-gradient-to-b from-green-400 to-green-900",
      blue: "bg-gradient-to-b from-blue-400 to-blue-900",
      orange: "bg-gradient-to-b from-orange-400 to-orange-900",
      yellow: "bg-gradient-to-b from-yellow-300 to-yellow-600",
      red: "bg-gradient-to-b from-red-400 to-red-900",
      skyblue: "bg-gradient-to-b from-skyblue-400 to-skyblue-900",
      darkblue: "bg-gradient-to-b from-midnight-400 to-midnight-900",
      lightblue: "bg-gradient-to-b from-lightblue-400 to-lightblue-900",
      amber: "bg-gradient-to-b from-amber-400 to-amber-900",
      darkred: "bg-gradient-to-b from-darkred-400 to-darkred-400",
      slate: "bg-gradient-to-b from-slate-300 to-slate-400",
      pink: "bg-gradient-to-b from-pink-300 to-pink-500",
      black: "bg-gradient-to-b from-gray-900 to-gray-950",
      lightorange: "bg-gradient-to-b from-lightorange-400 to-lightorange-900",
      teal: "bg-gradient-to-b from-teal-300 to-teal-600",
    },
    ticketText: {
      default: "text-card",
      green: "text-emerald-100",
      blue: "text-blue-100",
      orange: "text-orange-100",
      yellow: "text-yellow-900",
      red: "text-red-100",
      skyblue: "text-sky-100",
      darkblue: "text-blue-100",
      lightblue: "text-blue-900",
      amber: "text-amber-100",
      darkred: "text-red-100",
      slate: "text-slate-900",
      pink: "text-pink-900",
      black: "text-gray-100",
      lightorange: "text-orange-900",
      teal: "text-teal-900",
    },
    ticketBorder: {
      default: "border-card-foreground",
      green: "border-emerald-200",
      blue: "border-blue-200",
      orange: "border-orange-200",
      yellow: "border-yellow-500",
      red: "border-red-200",
      skyblue: "border-sky-200",
      darkblue: "border-blue-200",
      lightblue: "border-blue-200",
      amber: "border-amber-200",
      darkred: "border-red-200",
      slate: "border-slate-500",
      pink: "border-pink-400",
      black: "border-gray-200",
      lightorange: "border-orange-400",
      teal: "border-teal-700",
    },
  },
  defaultVariants: {
    ticketBackground: "default",
    ticketText: "default",
    ticketBorder: "default",
  },
});

export interface TicketProps extends VariantProps<typeof ticketVariants> {
  id: string;
  festivalName: string;
  bandName: string;
  date: string;
  place: string;
  location: string;
  price: number;
  company?: string;
  className?: string;
  style?: React.CSSProperties;
  small?: boolean;
}

export function Ticket({
  id,
  festivalName,
  bandName,
  date,
  place,
  location,
  price,
  company,
  className,
  small,
  ticketBackground,
  ticketText,
  ticketBorder,
  ...props
}: TicketProps) {
  return (
    <PerspectiveCard className={className} {...props}>
      <div
        id={id}
        className="flex basis-full flex-col [perspective:800px] md:h-56 md:flex-row"
        style={{
          viewTransitionName: `transition-${id}`,
        }}
      >
        <div
          className={cn(
            ticketVariants({ ticketBackground, ticketText, ticketBorder }),
            "mask-bottom mask-right relative flex flex-col rounded-t-xl border-b-4 p-4 md:w-3/4 md:rounded-l-xl md:border-r-4",
          )}
        >
          <h2 className="text-xl">{festivalName}</h2>
          <h3
            className={`font-chackra font-bold ${small ? "text-xl md:text-3xl" : "text-3xl md:text-5xl"}`}
          >
            {bandName}
          </h3>
          <footer className="mt-12 md:mt-auto">
            <p className="text-xs">{place}</p>
            <p className="text-[12px]">{location}</p>
          </footer>
          <div className="noise absolute inset-0 mix-blend-color-burn" />
        </div>
        <aside
          className={cn(
            ticketVariants({ ticketBackground, ticketText, ticketBorder }),
            "mask-top mask-left relative flex flex-wrap items-center rounded-b-xl border-t-4 p-4 text-right md:w-1/4 md:flex-col md:rounded-r-xl md:border-l-4",
          )}
        >
          <span className="rounded border border-current px-2 py-1 text-center text-sm uppercase md:ml-auto">
            {formatDate(date)}
          </span>
          <p className="ml-2 text-3xl font-bold md:ml-auto md:mt-2">${price}</p>
          <p className="ml-auto md:ml-0 md:mt-auto">{company}</p>
          <div className="hidden w-full md:block md:h-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 100">
              <path
                fill="currentColor"
                d="M10 10h4v100h-4zM16 10h2v100h-2zM22 10h6v100h-6zM32 10h4v100h-4zM40 10h2v100h-2zM48 10h2v100h-2zM54 10h4v100h-4zM60 10h4v100h-4zM68 10h4v100h-4zM76 10h4v100h-4zM82 10h4v100h-4zM90 10h4v100h-4zM98 10h4v100h-4zM104 10h6v100h-6zM114 10h2v100h-2zM120 10h2v100h-2zM128 10h2v100h-2zM134 10h4v100h-4zM142 10h2v100h-2zM152 10h2v100h-2zM156 10h4v100h-4zM164 10h6v100h-6zM172 10h2v100h-2zM176 10h8v100h-8zM186 10h4v100h-4zM194 10h6v100h-6zM204 10h2v100h-2zM208 10h2v100h-2zM216 10h2v100h-2zM224 10h4v100h-4zM230 10h4v100h-4zM240 10h6v100h-6zM248 10h2v100h-2zM252 10h4v100h-4z"
              />
            </svg>
          </div>
          <div className="noise absolute inset-0 mix-blend-color-burn" />
        </aside>
      </div>
    </PerspectiveCard>
  );
}
