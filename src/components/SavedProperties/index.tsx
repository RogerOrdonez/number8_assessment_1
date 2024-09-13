import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { SavedPropertiesProps } from "@/shared/types";
import { HeartIcon } from "lucide-react";
import { useStore } from "@/store";

export const SavedProperties = ({ property }: SavedPropertiesProps) => {
  const { favorites: favorites, setFavorites } = useStore();
  const isFavorite = favorites?.find((fav) => fav.id === property.id);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="absolute top-4 right-4"
          onClick={() => {
            if (isFavorite) {
              setFavorites(favorites.filter((fav) => fav.id !== property.id));
              return;
            }
            setFavorites([...favorites, property]);
          }}
        >
          {isFavorite ? (
            <HeartIcon className="mr-2 h-4 w-4 fill-current" />
          ) : (
            <HeartIcon className="mr-2 h-4 w-4" />
          )}
          Save Property
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Saved Properties</AlertDialogTitle>
          <AlertDialogDescription>
            {favorites?.map((favorite) => (
              <div className="text-gray-500 text-sm mb-2" key={favorite.id}>
                {favorite.title}
              </div>
            ))}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
