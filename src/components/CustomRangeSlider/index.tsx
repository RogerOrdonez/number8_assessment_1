import React from "react";
import { DualRangeSlider } from "../ui/dual-range-slider";
import { CustomRangeSliderProps } from "@/shared/types";

const label = (value: number | undefined) => {
  if (value === undefined) return null;
  return (
    <span className="text-sm font-semibold text-gray-500">
      ${value.toLocaleString()}
    </span>
  );
};

export const CustomRangeSlider = ({
  values,
  setValues,
  priceRange,
}: CustomRangeSliderProps) => {
  return (
    <div className="flex space-x-4 items-center w-1/2 lg:w-full">
      <p className="sm:w-1/5 lg:w-[140px]">Price Range:</p>
      <DualRangeSlider
        label={label}
        defaultValue={[priceRange.min, priceRange.max]}
        value={values}
        min={priceRange.min}
        max={priceRange.max}
        step={1000}
        onValueChange={(value) => setValues(value)}
      />
    </div>
  );
};
