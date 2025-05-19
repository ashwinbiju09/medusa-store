import Image from "next/image"
import Link from "next/link"

interface CategoryCardProps {
  image: any
  title: string
  href: string
}

const CategoryCard = ({ image, title, href }: CategoryCardProps) => {
  return (
    <div className="text-center">
      {/* Image card */}
      <div className=" p-4 mb-4">
        <Image
          src={image}
          alt={title}
          className="mx-auto rounded-md w-56 h-56"
        />
      </div>

      {/* Title and Explore */}
      <div className="flex items-center justify-between w-full px-4">
        <p className="text-sm font-semibold text-green-900">{title}</p>
        <Link
          href={href}
          className="text-sm text-gray-600 hover:text-green-800 flex items-center gap-1"
        >
          Explore <span>→</span>
        </Link>
      </div>
    </div>
  )
}

export default CategoryCard
