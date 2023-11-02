"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const type = [
  "All",
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
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  console.log(search)
  return (
    <div className="flex gap-4 flex-wrap">
      {type.map((item) => (
        <Button
          key={item}
          asChild
          variant="outline"
          className={cn("", search === item.toLowerCase() && "border-sky-400 text-sky-400")}
        >
          <Link href={`?search=${item.toLowerCase()}`}>{item}</Link>
        </Button>
      ))}
    </div>
  );
}
