"use client";
import { Link } from "next-view-transitions";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "@/components/ui/button";

export function Nav() {
  return (
    <div className="bg-foreground py-8">
      <div className="container flex h-11 place-items-center font-chackra">
        <Link href="/" className={buttonVariants({ variant: "secondary" })}>
          <ChevronLeftIcon className="h-4 w-4" />
          Go home
        </Link>
      </div>
    </div>
  );
}
