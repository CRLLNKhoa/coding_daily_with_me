"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useStoreProject } from "@/store";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

export default function Project() {
  const param = useParams();
  const project = useStoreProject(state => state.projects);
  const data = project.filter(project => project.slug === param.slug)
  return (
    <div className="grid grid-cols-5 p-4 h-full gap-4 items-start">
      <div className="col-span-3">
        <div className="border rounded-md p-4 flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <div className="border bg-red-300 p-1 rounded-full border-red-300">
              <AiFillYoutube className="text-red-600" />
            </div>
            <p className="text-sm">Youtube</p>
          </div>
          <h1 className="font-bold">{data[0]?.name}</h1>
          <p className="text-sm">
            {data[0]?.description}
          </p>
          <div className="flex gap-2">
            <Badge variant="outline">Tailwind</Badge>
            <Badge variant="outline">React.js</Badge>
            <Badge variant="outline">Next.js</Badge>
            <Badge variant="outline">Prisma</Badge>
            <Badge variant="outline">MySQL</Badge>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 py-5">
          <Link target="_blank" href={data[0]?.linkGithub || "/"} className="border rounded-md flex flex-col items-center justify-center h-[120px] cursor-pointer">
            <AiFillGithub className="w-8 h-8" />
            <p className="text-sm">Github</p>
          </Link>
          <div className="border rounded-md flex flex-col items-center justify-center h-[120px] cursor-pointer">
            <BsDiscord className="w-8 h-8 text-indigo-500" />
            <p className="text-sm">Discord</p>
          </div>
          <div className="border rounded-md flex flex-col items-center justify-center h-[120px] cursor-pointer">
            <AiFillYoutube className="w-8 h-8 text-red-600" />
            <p className="text-sm">Youtube</p>
          </div>
        </div>
      </div>
      <div className="col-span-2 p-6 flex flex-col justify-between gap-4 rounded-md bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-sky-900 via-sky-950 to-gray-900">
        <h1 className="text-white font-bold">Only on YouTube for now.</h1>
        <p className="text-white text-sm leading-none">
          This course is only available on YouTube for now. I`ll add it to the
          platform as soon as possible.
        </p>
        <Button className="bg-white text-black hover:text-white hover:bg-sky-500 duration-500">
          Watch on YouTube
        </Button>
      </div>
    </div>
  );
}
