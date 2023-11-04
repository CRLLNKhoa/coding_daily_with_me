"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

export default function ProjectCard({ data }) {
  const router = useRouter()
  return (
    <div onClick={() => router.push(`/projects/${data?.slug}`)} className="flex flex-col cursor-pointer gap-2 p-2 border justify-between rounded-md h-[284px]">
      <img
        src={data?.img}
        alt="img"
        className="rounded-md"
      />
      <div className="mb-auto">
        <Link
          href="/"
          className="font-bold text-sm leading-none hover:text-sky-500 duration-300"
        >
          {data?.name}
        </Link>
        <p className="text-[12px]">Lương Khoa</p>
      </div>
      <div className="flex items-center gap-1 mb-auto">
        <div className="border border-red-300 p-[2px] rounded-full bg-red-300">
          <AiFillYoutube className="text-red-600" />
        </div>
        <p className="text-[12px]">Youtube</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-muted-foreground">Free</p>
        <div className="flex gap-1 text-green-600">
          <BsCheckLg />
          <p className="text-[12px]">Complete</p>
        </div>
      </div>
    </div>
  );
}
