import React from "react";
import Img from "../assets/About/vision.jpg";

const Employers = () => {
  return (
    <section className="px-4 py-20 md:px-16 lg:px-32 bg-white text-gray-800">
     
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Employers Portal:
            <br className="hidden md:block" />
            <span className="text-orange-500"> Pricing for IT Job Postings on Cyberspace</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Welcome to the Employers Portal of Cyberspace-Inc! We're excited to offer you an efficient and effective platform to connect with top IT talent and fill your job openings with qualified professionals. Below, you'll find our pricing options for posting IT jobs on Cyberspace-Inc.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={Img}
            alt="Employer using tablet"
            className="rounded-2xl shadow-lg w-full object-cover h-full max-h-[400px]"
          />
        </div>
      </div>


      <div className="mt-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-6">About ITJobBoard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        
          {[
            {
              title: "Basic Posting Package",
              price: "$29.99/month",
              features: [
                "Post up to 3 job listings per month.",
                "Standard job listing with basic features.",
                "Exposure to our candidate database.",
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
                {pkg.title} - <span className="text-gray-700">{pkg.price}</span>
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
  );
};

export default Employers;
