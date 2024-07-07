import { cva, type VariantProps } from "class-variance-authority";
import { cn, formatDate } from "@/lib/utils";
import { PerspectiveCard } from "./PerspectiveCard";

const ticketVariants = cva("border-8", {
  variants: {
    ticketBackground: {
      default: "bg-card-foreground ",
      green: "bg-[#005136]",
      blue: "bg-[#07163e]",
      orange: "bg-[#d55101]",
      yellow: "bg-[#f9f52a]",
      red: "bg-[#e61f23]",
      skyblue: "bg-[#036aa3]",
      darkblue: "bg-[#01084f]",
      lightblue: "bg-[#15b8f2]",
      amber: "bg-[#b7965c]",
      darkred: "bg-[#ee2f33]",
      slate: "bg-slate-300",
      pink: "bg-pink-300",
      black: "bg-gray-900",
      lightorange: "bg-[#f0b54e]",
      teal: "bg-[#8bdbdd]",
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
      yellow: "border-yellow-400",
      red: "border-red-200",
      skyblue: "border-sky-200",
      darkblue: "border-blue-200",
      lightblue: "border-blue-200",
      amber: "border-amber-200",
      darkred: "border-red-200",
      slate: "border-slate-400",
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
        className="bold flex h-56 w-[640px] [perspective:800px]"
        style={{
          viewTransitionName: `transition-${id}`,
        }}
      >
        <div
          className={cn(
            ticketVariants({ ticketBackground, ticketText, ticketBorder }),
            "flex w-3/4 flex-col rounded-l-xl border-r-0 p-4",
          )}
        >
          <h2 className="text-xl">{festivalName}</h2>
          <h3
            className={`font-chackra font-bold ${small ? "text-3xl" : "text-5xl"}`}
          >
            {bandName}
          </h3>
          <footer className="mt-auto">
            <p className="text-xs">{place}</p>
            <p className="text-[12px]">{location}</p>
          </footer>
        </div>
        <div
          className={cn(
            ticketVariants({ ticketBackground }),
            "relative mb-2 mt-2 w-0.5 border border-dashed border-neutral-900",
          )}
        >
          <div className="absolute -left-[8px] -top-4 size-4 rounded-full bg-neutral-900" />
          <div className="absolute -bottom-4 -left-[8px] size-4 rounded-full bg-neutral-900" />
        </div>
        <aside
          className={cn(
            ticketVariants({ ticketBackground, ticketText, ticketBorder }),
            "flex w-1/4 flex-col rounded-r-xl border-l-0 p-4 text-right",
          )}
        >
          <span className="rounded border border-current px-2 py-1 text-center text-sm uppercase">
            {formatDate(date)}
          </span>
          <p className="mt-2 text-3xl font-bold">${price}</p>
          <p className="mt-auto">{company}</p>
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 100">
              <path
                fill="currentColor"
                d="M10 10h4v100h-4zM16 10h2v100h-2zM22 10h6v100h-6zM32 10h4v100h-4zM40 10h2v100h-2zM48 10h2v100h-2zM54 10h4v100h-4zM60 10h4v100h-4zM68 10h4v100h-4zM76 10h4v100h-4zM82 10h4v100h-4zM90 10h4v100h-4zM98 10h4v100h-4zM104 10h6v100h-6zM114 10h2v100h-2zM120 10h2v100h-2zM128 10h2v100h-2zM134 10h4v100h-4zM142 10h2v100h-2zM152 10h2v100h-2zM156 10h4v100h-4zM164 10h6v100h-6zM172 10h2v100h-2zM176 10h8v100h-8zM186 10h4v100h-4zM194 10h6v100h-6zM204 10h2v100h-2zM208 10h2v100h-2zM216 10h2v100h-2zM224 10h4v100h-4zM230 10h4v100h-4zM240 10h6v100h-6zM248 10h2v100h-2zM252 10h4v100h-4z"
              />
            </svg>
          </div>
        </aside>
      </div>
    </PerspectiveCard>
  );
}
