"use client"

import { useRef, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { motion, useAnimation, useInView } from "framer-motion"

import CategoryCard from "@modules/home/templates/category-card"
import { IoChevronBack, IoChevronForward } from "react-icons/io5"

import Bangles from "assets/categories/bangles.png"
import Bracelets from "assets/categories/bracelet.png"
import Earrings from "assets/categories/earrings.png"
import Necklace from "assets/categories/necklace.png"

const categories = [
  { title: "Necklaces", image: Necklace, href: "#" },
  { title: "Earrings", image: Earrings, href: "#" },
  { title: "Bangles", image: Bangles, href: "#" },
  { title: "Bracelets", image: Bracelets, href: "#" },
  { title: "Necklaces", image: Necklace, href: "#" },
  { title: "Earrings", image: Earrings, href: "#" },
  { title: "Bangles", image: Bangles, href: "#" },
  { title: "Bracelets", image: Bracelets, href: "#" },
]

const AnimatedSlide = ({
  children,
  index,
}: {
  children: React.ReactNode
  index: number
}) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      custom={index}
      variants={{
        hidden: { opacity: 0, x: -40 },
        visible: (i) => ({
          opacity: 1,
          x: 0,
          transition: { delay: i * 0.05, duration: 1.5 },
        }),
      }}
    >
      {children}
    </motion.div>
  )
}

const Category = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section className="py-12 px-4 bg-white text-green-900 relative">
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center w-full max-w-5xl px-4">
          <div className="h-px flex-grow bg-gradient-to-r from-transparent via-green-900 to-green-900 opacity-40"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-cursive font-medium text-center text-green-900 mx-6 whitespace-nowrap">
            Sparkle in Love
          </h2>
          <div className="h-px flex-grow bg-gradient-to-l from-transparent via-green-900 to-green-900 opacity-40"></div>
        </div>
      </div>

      <div className="relative px-12">
        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-green-900 text-white rounded-full w-10 h-10 shadow hover:bg-green-800"
        >
          <IoChevronBack size={20} />
        </button>

        <button
          ref={nextRef}
          className="flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-900 text-white rounded-full w-10 h-10 shadow hover:bg-green-800"
        >
          <IoChevronForward size={20} />
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
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
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="px-6"
        >
          {categories.map((cat, idx) => (
            <SwiperSlide key={idx}>
              <AnimatedSlide index={idx}>
                <CategoryCard {...cat} />
              </AnimatedSlide>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Category
