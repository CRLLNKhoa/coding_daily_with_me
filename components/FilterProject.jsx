"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const type = [
  "Next.js",
  "React.js",
  "MySQL",
  "MongDB",
  "Prisma",
  "Tailwind",
  "Node.js",
  "Supebase",
];

export default function FilterProject() {
  const searchParams = useSearchParams();
  const search = searchParams.get("project");

  return (
    <div className="flex gap-4 flex-wrap">
       <Button
          asChild
          variant="outline"
          className={cn(
            "",
            search === null && "border-sky-400 text-sky-400"
          )}
        >
          <Link href="/">All</Link>
        </Button>
      {type.map((item) => (
        <Button
          key={item}
          asChild
          variant="outline"
          className={cn(
            "",
            search === item.toLowerCase() && "border-sky-400 text-sky-400"
          )}
        >
          <Link href={`?project=${item.toLowerCase()}`}>{item}</Link>
        </Button>
      ))}
    </div>
  );
}
