"use client"

import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/autoplay"

import DealCard from "@modules/home/templates/deals-card"
import { IoChevronBack, IoChevronForward } from "react-icons/io5"

import Necklace from "assets/categories/necklace.png"
import Earrings from "assets/categories/earrings.png"

const deals = [
  {
    title: "Copper Gold plated",
    image: Necklace,
    price: 105.0,
    originalPrice: 115.0,
    discount: "-50%",
    href: "#",
  },
  {
    title: "Elegant Drop Earrings",
    image: Earrings,
    price: 59.0,
    originalPrice: 79.0,
    discount: "-25%",
    href: "#",
  },
  {
    title: "Copper Gold plated",
    image: Necklace,
    price: 105.0,
    originalPrice: 115.0,
    discount: "-50%",
    href: "#",
  },
  {
    title: "Copper Gold plated",
    image: Necklace,
    price: 105.0,
    originalPrice: 115.0,
    discount: "-50%",
    href: "#",
  },
  {
    title: "Elegant Drop Earrings",
    image: Earrings,
    price: 59.0,
    originalPrice: 79.0,
    discount: "-25%",
    href: "#",
  },
  {
    title: "Copper Gold plated",
    image: Necklace,
    price: 105.0,
    originalPrice: 115.0,
    discount: "-50%",
    href: "#",
  },
]

const Deal = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section className="py-16 px-4 bg-beige text-gray-900 relative">
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center w-full max-w-5xl px-4">
          <div className="h-px flex-grow bg-gradient-to-r from-transparent via-green-900 to-green-900 opacity-40"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center text-green-900 mx-6 whitespace-nowrap  font-cursive">
            Today's Hot Deals
          </h2>
          <div className="h-px flex-grow bg-gradient-to-l from-transparent via-green-900 to-green-900 opacity-40"></div>
        </div>
      </div>

      <div className="relative px-12 py-6">
        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-green-900 text-white rounded-full w-10 h-10 shadow"
        >
          <IoChevronBack size={20} />
        </button>

        <button
          ref={nextRef}
          className="flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-900 text-white rounded-full w-10 h-10 shadow"
        >
          <IoChevronForward size={20} />
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2000 }}
          loop={true}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            if (typeof swiper.params.navigation === "object") {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
              swiper.navigation.init()
              swiper.navigation.update()
            }
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="px-6"
        >
          {deals.map((item, idx) => (
            <SwiperSlide key={idx}>
              <DealCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Deal
