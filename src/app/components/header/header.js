"use client";

import { PopoverGroup } from "@headlessui/react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 "
      >
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link className="text-sm/6 font-semibold text-gray-900 blog" href="/">
            Home
          </Link>
          <Link
            className="text-sm/6 font-semibold text-gray-900 blog"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="text-sm/6 font-semibold text-gray-900 blog"
            href="/company"
          >
            Company
          </Link>

          <Link
            className="text-sm/6 font-semibold text-gray-900 blog"
            href="/contact"
          >
            Contact
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
