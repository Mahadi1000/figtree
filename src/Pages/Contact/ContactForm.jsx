import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
    const [gdprAgreement, setGdprAgreement] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
     const handleSubmit = (e) => {
       e.preventDefault();
          emailjs
            .sendForm(
              "service_jtr1sh4",
              "template_dxcut39",
              form.current,
              "i_meVwa85ciedtEeODXhB"
            )
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
       // Add your logic to handle the form submission here
       console.log("Form submitted:", formData);
    };
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
  return (
    <div className="lg:w-1/2 w-full bg-white shadow-xl p-4">
      <form
        ref={form}
        className="w-full flex  lg:flex-wrap  bg-white"
        onSubmit={handleSubmit}
      >
        <p className="my-7">
          Design your custom contact forms with this Houzez Elementor custom
          widget and connect your leads with the integrated Houzez CRM.
        </p>
        <div className="lg:w-1/2 w-full pr-2 ">
          <label
            className="block mb-2 text-sm font-semibold text-gray-600"
            htmlFor="firstName"
          >
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="lg:w-1/2 w-full pl-2">
          <label
            className="block mb-2 text-sm font-semibold text-gray-600"
            htmlFor="lastName"
          >
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <label
          className="block mb-2 text-sm font-semibold text-gray-600"
          htmlFor="email"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />

        <label
          className="block mb-2 text-sm font-semibold text-gray-600"
          htmlFor="message"
        >
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md resize-none focus:outline-none focus:border-blue-500"
          required
        ></textarea>
      </form>
      {/* Repeat for lastName, email, and message */}
      <div className="mb-4 ">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="gdprAgreement"
        >
          GDPR Agreement
        </label>
        <input
          className="form-checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          id="gdprAgreement"
          type="checkbox"
          checked={gdprAgreement}
          onChange={(e) => setGdprAgreement(e.target.checked)}
          required
        />
        <span className="ml-2 text-gray-700">
          I consent to having this website store my submitted information
        </span>

        <div className="flex w-full items-center justify-between">
          <button
            value="send"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-10 mt-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm
