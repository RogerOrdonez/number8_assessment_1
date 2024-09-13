import { FilterProps } from "@/shared/types";
import { useState } from "react";

export const useFilter = ({ properties }: FilterProps) => {
  const [priceRange, setPriceRange] = useState([
    properties?.priceRange.min,
    properties?.priceRange.max,
  ]);
  const [bedrooms, setBedrooms] = useState<string | undefined>("All");
  const [bathrooms, setBathrooms] = useState<string | undefined>("All");
  const [parking, setParking] = useState<string | undefined>("All");
  const [filteredList, setFilteredList] = useState(properties?.items);

  const onHandleSearch = () => {
    const filteredItems = properties?.items.filter((item) => {
      if (bedrooms && bedrooms !== "All" && item.bedrooms !== bedrooms)
        return false;
      if (bathrooms && bathrooms !== "All" && item.bathrooms !== bathrooms)
        return false;
      if (parking && parking !== "All" && item.parking !== parking)
        return false;
      if (item.salePrice < priceRange[0] || item.salePrice > priceRange[1])
        return false;
      return true;
    });
    setFilteredList(filteredItems);
  };

  return {
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
    bedroomsList: properties?.bathrooms.map((bathrooms) => bathrooms),
    bathroomsList: properties?.bathrooms.map((bathrooms) => bathrooms),
    parkingList: properties?.parking.map((parking) => parking),
  };
};
