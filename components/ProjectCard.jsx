import Link from "next/link";
import React from "react";

export default function ProjectCard({ data }) {
  return <div className="flex flex-col gap-2 p-2 border rounded-md">
    <img src="./2023.png" alt="img" className="rounded-md" />
    <div className="">
        <Link href="/" className="font-bold text-sm leading-none hover:text-sky-500 duration-300">Fullstack TimeLogs App</Link>
        <p className="text-[12px]">Lương Khoa</p>
    </div>
    <p className="text-sm font-semibold text-muted-foreground">Free</p>
  </div>;
}
