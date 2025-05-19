import React from "react"

interface TestimonialCardProps {
  name: string
  avatar: string
  message: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  avatar,
  message,
}) => {
  return (
    <div className="group bg-white border border-gray-300 rounded-2xl p-6 transition-all duration-500 hover:border-green-800 h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-5 mb-5">
          <img
            className="rounded-full w-12 h-12 object-cover"
            src={avatar}
            alt={name}
          />
          <div>
            <h5 className="text-gray-900 font-medium">{name}</h5>
          </div>
        </div>

        <div className="flex items-center gap-1 mb-5 text-amber-500">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 18 17"
              >
                <path d="M8.103 1.317c.367-.743 1.427-.743 1.794 0l1.81 3.666a1 1 0 00.753.53l4.046.588c.82.119 1.148 1.127.555 1.705l-2.928 2.854a1 1 0 00-.287.887l.691 4.03c.14.817-.717 1.44-1.45 1.055L9.465 14.745a1 1 0 00-.93 0L4.916 16.647c-.733.385-1.59-.238-1.45-1.055l.69-4.03a1 1 0 00-.287-.887L.94 7.824c-.593-.578-.266-1.586.554-1.705l4.046-.588a1 1 0 00.753-.53l1.81-3.666z" />
              </svg>
            ))}
        </div>

        <p className="text-sm text-gray-500 group-hover:text-gray-800 min-h-20">
          {message}
        </p>
      </div>
    </div>
  )
}

export default TestimonialCard
