import React from "react";
import Img from "../assets/About/vision.jpg";

const Employers = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 py-16 space-y-24 mt-15 bg-white text-gray-800">
    
      <section className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Explore Our Comprehensive Services
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
          Welcome to the Cyberspace-Inc Job Board! As an employer, you have the opportunity
          to connect with top talent and find the perfect candidates to join your team. Our
          platform offers a range of features and services designed to streamline your hiring
          process and attract qualified professionals in the technology sector.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300">
          FIND OUT MORE
        </button>
      </section>


      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-12">
          Why Choose Cyberspace-Inc?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
          {[
            {
              title: "Access to Top Talent",
              text:
                "Our job board attracts highly skilled IT professionals from diverse backgrounds and expertise. Whether you're looking for software developers, cybersecurity experts, data analysts, or IT consultants, you'll find talented candidates with the skills and experience you need to drive your business forward.",
            },
            {
              title: "Easy Job Posting",
              text:
                "Posting your job openings on Cyberspace-Inc is quick and easy. Simply create an account, upload your job description, and reach thousands of qualified candidates in just a few clicks. Our user-friendly platform allows you to manage and track your job postings with ease.",
            },
            {
              title: "Customized Recruitment Solutions",
              text:
                "We understand that every hiring need is unique. That's why we offer customized recruitment solutions tailored to meet your specific requirements. Whether you're looking to fill a single position or recruit for multiple roles, our team will work with you to develop a personalized strategy that aligns with your goals and budget.",
            },
            {
              title: "Targeted Candidate Matching",
              text:
                "Our advanced candidate matching algorithm helps you find the perfect candidates for your job openings. We analyze candidate profiles, skills, and preferences to match them with relevant job opportunities, ensuring that you connect with the most qualified candidates for your roles.",
            },
            {
              title: "Employer Branding Opportunities",
              text:
                "Showcase your company culture, values, and unique selling points to attract top talent. Our platform allows you to create a branded company profile, highlight your company's mission and values, and showcase employee testimonials and success stories to attract candidates who align with your organization's culture.",
            },
            {
              title: "Dedicated Support",
              text:
                "Our dedicated support team is here to assist you every step of the way. Whether you have questions about posting jobs, managing applications, or optimizing your recruitment strategy, we're here to help. Contact us for personalized assistance and guidance to make the most of your recruitment efforts.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 hover:bg-white p-6 rounded-xl shadow-sm transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-orange-500">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

 
      <section className="flex flex-col md:flex-row items-center gap-10">
        <img
          src={Img}
          alt="Handshake"
          className="w-full md:w-1/2 rounded-2xl shadow-lg"
        />
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
            Get Started Today!
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            Ready to find your next star employee? Sign up for an employer account on Cyberspace-Inc
            and start posting your job openings today. Join our community of leading employers and
            discover the talent you need to drive innovation And success in your organization.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Employers;
