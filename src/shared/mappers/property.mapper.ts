import { Property, ApiProperty } from "@/shared/types";

export class PropertyMapper {
  static fromApiProperty(apiProperty: ApiProperty): Property {
    return {
      id: apiProperty.Id,
      dateListed: apiProperty.DateListed,
      title: apiProperty.Title,
      description: apiProperty.Description,
      salePrice: apiProperty["Sale Price"],
      thumbnailURL: apiProperty.ThumbnailURL,
      pictureURL: apiProperty.PictureURL,
      location: apiProperty.Location,
      sqft: apiProperty.Sqft,
      bedrooms: apiProperty.Bedrooms.toString(),
      bathrooms: apiProperty.Bathrooms.toString(),
      parking: apiProperty.Parking.toString(),
      yearBuilt: apiProperty.YearBuilt,
    };
  }
}
