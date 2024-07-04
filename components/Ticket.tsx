import { cva, type VariantProps } from "class-variance-authority";
import { cn, formatDate } from "@/lib/utils";
import { PerspectiveCard } from "./PerspectiveCard";

const ticketVariants = cva(
  "flex bold w-[640px] h-56 border-8 rounded [perspective:800px] shadow-xl",
  {
    variants: {
      variant: {
        default: "bg-card-foreground text-card ",
        green: "bg-[#005136] text-emerald-100 border-emerald-200",
        blue: "bg-[#07163e] text-blue-100 border-blue-200",
        orange: "bg-[#d55101] text-orange-100 border-orange-200",
        yellow: "bg-[#f9f52a] text-yellow-900 border-yellow-400",
        red: "bg-[#e61f23] text-red-100 border-red-200",
        skyblue: "bg-[#036aa3] text-sky-100 border-sky-200",
        darkblue: "bg-[#01084f] text-blue-100 border-blue-200",
        lightblue: "bg-[#15b8f2] text-blue-900 border-blue-200",
        amber: "bg-[#b7965c] text-amber-100 border-amber-200",
        darkred: "bg-[#ee2f33] text-red-100 border-red-200",
        slate: "bg-slate-300 text-slate-900 border-slate-400",
        pink: "bg-pink-300 text-pink-900 border-pink-400",
        black: "bg-gray-900 text-gray-100 border-gray-200",
        lightorange: "bg-[#f0b54e] text-orange-900 border-orange-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

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
  variant,
}: TicketProps) {
  return (
    <PerspectiveCard className={className}>
      <div
        id={id}
        className={cn(ticketVariants({ variant }))}
        style={{
          viewTransitionName: `transition-${id}`,
        }}
      >
        <div className="flex w-3/4 flex-col p-4">
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
        <aside className="flex w-1/4 flex-col border-0 border-l-2 border-dashed border-current p-4 text-right">
          <span className="text-md rounded border border-current px-2 py-1 text-center uppercase">
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
