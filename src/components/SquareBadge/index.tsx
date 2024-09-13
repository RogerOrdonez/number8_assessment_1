import { SquareBadgeProps } from "@/shared/types";
import React from "react";

export const SquareBadge = ({ value, label }: SquareBadgeProps) => {
  return (
    <div className="border p-2 rounded">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
};
