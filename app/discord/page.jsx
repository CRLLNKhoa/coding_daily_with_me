import { Button } from "@/components/ui/button";
import React from "react";
import { RxDiscordLogo } from "react-icons/rx";

export default function discord() {
  return (
    <div className="flex h-full items-center justify-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-sky-900 via-sky-950 to-gray-900 p-6">
      <div className="flex flex-col gap-4 text-white">
        <h1 className="text-3xl font-bold text-white">Discord community</h1>
        <p className="text-sm">
          Join the Discord community to chat with other students,
          <br /> ask questions, and more.
        </p>
        <Button
          aschild
          className="bg-white text-black hover:bg-gray-200"
        >
          <a
            href="https://discord.gg/KWAXH5jkYD"
            target="_blank"
            className="flex items-center"
          >
            <RxDiscordLogo className="w-6 h-6 mr-4" />
            Join Discord
          </a>
        </Button>
      </div>
    </div>
  );
}
