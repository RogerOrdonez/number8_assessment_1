import { fetchRealEstateItems } from "@/services/api";
import { PropertiesData } from "../types";

export const getRealEstateItems = async (): Promise<PropertiesData> => {
  const realEstateItemsResponse = await fetchRealEstateItems();
  return {
    items: realEstateItemsResponse.data ?? [],
    bedrooms: [
      "All",
      ...Array.from(
        new Set(
          realEstateItemsResponse.data?.map((item) => item.bedrooms) ?? []
        )
      ).sort((a, b) => parseInt(a) - parseInt(b)),
    ],
    bathrooms: [
      "All",
      ...Array.from(
        new Set(
          realEstateItemsResponse.data?.map((item) => item.bathrooms) ?? []
        )
      ).sort((a, b) => parseInt(a) - parseInt(b)),
    ],
    parking: [
      "All",
      ...Array.from(
        new Set(realEstateItemsResponse.data?.map((item) => item.parking) ?? [])
      ).sort((a, b) => parseInt(a) - parseInt(b)),
    ],
    priceRange: {
      min: Math.min(
        ...(realEstateItemsResponse.data?.map((item) => item.salePrice) ?? [])
      ),
      max: Math.max(
        ...(realEstateItemsResponse.data?.map((item) => item.salePrice) ?? [])
      ),
    },
  };
};
