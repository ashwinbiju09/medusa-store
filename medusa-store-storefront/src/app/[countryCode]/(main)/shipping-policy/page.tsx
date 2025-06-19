export default function ShippingPolicy() {
  return (
    <div className="content-container py-12 px-4 max-w-5xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6 font-cursive text-center text-green-900">
        Shipping Policy
      </h1>

      <section className="mb-6">
        <p>
          We ship our products all over India. Our goal is to ensure your orders
          reach you safely and on time.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-green-900">
          Order Processing
        </h2>
        <p>
          Orders are processed within <strong>3–5 business days</strong> after
          order confirmation. In case of any delay, we will notify you in
          advance.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-green-900">
          Delivery Timelines
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Normal Delivery:</strong> 4–8 business days (depending on
            location; excludes weekends & public holidays).
          </li>
          <li>
            <strong>Express Delivery:</strong> 3–5 business days (depending on
            location).
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-green-900">
          Important Notes
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Delays:</strong> Unexpected delays may occur due to weather,
            courier issues, or holidays.
          </li>
          <li>
            <strong>Incorrect Address:</strong> Please ensure your shipping
            address is correct. We are not responsible for delays due to
            incorrect or incomplete addresses.
          </li>
          <li>
            <strong>Courier Partner:</strong> We use trusted courier services
            for reliable and safe delivery.
          </li>
          <li>
            <strong>Package Tampering:</strong> Do not accept tampered packages.
            If noticed, please inform the Aadhiya Bridal Jewels team
            immediately.
          </li>
          <li>
            <strong>Tracking Orders:</strong> Once tracking details are shared,
            please monitor your shipment. If not delivered within 15 business
            days, contact us via WhatsApp or email with your order details.
          </li>
          <li>
            <strong>15-Day Limit:</strong> Reports made after 15 business days
            from shipment dispatch will not be considered for lost package
            claims.
          </li>
        </ul>
      </section>
    </div>
  )
}
