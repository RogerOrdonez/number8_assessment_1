import React from "react";
import { PropertyCard } from "../PropertyCard";
import { NoResultsFound } from "../NoResultsFound";
import { PropertiesGridProps } from "@/shared/types";

export const PropertiesGrid = ({ filteredList }: PropertiesGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {filteredList.length === 0 ? (
        <NoResultsFound />
      ) : (
        filteredList?.map((item) => (
          <PropertyCard key={item.id} property={item} />
        ))
      )}
    </div>
  );
};
