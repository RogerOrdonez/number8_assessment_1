"use client";
import { PropertyCardProps } from "@/shared/types";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { DetailDrawerContent } from "@/components/DetailDrawerContent";

export const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Card className="flex flex-col h-[500px]">
      <CardHeader className="p-0">
        <div className="relative w-full h-60">
          <Image
            src={property.thumbnailURL}
            alt={property.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow p-4 h-60">
        <div className="mb-auto">
          <h2 className="text-lg font-semibold line-clamp-2 h-[56px]">
            {property.title}
          </h2>
          <p className="text-sm text-gray-500">{property.location}</p>
          <p className="text-sm text-gray-500">
            {property.bedrooms} beds | {property.bathrooms} baths
          </p>
        </div>
        <p className="text-xl font-bold">
          ${property.salePrice.toLocaleString()}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="w-4/5">View Details</Button>
          </DrawerTrigger>
          <DetailDrawerContent property={property} />
        </Drawer>
      </CardFooter>
    </Card>
  );
};
