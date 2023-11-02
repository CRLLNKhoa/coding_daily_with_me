import { Button } from "@/components/ui/button";
import React from "react";
import { LuGraduationCap } from "react-icons/lu";

export default function mentorship() {
  return (
    <div className="flex h-full items-center justify-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-sky-900 via-sky-950 to-gray-900 p-6">
      <div className="flex flex-col gap-4 text-white">
        <h1 className="text-3xl font-bold text-white">Mentorship</h1>
        <p className="text-sm">
        Want to get mentored by Antonio? The cohort is open for <br /> applications!
        </p>
        <Button
          aschild
          className="bg-white text-black hover:bg-gray-200"
        >
          <a
            href="https://8agjkt3bpms.typeform.com/codewithantonio?typeform-source=www.codewithantonio.com"
            target="_blank"
            className="flex items-center"
          >
            <LuGraduationCap className="w-6 h-6 mr-4" />
            Apply today
          </a>
        </Button>
      </div>
    </div>
  );
}
