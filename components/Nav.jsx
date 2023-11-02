import React from "react";
import { Button } from "./ui/button";
import { BiLogIn, BiSearch } from "react-icons/bi";

export default function Nav() {
  return (
    <div className="min-h-[80px] sticky top-0 bg-white z-50 max-h-[80px] border-b p-4 flex items-center justify-between">
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <BiSearch className="h-4 w-4 text-muted-foreground" />
        </span>
        <input
          className="placeholder:italic text-muted-foreground duration-700 bg-slate-100 placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-200-500 focus:ring-gray-200 focus:w-[300px] transition-all focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
          autoComplete="off"
        />
      </label>

      <Button
        className="rounded-md"
        variant="outline"
      >
        <BiLogIn className="mr-2" />
        Login
      </Button>
    </div>
  );
}
