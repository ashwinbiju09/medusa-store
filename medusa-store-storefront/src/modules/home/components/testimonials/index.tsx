"use client"

import { useRef } from "react"
import TestimonialCard from "@modules/home/templates/testimonials-card"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

const Testimonials = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const testimonials = [
    {
      name: "Jane D",
      role: "CEO",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s://pagedone.io/asset/uploads/1696229969.png",
      message:
        "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.",
    },
    {
      name: "Harsh P.",
      role: "Product Designer",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s://pagedone.io/asset/uploads/1696229994.png",
      message:
        "I used to dread doing my taxes every year, but pagedone has made the process so much simpler and stress-free.",
    },
    {
      name: "Alina R.",
      role: "CTO",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s://pagedone.io/asset/uploads/1696230010.png",
      message:
        "It's rare to find design and functionality come together this well. Incredible job!",
    },
    {
      name: "Carlos M.",
      role: "Manager",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s://pagedone.io/asset/uploads/1696230037.png",
      message:
        "We now close deals 30% faster. A must-have for teams that care about design.",
    },
  ]

  return (
    <section className="bg-beige py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
          {/* Left Section */}
          <div className="w-full lg:w-2/5 text-center lg:text-left">
            <span className="text-2xl sm:text-3xl text-green-800 font-semibold font-cursive mb-4 block">
              They Said It Better Than We Could
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-8">
              23k+ Customers gave their
              <span className="text-green-800"> Feedback</span>
            </h2>

            <div className="flex justify-center lg:justify-start gap-6 sm:gap-10">
              <button
                ref={prevRef}
                className="group border border-green-800 w-10 h-10 sm:w-12 sm:h-12 rounded-lg hover:bg-green-900 flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 sm:h-6 sm:w-6 text-green-800 group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 12H5M10 6L4.707 11.293a1 1 0 000 1.414L10 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                ref={nextRef}
                className="group border border-green-800 w-10 h-10 sm:w-12 sm:h-12 rounded-lg hover:bg-green-900 flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 sm:h-6 sm:w-6 text-green-800 group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 12h16M14 6l5.293 5.293a1 1 0 010 1.414L14 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Section (Swiper) */}
          <div className="w-full lg:w-3/5">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={20}
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
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
            >
              {testimonials.map((t, idx) => (
                <SwiperSlide key={idx} className="h-full">
                  <TestimonialCard {...t} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
