export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="relative rounded-3xl bg-white shadow-lg text-justify text-gray-800 text-[1.125rem] leading-8 p-14">
        {/* Corner Borders */}
        <div className="absolute top-0 left-0 w-36 h-36 border-t-4 border-l-4 border-[#d4c7ae] rounded-tl-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-36 h-36 border-b-4 border-r-4 border-[#d4c7ae] rounded-br-3xl pointer-events-none"></div>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold font-cursive text-center text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-900 mb-10 tracking-wide">
          About Us
        </h1>

        {/* Content */}
        <p className="mb-4">
          Welcome to{" "}
          <strong className="text-green-700">Aadhiya Bridal Jewels</strong> –
          founded in 2024 by Keerthana, a homemaker turned entrepreneur.
        </p>

        <p className="mb-4">
          We’re committed to offering jewellery that looks and feels luxurious —
          all while remaining budget-friendly.
        </p>

        <div className="mb-4">
          <p className="font-semibold">Aadhiya Bridal Jewels offers:</p>
          <ul className="list-disc list-inside mt-2 ml-4 text-green-700">
            <li>Rental Jewellery (Tamil Nadu only)</li>
            <li>Retail Jewellery (Pan India)</li>
          </ul>
        </div>

        <p className="mb-4">
          Our collections include{" "}
          <span className="font-semibold text-green-800">Antique</span>,{" "}
          <span className="font-semibold text-green-800">American Diamond</span>
          , <span className="font-semibold text-green-800">Victorian</span>,{" "}
          <span className="font-semibold text-green-800">Silver-replica</span>,{" "}
          <span className="font-semibold text-green-800">Moissanite</span>,{" "}
          <span className="font-semibold text-green-800">Kundan</span>, and
          more.
        </p>

        <p className="mb-4">
          Explore a wide range of Neckpieces, Haarams, Earrings, Hipbelts, Hair
          Accessories, Bangles, and more — each crafted with care and precision.
        </p>

        <p className="mb-4">
          We believe jewellery should{" "}
          <span className="italic">complement your style — not define it</span>.
          You don’t need a special occasion to shine!
        </p>

        <p className="mb-4">
          Our goal is to deliver an exceptional shopping experience and help you
          find that perfect piece — whether for yourself or someone special.
        </p>

        <p className="mb-4">
          <strong>Email us at:</strong>{" "}
          <a
            href="mailto:aadhiyabridalhouse@gmail.com"
            className="text-emerald-700 underline font-medium hover:text-emerald-900 transition"
          >
            aadhiyabridalhouse@gmail.com
          </a>
        </p>

        {/* Signature */}
        <div className="flex justify-end mt-10">
          <div className="text-right text-green-900 font-medium text-xl">
            <p>Lots of love,</p>
            <p className="text-3xl font-cursive mt-3">Keerthana</p>
          </div>
        </div>
      </div>
    </div>
  )
}
