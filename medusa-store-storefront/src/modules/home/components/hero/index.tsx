"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="bg-beige text-green-900 px-4 py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        {/* Left Textual Content */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left space-y-6"
        >
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium text-green-900 font-serif">
            <div className="mb-2">Experience the</div>
            <div className="mb-2">Brilliance of</div>
            <div>Craftsmanship</div>
          </h1>

          <p className="text-sm md:text-lg py-4">
            Discover a world where beauty meets craftsmanship, where every piece
            of jewelry tells a story.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link
              href="/shop"
              className="relative inline-block transition duration-200 transform hover:scale-105"
            >
              <span className="absolute bottom-0 right-0 mb-2 mr-2 h-full w-full bg-green-800 rounded-sm"></span>

              <div className="relative z-10 bg-green-900 text-white border border-white px-12 py-4 font-semibold rounded-sm">
                Shop Now →
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Right Image Layout */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-14 relative">
          {/* Woman with jewelry - Clip Reveal */}
          <motion.div
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ clipPath: "circle(75% at 50% 50%)" }}
            transition={{ duration: 1 }}
            className="pt-4"
          >
            <div className="border-2 border-[#d4c7ae] rounded-t-full p-2 w-60 h-72 md:w-56 md:h-72 lg:w-72 lg:h-96 shadow-md">
              <div className="relative w-full h-full overflow-hidden rounded-t-full">
                <Image
                  src="/hero-1.jpg"
                  alt="Woman wearing jewelry"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Proposal with ring - Clip Reveal */}
          <motion.div
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ clipPath: "circle(75% at 50% 50%)" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:block pb-4 md:pb-20"
          >
            <div className="border-2 border-[#d4c7ae] rounded-b-full p-2 w-60 h-72 md:w-56 md:h-72 lg:w-72 lg:h-[26rem] shadow-md ">
              <div className="relative w-full h-full overflow-hidden rounded-b-full">
                <Image
                  src="/hero-2.jpg"
                  alt="Proposal with ring"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
