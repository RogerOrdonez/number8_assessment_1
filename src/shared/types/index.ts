export type ApiProperty = {
  Id: number;
  DateListed: Date;
  Title: string;
  Description: string;
  "Sale Price": number;
  ThumbnailURL: string;
  PictureURL: string;
  Location: string;
  Sqft: number;
  Bedrooms: number;
  Bathrooms: number;
  Parking: number;
  YearBuilt: number;
};

export type Property = {
  id: number;
  dateListed: Date;
  title: string;
  description: string;
  salePrice: number;
  thumbnailURL: string;
  pictureURL: string;
  location: string;
  sqft: number;
  bedrooms: string;
  bathrooms: string;
  parking: string;
  yearBuilt: number;
};

export type PropertiesResponse = {
  data: Property[] | null;
  error: {
    message: string;
    status: number | null | undefined;
  } | null;
};

export type PropertiesData = {
  items: Property[];
  bedrooms: string[];
  bathrooms: string[];
  parking: string[];
  priceRange: {
    min: number;
    max: number;
  };
};

export type FilterSectionProps = {
  properties: PropertiesData;
  priceRange: number[];
  setPriceRange: (values: number[]) => void;
  bedrooms: string | undefined;
  setBedrooms: (value: string | undefined) => void;
  bathrooms: string | undefined;
  setBathrooms: (value: string | undefined) => void;
  parking: string | undefined;
  setParking: (value: string | undefined) => void;
  onHandleSearch: () => void;
  bedroomsList: string[];
  bathroomsList: string[];
  parkingList: string[];
};

export type ListingPageProps = {
  properties: PropertiesData;
};

export type CustomRangeSliderProps = {
  values: number[];
  setValues: (value: number[]) => void;
  priceRange: {
    min: number;
    max: number;
  };
};

export type CustomSelectProps = {
  label: string;
  values: string[];
  setValue: (value: string) => void;
  value?: string;
};

export type PropertyListingDrawerProps = {
  property: Property;
};

export type PropertiesGridProps = {
  filteredList: Property[];
};

export type PropertyCardProps = {
  property: Property;
};

export type FilterProps = {
  properties: PropertiesData;
};

export type SavedPropertiesProps = {
  property: Property;
};

export type SquareBadgeProps = {
  value: string;
  label: string;
};

export type Store = {
  favorites: Property[];
  setFavorites: (value: Property[]) => void;
};
