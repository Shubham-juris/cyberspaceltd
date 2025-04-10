import React from "react";
import Img from "../assets/About/hand.jpg";

export default function GetInTouch() {
  return (
    <section className="px-4 py-16 max-w-7xl mx-auto mt-15">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4">
          About ITJobBoard
        </h2>
        <hr className="border-t-2 border-gray-300 w-16 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
        <img
          src={Img}
          alt="Customer support headset and keyboard"
          className="rounded-2xl shadow-xl w-full object-cover max-h-[400px]"
        />
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">Contact Us</h3>
          <p className="text-gray-600 text-base leading-relaxed">
            Have questions or need assistance? We're here to help!
            Use the contact form or reach out with the details below—
            a member of our team will respond promptly.
          </p>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4">
          Get In Touch
        </h2>
        <hr className="border-t-2 border-gray-300 w-16 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            placeholder="Email *"
            className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 p-4 rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>

          <div className="text-sm text-orange-600 underline cursor-pointer hover:text-orange-700 transition">
            Attach Files
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-xl text-lg font-medium hover:bg-orange-600 transition duration-300"
          >
            SEND
          </button>

          <p className="text-xs text-gray-500 text-center">
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </p>
        </form>

         <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Questions or Comments
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Send us a message or ask a question using this form.
              We'll do our best to respond promptly.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Website
            </h3>
            <p className="text-gray-600">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 underline hover:text-orange-700 transition"
              >
                cyberspace-inc.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Hours
            </h3>
            <p className="text-gray-600">Mon–Fri: 09:00 a.m. – 05:00 p.m.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
