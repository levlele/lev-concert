"use client";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface FilterProps {
  initialOrderBy: string;
  onOrderByChange: (value: string) => void;
}

export function Filter({ initialOrderBy, onOrderByChange }: FilterProps) {
  const [orderBy, setOrderBy] = useState(initialOrderBy);

  const handleOrderBy = (value: string) => {
    setOrderBy(value);
    onOrderByChange(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="text-acid-400 sticky top-0 z-50 bg-secondary-foreground py-8"
      style={{
        viewTransitionName: "transition-subheader",
      }}
    >
      <div className="container flex place-items-center font-chackra">
        <h3 className="w-28">Ordenar por</h3>
        <ToggleGroup
          type="single"
          size="lg"
          value={orderBy}
          aria-label="Order by"
          onValueChange={handleOrderBy}
        >
          <ToggleGroupItem
            variant="outline"
            value="date"
            aria-label="Toggle Date"
          >
            Fecha
          </ToggleGroupItem>
          <ToggleGroupItem
            variant="outline"
            value="name"
            aria-label="Toggle Name"
          >
            Nombre
          </ToggleGroupItem>
          <ToggleGroupItem
            variant="outline"
            value="price"
            aria-label="Toggle Price"
          >
            Precio
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}
