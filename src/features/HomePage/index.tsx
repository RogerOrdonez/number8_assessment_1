"use client";
import { FilterSection } from "@/components/FilterSection";
import { PropertiesGrid } from "@/components/PropertiesGrid";
import { useFilter } from "@/hooks/use-filter";
import { ListingPageProps } from "@/shared/types";

export const HomePage = ({ properties }: ListingPageProps) => {
  const {
    priceRange,
    setPriceRange,
    bedrooms,
    setBedrooms,
    bathrooms,
    setBathrooms,
    parking,
    setParking,
    filteredList,
    onHandleSearch,
    bedroomsList,
    bathroomsList,
    parkingList,
  } = useFilter({ properties });
  return (
    <div className="container px-5 xl:w-4/5 lg:mx-auto py-8">
      <FilterSection
        properties={properties}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        bedrooms={bedrooms}
        setBedrooms={setBedrooms}
        bathrooms={bathrooms}
        setBathrooms={setBathrooms}
        parking={parking}
        setParking={setParking}
        onHandleSearch={onHandleSearch}
        bedroomsList={bedroomsList}
        bathroomsList={bathroomsList}
        parkingList={parkingList}
      />
      <PropertiesGrid filteredList={filteredList} />
    </div>
  );
};
