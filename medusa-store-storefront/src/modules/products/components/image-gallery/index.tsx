"use client"

import { useState, useRef, MouseEvent } from "react"
import Image from "next/image"
import clsx from "clsx"
import { HttpTypes } from "@medusajs/types"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [activeImage, setActiveImage] = useState(images?.[0]?.url || "")
  const zoomRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 50, y: 50 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: MouseEvent) => {
    const { left, top, width, height } =
      zoomRef.current!.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setPosition({ x, y })
  }

  return (
    <div className="flex flex-row gap-4 w-full">
      <div className="flex flex-col gap-2 max-h-[500px] overflow-auto">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setActiveImage(image.url)}
            className={clsx(
              "relative w-16 h-16 rounded-md overflow-hidden border"
            )}
          >
            <Image
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              fill
              sizes="64px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <div
        ref={zoomRef}
        className="relative group overflow-hidden rounded-md bg-ui-bg-subtle w-full max-w-[500px] aspect-[29/34] border"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        {activeImage && (
          <Image
            src={activeImage}
            alt="Main product image"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 500px"
          />
        )}

        {isHovering && activeImage && (
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              backgroundImage: `url(${activeImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "300%",
              backgroundPosition: `${position.x}% ${position.y}%`,
            }}
          />
        )}
      </div>
    </div>
  )
}

export default ImageGallery
