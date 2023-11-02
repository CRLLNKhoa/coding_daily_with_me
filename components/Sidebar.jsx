"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { GiContract } from "react-icons/gi";
import { FaRegCompass } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { usePathname } from "next/navigation";
import {RxDiscordLogo} from "react-icons/rx"
import {LuGraduationCap} from "react-icons/lu"
import {HiOutlineMail} from "react-icons/hi"

export default function Sidebar() {
  return (
    <div className="h-screen w-full border-r sticky top-0">
      <div className="border-b p-5 h-[80px] flex items-center justify-start">
        <div className="shadow-[2px_2px_0px_0px_black] w-12 h-12 overflow-hidden rounded-full">
          <img
            src="./logo.jpg"
            alt="logo"
            className="w-full h-full "
          />
        </div>
        <p className="font-bold ml-2 text-sky-700 text-lg">CodeWithKhoa</p>
      </div>
      <div className="flex flex-col">
        <ItemMenu
          active={true}
          title="Browse"
          icon={<FaRegCompass className="w-5 h-5" />}
        />
        <ItemMenu
          title="Leaderboard"
          icon={<TfiCup className="w-4 h-4" />}
          link="/leaderboard"
        />
         <ItemMenu
          title="Discord"
          icon={<RxDiscordLogo className="w-5 h-5" />}
          link="/discord"
        />
         <ItemMenu
          title="Mentorship"
          icon={<LuGraduationCap className="w-5 h-5" />}
          link="/mentorship"
        />
          <ItemMenu
          title="Newsletter"
          icon={<HiOutlineMail className="w-5 h-5" />}
          link="/newsletter"
        />
      </div>
    </div>
  );
}

const ItemMenu = ({
  icon = <GiContract className="w-5 h-5" />,
  title = "ItemMenu",
  link = "/",
}) => {
  const path = usePathname();
  const active = path === link;
  return (
    <Link
      href={link}
      className={cn(
        "p-4 flex text-gray-400 items-center gap-2 text-muted-foreground hover:bg-slate-100 cursor-pointer select-none",
        active && "bg-sky-100 hover:bg-sky-100 text-sky-600"
      )}
    >
      {icon}
      <p className="text-sm font-bold">{title}</p>
    </Link>
  );
};
