"use client";
import { sidebar } from "@/lib/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import ProfileBtn from "./ProfileBtn";
import { Twitter } from "lucide-react";

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col max-md:items-center justify-between h-full">
      <div className="flex flex-col max-md:items-center gap-4">
        <Twitter size={25} className="mb-5" />
        {sidebar.map((each, index) => (
          <Link
            href={each.link}
            key={index}
            className={`group ${pathname === each.link ? "text-sky-400" : ""}`}
          >
            <div className="flex gap-5 items-center group-hover:bg-secondary rounded-full p-2 md:px-4 w-fit">
              <span className="transition-all duration-500">
                <each.Icon />
              </span>
              <span
                className={`text-lg hidden  md:inline ${
                  pathname === each.link ? "font-bold" : "font-normal"
                }`}
              >
                {each.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <ProfileBtn />
    </div>
  );
};

export default LeftSidebar;
