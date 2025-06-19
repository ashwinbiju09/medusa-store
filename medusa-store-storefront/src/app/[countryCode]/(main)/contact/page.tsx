"use client"

import { useState } from "react"
import Input from "@modules/common/components/input"
import { SubmitButton } from "@modules/checkout/components/submit-button"

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // TODO: Replace with actual form submission logic (API or service)
    console.log("Form submitted:", formData)

    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div
      className="max-w-md w-full mx-auto flex flex-col items-center p-8 rounded-md shadow-2xl m-6"
      data-testid="contact-page"
    >
      <h1 className="text-4xl font-semibold text-green-900 mb-4 font-cursive">
        Contact Us
      </h1>
      <p className="text-center text-base text-green-900 mb-6 py-4">
        Have a question? Need help with an order? We're here to assist you.
        Reach out and we'll get back to you as soon as possible.
      </p>

      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-4 ">
          <Input
            label="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            data-testid="name-input"
          />
          <Input
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
            data-testid="email-input"
          />
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-green-900 mb-1"
            >
              {" "}
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent resize-none"
              data-testid="message-textarea"
            ></textarea>
          </div>
        </div>

        {submitted && (
          <p
            className="text-green-700 text-sm mt-4"
            data-testid="submission-success"
          >
            Thank you! We’ve received your message.
          </p>
        )}

        <SubmitButton
          data-testid="submit-contact-button"
          className="w-full mt-6 bg-green-900 text-white text-xl font-cursive hover:bg-green-800 transition-all duration-200 py-3 rounded-sm"
        >
          Send Message
        </SubmitButton>
      </form>
    </div>
  )
}

export default Contact
