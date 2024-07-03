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
    <div className="container flex place-items-center bg-background py-8 font-chackra">
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
          <span className="text-white">Date</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          variant="outline"
          value="name"
          aria-label="Toggle Name"
        >
          <span className="text-white">Name</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          variant="outline"
          value="price"
          aria-label="Toggle Price"
        >
          <span className="text-white">Price</span>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
