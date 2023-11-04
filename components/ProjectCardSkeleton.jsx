import React from "react";
import { Skeleton } from "./ui/skeleton";

export default function ProjectCardSkeleton() {
  return (
    <div className="flex flex-col gap-2 p-2 border rounded-md">
      <Skeleton className="h-[118px] w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-4 w-1/2 ml-auto" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}
