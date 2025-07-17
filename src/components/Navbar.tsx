"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-4 w-sm sm:w-xl lg:w-2xl inset-x-0 z-50 mx-auto px-2", className)}>
      <Menu setActive={setActive}>
        <div className="flex  justify-center gap-x-2 sm:gap-x-6 sm:gap-y-2 text-sm sm:text-base md:text-lg font-medium">
          <Link href="/">
            <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>

          <MenuItem setActive={setActive} active={active} item="Courses">
            <div className="flex flex-col space-y-3 text-sm sm:text-base">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/ai-course">Ai Learnings</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Batches">
            <div className="flex flex-col space-y-3 text-sm sm:text-base">
              <HoveredLink href="/hustlersOne">Hustlers </HoveredLink>
              <HoveredLink href="/hustlersTwo">Hustlers 2.O</HoveredLink>
              <HoveredLink href="/hustlersThree">Hustlers 3.O</HoveredLink>
            </div>
          </MenuItem>

          <Link href="/contact">
            <MenuItem setActive={setActive} active={active} item="Contact Us" />
          </Link>
        </div>
      </Menu>
    </div>
  );
}

export default Navbar;
