"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const checkScroll = () => setIsScrolled(window.scrollY > 50);
    checkScroll();
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div className="bg-brand-bg">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-brand"
            : "bg-transparent text-brand-text"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            <img
              src="/image/27.jpg"
              alt="Makeup"
              className="h-12 w-12 object-contain"
            />

            <h1
              className={`text-3xl font-bold text-center transition-colors duration-200 ${
                isScrolled ? "text-brand-dark-2" : "text-brand-secondary"
              }`}
            >
              Luxury Beauty Salon
            </h1>
          </div>

          {/* Nav Items */}
          <ul className="flex space-x-6 items-center">
            <li>
              <Link
                href="/"
                className={`font-semibold transition-colors duration-200 cursor-pointer hover:text-brand-cta ${
                  isScrolled ? "text-brand-dark-3" : "text-brand-secondary"
                }`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className={`font-semibold transition-colors duration-200 cursor-pointer hover:text-brand-cta ${
                  isScrolled ? "text-brand-dark-3" : "text-brand-secondary"
                }`}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/product"
                className={`font-semibold transition-colors duration-200 cursor-pointer hover:text-brand-cta ${
                  isScrolled ? "text-brand-dark-3" : "text-brand-secondary"
                }`}
              >
                Product
              </Link>
            </li>

            {/* Services Dropdown
            <li className="flex items-center gap-1">
              <Link
                href="/services"
                className={`font-semibold transition-colors duration-200 cursor-pointer hover:text-brand-cta ${
                  isScrolled ? "text-brand-dark-3" : "text-brand-secondary"
                }`}
              >
                Services
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`font-semibold transition-colors duration-200 cursor-pointer hover:text-brand-cta ${
                    isScrolled ? "text-brand-dark-3" : "text-brand-secondary"
                  }`}
                >
                  <ChevronDown className="size-4" />
                </DropdownMenuTrigger>

                <DropdownMenuContent className="bg-brand-bg border-brand-secondary p-2 rounded shadow-md">
                  <DropdownMenuItem className="transition-colors duration-200 text-brand-text">
                    <Link
                      href="/services/makeup"
                      className="w-full hover:text-brand-cta"
                    >
                      Makeup Services
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="transition-colors duration-200 text-brand-text">
                    <Link
                      href="/services/hair"
                      className="w-full hover:text-brand-cta"
                    >
                      Hair Services
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="transition-colors duration-200 text-brand-text">
                    <Link
                      href="/services/facial"
                      className="w-full hover:text-brand-cta"
                    >
                      Skin Care Services
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="transition-colors duration-200 text-brand-text">
                    <Link
                      href="/services/Nail"
                      className="w-full hover:text-brand-cta"
                    >
                      Nail Services
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="transition-colors duration-200 text-brand-text">
                    <Link
                      href="/services/waxing"
                      className="w-full hover:text-brand-cta"
                    >
                      Waxing & Hair Removal
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="transition-colors duration-200 text-brand-text">
                    <Link
                      href="/services/eye&lash"
                      className="w-full hover:text-brand-cta"
                    >
                      Eye & Lash Services
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="transition-colors duration-200 text-brand-text">
                    <Link
                      href="/services/spa"
                      className="w-full hover:text-brand-cta"
                    >
                      Spa & Massage Services
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li> */}

            <li className="relative flex items-center gap-1 group">
              {/* Main link for click */}
              <Link
                href="/services"
                className={`font-semibold transition-colors duration-200 cursor-pointer hover:text-brand-cta ${
                  isScrolled ? "text-brand-dark-3" : "text-brand-secondary"
                }`}
              >
                Services
                <ChevronDown className="inline-block ml-1 h-4 w-4" />
              </Link>

              {/* Dropdown menu on hover */}
              <ul
                className="absolute top-full left-0 mt-1 w-48 rounded shadow-md bg-brand-bg border border-brand-secondary
                 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200"
              >
                <li className="px-4 py-2 hover:text-brand-cta">
                  <Link href="/services/makeup" className="w-full block">
                    Makeup Services
                  </Link>
                </li>
                <li className="px-4 py-2 hover:text-brand-cta">
                  <Link href="/services/hair" className="w-full block">
                    Hair Services
                  </Link>
                </li>
                <li className="px-4 py-2 hover:text-brand-cta">
                  <Link href="/services/facial" className="w-full block">
                    Skin Care Services
                  </Link>
                </li>
                <li className="px-4 py-2 hover:text-brand-cta">
                  <Link href="/services/nail" className="w-full block">
                    Nail Services
                  </Link>
                </li>
                <li className="px-4 py-2 hover:text-brand-cta">
                  <Link href="/services/waxing" className="w-full block">
                    Waxing & Hair Removal
                  </Link>
                </li>
                <li className="px-4 py-2 hover:text-brand-cta">
                  <Link href="/services/eye-lash" className="w-full block">
                    Eye & Lash Services
                  </Link>
                </li>
                <li className="px-4 py-2 hover:text-brand-cta">
                  <Link href="/services/spa" className="w-full block">
                    Spa & Massage Services
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="/contact"
                className={`font-semibold transition-colors duration-200 cursor-pointer hover:text-brand-cta ${
                  isScrolled ? "text-brand-dark-3" : "text-brand-secondary"
                }`}
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
