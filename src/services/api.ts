import axios from "axios";
import { PropertiesResponse, ApiProperty } from "../shared/types";
import { PropertyMapper } from "@/shared/mappers/property.mapper";

export const apiClient = axios.create({
  baseURL: "https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const fetchProperties = async (): Promise<PropertiesResponse> => {
  try {
    const response = await apiClient.get<ApiProperty[]>("listings.json");
    const properties = response.data.map((property) =>
      PropertyMapper.fromApiProperty(property)
    );
    const propertiesResponse: PropertiesResponse = {
      data: properties,
      error: null,
    };
    return propertiesResponse;
  } catch (error) {
    if (error instanceof Error) {
      return {
        data: null,
        error: {
          message: error.message,
          status: axios.isAxiosError(error) ? error.response?.status : null,
        },
      };
    } else {
      return {
        data: null,
        error: {
          message: "An unknown error occurred",
          status: null,
        },
      };
    }
  }
};
