import React from "react";
import { Skeleton } from "./ui/skeleton";

export default function ProjectCardSkeleton() {
  return (
    <div className="flex flex-col gap-2 p-2 border rounded-md">
      <Skeleton className="h-[118px] w-full" />
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-4 w-[100px]" />
      <Skeleton className="h-4 w-[100px] ml-auto" />
      <Skeleton className="h-4 w-[100px]" />
    </div>
  );
}
