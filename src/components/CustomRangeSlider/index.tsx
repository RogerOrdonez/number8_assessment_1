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
    <div className="mt-8 lg:mt-0 flex space-x-4 items-center lg:mr-5 w-full lg:w-full justify-center">
      <p className="w-[90px] lg:w-[100px]">Price Range:</p>
      <DualRangeSlider
        label={label}
        defaultValue={[priceRange.min, priceRange.max]}
        value={values}
        min={priceRange.min}
        max={priceRange.max}
        step={1000}
        onValueChange={(value) => setValues(value)}
        className="w-[210px] lg:w-[200px]"
      />
    </div>
  );
};
