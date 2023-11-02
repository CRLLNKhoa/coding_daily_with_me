import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function page() {
  return (
    <div className="w-full h-full flex justify-center items-center select-none">
      <div className="bg-gray-100 p-6 border rounded-md flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl font-bold text-muted-foreground">
          Join the Newsletter
        </h1>
        <p className="text-sm">
          Want to be the first to know when new tutorial is out? Sign up below.
        </p>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="email"
            placeholder="Email"
          />
          <Button className="bg-sky-600" type="submit">Subscribe</Button>
        </div>
        <p className="text-[12px]">We wont send you spam. Unsubscribe at any time.</p>
        <p className="text-[8px]">BUILD WITH LƯƠNG KHOA</p>
      </div>
    </div>
  );
}
