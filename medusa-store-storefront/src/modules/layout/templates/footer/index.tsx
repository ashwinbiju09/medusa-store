"use client"

import { FaInstagram } from "react-icons/fa"
import Link from "next/link"

const categories = [
  { name: "Bangles", href: "#" },
  { name: "Bracelet", href: "#" },
  { name: "Earrings", href: "#" },
  { name: "Hair accessories", href: "#" },
  { name: "Hipbelt", href: "#" },
]

const policies = [
  { name: "Terms & Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Shipping Policy", href: "#" },
  { name: "Cancellation Policy", href: "#" },
  { name: "Return & Refund Policy", href: "#" },
]

const help = [
  { name: "Contact Us", href: "#" },
  { name: "Feedback", href: "#" },
]

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-12">
          {/* Left Section */}
          <div className="flex flex-col gap-4 w-full lg:w-1/3">
            <h2 className="text-2xl font-bold text-green-900 font-cursive">
              Aadhiya Bridal Jewels
            </h2>
            <p className="text-md text-gray-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-800 hover:text-green-600 text-lg"
            >
              <FaInstagram />
              <span className="text-sm">Instagram</span>
            </a>
          </div>

          {/* Right Section: 3 Columns (Quick Links, Policies, Support) */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2 text-md text-gray-600">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <Link
                      href={cat.href}
                      className="hover:text-green-700 transition-colors"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Policies
              </h3>
              <ul className="space-y-2 text-md text-gray-600">
                {policies.map((p) => (
                  <li key={p.name}>
                    <Link
                      href={p.href}
                      className="hover:text-green-700 transition-colors"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Support
              </h3>
              <ul className="space-y-2 text-md text-gray-600">
                {help.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="hover:text-green-700 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
