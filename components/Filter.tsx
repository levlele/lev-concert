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
  };

  return (
    <div className="sticky top-0 z-50 bg-foreground py-8 text-background">
      <div className="container flex place-items-center font-chackra">
        <h3 className="w-20">Order by</h3>
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
            Date
          </ToggleGroupItem>
          <ToggleGroupItem
            variant="outline"
            value="name"
            aria-label="Toggle Name"
          >
            Name
          </ToggleGroupItem>
          <ToggleGroupItem
            variant="outline"
            value="price"
            aria-label="Toggle Price"
          >
            Price
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}
