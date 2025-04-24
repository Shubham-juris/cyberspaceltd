import React from "react";
import Img from "../assets/Employer/portal.jpg";
import girl from "../assets/Employer/girl.jpg";
import subs from "../assets/About/subs.jpg";

const EmployersPortal = () => {
  return (
    <>
      <section className="px-4 py-20 md:px-16 lg:px-32 bg-white text-gray-800 mt-15">
        <div className="flex max-w-7xl justify-center mx-auto flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src={Img}
              alt="Employer using tablet"
              className="rounded-2xl shadow-lg w-full object-cover h-full max-h-[400px]"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Employers Portal:
              <br className="hidden md:block" />
              <span className="text-orange-500">
                {" "}
                Pricing for IT Job Postings on Cyberspace
              </span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Welcome to the Employers Portal of Cyberspace-Inc! We're excited
              to offer you an efficient and effective platform to connect with
              top IT talent and fill your job openings with qualified
              professionals. Below, you'll find our pricing options for posting
              IT jobs on Cyberspace-Inc.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-6">
            About ITJobBoard
          </h2>
          <div className="grid max-w-7xl justify-center mx-auto grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {[
              {
                title: "Basic Posting Package",
                price: "$29.99/month",
                features: [
                  "Post up to 3 job listings per month.",
                  "Standard job listing with basic features.",
                  "Exposure  our candidate database.",
                  "Limited access to candidate matching tools.",
                ],
              },
              {
                title: "Standard Posting Package",
                price: "$39.99/month",
                features: [
                  "Post up to 5 job listings per month.",
                  "Enhanced job listings with additional features.",
                  "Priority placement in search results.",
                  "Access to candidate matching tools for improved recruitment.",
                ],
              },
              {
                title: "Premium Posting Package",
                price: "$60/month",
                features: [
                  "Post unlimited job listings per month.",
                  "Premium job listings with advanced features.",
                  "Featured placement on our homepage and job search results.",
                  "Access to advanced candidate matching tools and analytics.",
                ],
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className="border rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-orange-500 mb-3">
                  {pkg.title} -{" "}
                  <span className="text-gray-700">{pkg.price}</span>
                </h3>
                <ul className="text-left list-disc list-inside text-sm text-gray-600 space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl font-semibold text-orange-600 mb-6">
            Additional Add-Ons:
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Featured Job Listing - $25 per listing:</strong> Highlight
              your job listing to stand out from the crowd and attract more
              attention from candidates.
            </li>
            <li>
              <strong>Resume Database Access - $50/month:</strong> Gain access
              to our extensive resume database to proactively search for and
              reach out to potential candidates.
            </li>
            <li>
              <strong>Recruiter Services - Custom Pricing:</strong> Let our team
              of experienced recruiters handle your hiring needs from start to
              finish. Contact us for personalized recruiting solutions tailored
              to your requirements.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-10 mb-4">
            Why Choose Cyberspace-Inc for Your Hiring Needs?
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Access to a vast pool of qualified IT professionals.</li>
            <li>
              User-friendly platform with advanced search and matching
              capabilities.
            </li>
            <li>
              Customized recruitment solutions to meet your specific needs.
            </li>
            <li>
              Dedicated support from our team of experts to assist you
              throughout the hiring process
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={girl}
            alt="Handshake"
            className="rounded-xl h-130 shadow-lg w-full max-w-md"
          />
        </div>
      </div>
      <div className="relative bg-gradient-to-r from-[#0f2027] to-[#2c5364] py-20 px-4 text-white">
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${subs})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
            zIndex: 0,
          }}
        />

        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Subscribe</h2>
          <p className="mb-6 text-lg">
            Sign up to hear from us about Jobs postings and job trends
          </p>

          <form className="w-full flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 text-white bg-transparent border border-white rounded-md"
            />

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md text-white font-semibold transition duration-300"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmployersPortal;
