"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronDownIcon } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    // Check scroll position on mount
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Run on mount
    checkScroll();

    // Add scroll event listener
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div>
      {/* Navebar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <img
            className="h-4 w-4 object-contain"
            src="/image/3.jpg"
            alt="Makeup"
          />
          <h1 className="text-2xl font-bold text-yellow-600 ">
            Luxury Beauty Salon
          </h1>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-yellow-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-500">
                About
              </Link>
            </li>

            <li className="flex items-center gap-1">
              <Link href="/services" className="hover:text-yellow-500">
                Services
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className=" hover:text-yellow-500 px-1">
                  <ChevronDown className="size-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white p-2 rounded shadow-md">
                  <DropdownMenuItem>
                    <Link href="/services/makeup">Makeup Services</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/services/hair">Hair Services</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/services/facial">Skin Care Services</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/services/Nail">Nail Services</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/services/waxing">Waxing & Hair Removal</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/services/eye&lash">Eye & Lash Services</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/services/spa">Spa & Massage Services</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-yellow-500 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
