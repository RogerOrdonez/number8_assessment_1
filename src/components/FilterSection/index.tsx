import React from "react";
import { CustomSelect } from "../CustomSelect";
import { Button } from "../ui/button";
import { FilterSectionProps } from "@/shared/types";
import { CustomRangeSlider } from "../CustomRangeSlider";

export const FilterSection = ({
  properties,
  priceRange,
  setPriceRange,
  bedrooms,
  setBedrooms,
  bathrooms,
  setBathrooms,
  parking,
  setParking,
  onHandleSearch,
  bedroomsList,
  bathroomsList,
  parkingList,
}: FilterSectionProps) => {
  return (
    <div className="flex flex-col lg:flex-row w-full mb-5 justify-end lg:gap-12 lg:items-center">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-5 w-full">
        <CustomSelect
          label="Bedrooms"
          values={bedroomsList}
          setValue={setBedrooms}
          value={bedrooms}
        />
        <CustomSelect
          label="Bathrooms"
          values={bathroomsList}
          setValue={setBathrooms}
          value={bathrooms}
        />
        <CustomSelect
          label="Parking"
          values={parkingList}
          setValue={setParking}
          value={parking}
        />
        <CustomRangeSlider
          values={priceRange}
          setValues={setPriceRange}
          priceRange={properties?.priceRange}
        />
      </div>
      <Button className="w-1/2 lg:w-28 self-start" onClick={onHandleSearch}>
        Search
      </Button>
    </div>
  );
};
