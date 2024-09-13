"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DrawerClose,
  DrawerContent,
  DrawerFooter,
} from "@/components/ui/drawer";
import { PropertyListingDrawerProps } from "@/shared/types";
import { format } from "date-fns";
import { ContactForm } from "../ContactForm";
import { SavedProperties } from "../SavedProperties";
import { SquareBadge } from "../SquareBadge";

export const DetailDrawerContent = ({
  property,
}: PropertyListingDrawerProps) => {
  return (
    <DrawerContent className="h-[100vh] w-full sm:w-3xl mx-auto">
      <div className="p-4 overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-bold">{property.title}</h1>
                <p className="text-gray-500">{property.location}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">
                  {`$${property.salePrice.toLocaleString()}`}
                </div>
                <p className="text-sm text-gray-500">
                  Date Listed:
                  {` ${format(new Date(property.dateListed), "MMM dd, yyyy")}`}
                </p>
              </div>
            </div>
            <div className="relative mb-4 h-[calc(50vh-8rem)] max-h-[400px] min-h-[500px]">
              <Image
                src={property.pictureURL}
                alt="Property Image"
                fill
                className="rounded-lg object-cover"
              />
              <SavedProperties property={property} />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 text-center">
              <SquareBadge value={property.bedrooms} label="BED" />
              <SquareBadge value={property.bathrooms} label="BATH" />
              <SquareBadge value={property.parking} label="PARKING" />
              <SquareBadge value={property.sqft.toString()} label="SQFT" />
              <SquareBadge
                value={property.yearBuilt.toString()}
                label="YEAR BUILT"
              />
            </div>
            <p className="mt-4 text-gray-700">{property.description}</p>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Contact Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <DrawerFooter>
        <DrawerClose asChild>
          <Button
            variant="default"
            className="w-full bg-blue-500 hover:bg-blue-700"
          >
            Go Back
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  );
};
