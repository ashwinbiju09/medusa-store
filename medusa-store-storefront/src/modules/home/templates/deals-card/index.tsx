// components/DealCard.tsx

import Image from "next/image"
import Link from "next/link"
import { FiArrowRightCircle } from "react-icons/fi"

interface DealCardProps {
  image: any
  title: string
  price: number
  originalPrice: number
  discount: string
  href: string
}

const DealCard = ({
  image,
  title,
  price,
  originalPrice,
  discount,
  href,
}: DealCardProps) => {
  return (
    <div className="bg-white py-3 px-2 relative w-72 mx-auto rounded-md">
      {/* Discount Badge */}
      <div className="absolute top-3 left-3 bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded-full">
        {discount}
      </div>

      <div className="flex justify-center mb-4">
        <Image src={image} alt={title} className="rounded-xl h-48 w-48" />
      </div>

      <div className=" px-2 py-1 rounded-md space-y-1">
        {/* Title */}
        <p className="text-md font-medium text-gray-800">{title}</p>

        {/* Price and Button */}
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <p className="text-base font-bold text-gray-900">
              ${price.toFixed(2)}
            </p>
            <p className="text-sm text-gray-400 line-through">
              ${originalPrice.toFixed(2)}
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href={href}
            className="hover:text-gray-200 text-gray-800 flex items-center justify-center"
          >
            <FiArrowRightCircle size={20} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DealCard
