import { fetchProperties } from "@/services/api";
import { PropertiesData } from "../types";

export const getProperties = async (): Promise<PropertiesData> => {
  const propertiesResponse = await fetchProperties();
  return {
    items: propertiesResponse.data ?? [],
    bedrooms: [
      "All",
      ...Array.from(
        new Set(propertiesResponse.data?.map((item) => item.bedrooms) ?? [])
      ).sort((a, b) => parseInt(a) - parseInt(b)),
    ],
    bathrooms: [
      "All",
      ...Array.from(
        new Set(propertiesResponse.data?.map((item) => item.bathrooms) ?? [])
      ).sort((a, b) => parseInt(a) - parseInt(b)),
    ],
    parking: [
      "All",
      ...Array.from(
        new Set(propertiesResponse.data?.map((item) => item.parking) ?? [])
      ).sort((a, b) => parseInt(a) - parseInt(b)),
    ],
    priceRange: {
      min: Math.min(
        ...(propertiesResponse.data?.map((item) => item.salePrice) ?? [])
      ),
      max: Math.max(
        ...(propertiesResponse.data?.map((item) => item.salePrice) ?? [])
      ),
    },
  };
};
