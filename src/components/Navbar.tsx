"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            item="Home"
            active={active}
          ></MenuItem>
        </Link>
        <MenuItem
          setActive={setActive}
          item="Training Programs"
          active={active}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/trainingPrograms">
              All Programs
            </HoveredLink>
            <HoveredLink href="/trainingPrograms">
              Cardio Blast
            </HoveredLink>
            <HoveredLink href="/trainingPrograms">
              Strength Training
            </HoveredLink>
            <HoveredLink href="/trainingPrograms">
              Yoga Flow
            </HoveredLink>
            <HoveredLink href="/trainingPrograms">
              Powerlifting
            </HoveredLink>  <HoveredLink href="/trainingPrograms">
              Pilates Fusion
            </HoveredLink>

          </div>
        </MenuItem>
        <Link href={"/contact"}>
        <MenuItem
            setActive={setActive}
            item="Contact Us"
            active={active}
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
