import { Property, ApiProperty } from "@/shared/types";

export class PropertyMapper {
  static fromApiProperty(remoteRealEstateItem: ApiProperty): Property {
    return {
      id: remoteRealEstateItem.Id,
      dateListed: remoteRealEstateItem.DateListed,
      title: remoteRealEstateItem.Title,
      description: remoteRealEstateItem.Description,
      salePrice: remoteRealEstateItem["Sale Price"],
      thumbnailURL: remoteRealEstateItem.ThumbnailURL,
      pictureURL: remoteRealEstateItem.PictureURL,
      location: remoteRealEstateItem.Location,
      sqft: remoteRealEstateItem.Sqft,
      bedrooms: remoteRealEstateItem.Bedrooms.toString(),
      bathrooms: remoteRealEstateItem.Bathrooms.toString(),
      parking: remoteRealEstateItem.Parking.toString(),
      yearBuilt: remoteRealEstateItem.YearBuilt,
    };
  }
}
