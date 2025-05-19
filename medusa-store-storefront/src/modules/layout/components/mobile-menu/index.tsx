import React, { useState } from "react"
import Link from "next/link"
import { IoClose, IoSearch } from "react-icons/io5"
import CartButton from "../cart-button"

interface Category {
  name: string
  href?: string
  sub?: { name: string; href: string }[]
}

const categories: Category[] = [
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

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setSearchOpen] = useState(false)

  return (
    <>
      {/* Top bar */}
      <div className="md:hidden flex justify-between items-center px-4 py-4 border-b bg-beige">
        <Link href="/" className="text-xl font-bold text-gray-800">
          RadEl
        </Link>
        <div className="flex items-center space-x-4">
          <button onClick={() => setSearchOpen(!isSearchOpen)}>
            <IoSearch size={22} className="text-gray-700" />
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoClose size={26} />
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Search overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-40 flex items-center justify-center px-4">
          <input
            autoFocus
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-full px-4 py-2"
          />
          <button
            onClick={() => setSearchOpen(false)}
            className="absolute top-4 right-4"
          >
            <IoClose size={24} />
          </button>
        </div>
      )}

      {/* Slide-in menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <nav className="space-y-2 text-gray-700 text-sm">
            {categories.map((cat, idx) =>
              !cat.sub ? (
                <Link
                  key={idx}
                  href={cat.href || "#"}
                  className="block px-2 py-2 hover:bg-gray-100"
                >
                  {cat.name}
                </Link>
              ) : (
                <details key={idx}>
                  <summary className="cursor-pointer py-2 px-2 hover:bg-gray-100 rounded">
                    {cat.name}
                  </summary>
                  <div className="ml-4 mt-1 space-y-1">
                    {cat.sub.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        href={sub.href}
                        className="block py-1 px-2 hover:bg-gray-100"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </details>
              )
            )}
          </nav>

          <div className="mt-6 border-t pt-4 space-y-3">
            <Link
              href="/account"
              className="block text-sm hover:text-neutral-800"
            >
              Account
            </Link>
            <CartButton />
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
