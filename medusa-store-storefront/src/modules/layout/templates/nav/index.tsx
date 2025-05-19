import React, { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import CartButton from "@modules/layout/components/cart-button"
import { IoSearch } from "react-icons/io5"
import { IoMdArrowDropright } from "react-icons/io"
import { MdAccountCircle } from "react-icons/md"
// import MobileMenu from "@modules/layout/components/mobile-menu"

const categories = [
  { name: "Bangles", href: "#" },
  { name: "Bracelet", href: "#" },
  {
    name: "Combo offers",
    sub: [
      { name: "Subcategory A", href: "#" },
      { name: "Subcategory B", href: "#" },
    ],
  },
  { name: "Earrings", href: "#" },
  { name: "Hair accessories", href: "#" },
  {
    name: "Haram",
    sub: [
      { name: "American diamond", href: "#" },
      { name: "Antique jewellery", href: "#" },
      { name: "Victorian", href: "#" },
    ],
  },
  { name: "Hipbelt", href: "#" },
  {
    name: "Neckpiece",
    sub: [
      { name: "American diamond", href: "#" },
      { name: "Antique jewellery", href: "#" },
      { name: "Victorian", href: "#" },
    ],
  },
  { name: "1 Gram Gold chain", href: "#" },
]

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 bg-beige border-b border-gray-200 text-green-900">
      <header className="hidden w-full mx-auto px-4 py-4 sm:px-6 lg:px-8 md:flex items-center justify-between gap-4">
        <div className="md:w-1/3 flex justify-start">
          <Link href="/" className="font-serif leading-tight text-green-900">
            <span className="block text-xl font-bold tracking-wide">
              AADHIYA
            </span>
            <span className="text-md tracking-wide flex">
              <span>Bridal</span>
              <span className="pl-3">Jewels</span>
            </span>
          </Link>
        </div>

        <div className="md:w-1/3 flex justify-center">
          <div className="flex flex-wrap items-center space-x-4 md:space-x-6 text-sm md:text-base font-medium">
            <Link href="/" className="hover:text-neutral-800">
              Home
            </Link>

            <div className="relative group">
              <button className="hover:text-neutral-800">Categories </button>
              <div className="absolute bg-beige opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 ease-in-out shadow-md mt-2 rounded-md py-2 w-48 z-50">
                {categories.map((cat, idx) =>
                  !cat.sub ? (
                    <Link
                      key={idx}
                      href={cat.href}
                      className="block px-4 py-2 hover:bg-gray-100 transition duration-200"
                    >
                      {cat.name}
                    </Link>
                  ) : (
                    <div key={idx} className="relative group/submenu">
                      <button className="flex justify-between w-full px-4 py-2 hover:bg-gray-100">
                        {cat.name}
                        <span className="ml-auto">
                          <IoMdArrowDropright />
                        </span>
                      </button>
                      <div className="absolute bg-beige left-full top-0 ml-1 opacity-0 group-hover/submenu:opacity-100 invisible group-hover/submenu:visible transition-all duration-300 ease-in-out shadow-md rounded-md py-2 w-40 z-50">
                        {cat.sub.map((subCat, subIdx) => (
                          <Link
                            key={subIdx}
                            href={subCat.href}
                            className="block px-4 py-2 hover:bg-gray-100 transition duration-200"
                          >
                            {subCat.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <Link href="/about" className="hover:text-neutral-800">
              About Us
            </Link>
          </div>
        </div>

        <div className="md:w-1/3 flex justify-end items-center space-x-4 md:space-x-6 text-sm md:text-base">
          <div className="relative w-48 lg:w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-full border border-gray-300 px-4 py-2 pl-4 pr-10 text-sm focus:outline-none"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <IoSearch size={18} />
            </div>
          </div>

          <Suspense
            fallback={
              <div className="relative">
                <span className="text-md">Cart (0)</span>
              </div>
            }
          >
            <CartButton />
          </Suspense>

          <Link href="/account" className="text-xl">
            <MdAccountCircle size={28} className="text-green-900" />
          </Link>
        </div>
      </header>
    </div>
  )
}
