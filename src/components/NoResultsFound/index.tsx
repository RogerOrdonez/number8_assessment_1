import React from "react";

export const NoResultsFound = () => {
  return (
    <div className="text-center w-full col-span-4 mt-10">
      <h2 className="text-2xl font-semibold">No results found</h2>
      <p className="text-gray-500 mt-2">Try adjusting your search criteria.</p>
    </div>
  );
};
