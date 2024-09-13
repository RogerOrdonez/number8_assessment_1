import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { CustomSelectProps } from "@/shared/types";

export const CustomSelect = ({
  label,
  values,
  setValue,
  value,
}: CustomSelectProps) => {
  return (
    <div className="flex space-x-4 items-center mr-5 w-full lg:w-full justify-center">
      <p className="w-1/5 lg:w-[70px]">{label}:</p>
      <Select onValueChange={setValue} value={value}>
        <SelectTrigger className="w-3/5 lg:w-[200px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {values.map((value) => (
            <SelectItem key={value} value={value}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
