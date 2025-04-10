import React from "react";
import cyber from "../assets/About/cyber.jpg";
import hand from "../assets/About/hand.jpg";
import mission from "../assets/About/mission.webp";
import vision from "../assets/About/vision.jpg";
import subs from '../assets/About/subs.jpg'

function About() {
  return (
    <>
      <div className="font-sans text-gray-800 mt-17">
        <div
          className="w-full h-[400px] flex flex-col justify-center items-center text-white text-center"
          style={{
            backgroundImage: `url(${cyber})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-4xl font-bold mb-4">About CyberSpace-inc</h1>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md">
            KNOW MORE
          </button>
        </div>

        <div className="bg-white py-10 px-4 md:px-20 text-center">
          <p className="text-gray-700 text-lg max-w-4xl mx-auto">
            Welcome to Cyberspace-Inc, your premier destination for connecting
            talented IT professionals with exciting career opportunities in the
            technology sector. Established with   vision to revolutionize the
            way individuals navigate the job market, Cyberspace-Inc serves as a
            trusted platform where job seekers and employers come together to
            explore, discover, and connect.
          </p>
        </div>

        <div className="py-12 px-4 md:px-20 grid md:grid-cols-2 gap-8 items-center">
          <img src={hand} alt="Handshake" className="rounded-lg shadow-md" />
          <div className="text-orange-700 text-xl leading-relaxed">
            <p>
              At Cyberspace-Inc, we believe that the future of technology lies
              in the hands of those who dare to dream, innovate, and push the
              boundaries of what's possible. Together, let's embark on a journey
              of endless possibilities and change the world.
            </p>
          </div>
        </div>

        <div className="fixed bottom-5 right-5">
          <button className="bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600">
            💬
          </button>
        </div>
        <div className="font-sans px-4 py-12 md:px-20 text-center bg-white text-gray-800">
          <h2 className="text-4xl font-semibold text-orange-700 mb-12">
            Mission and Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="flex flex-col items-center">
              <img
                src={mission}
                alt="Mission"
                className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Mission</h3>
              <p className="text-gray-600">
                At Cyberspace-Inc, our mission is to connect talented
                professionals with rewarding career opportunities in the dynamic
                and ever-evolving field of information technology. We are
                committed to providing a platform where job seekers can explore,
                apply for, and secure their dream jobs while empowering
                employers to find the right talent to drive their organizations
                forward.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={vision}
                alt="Vision"
                className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Vision</h3>
              <p className="text-gray-600">
                Our vision is to be the leading destination for IT professionals
                seeking meaningful and fulfilling careers in the technology
                industry. We strive to create a vibrant and inclusive community
                where individuals can thrive, grow, and make a positive impact
                through their work. By fostering innovation, collaboration, and
                continuous learning, we aim to shape the future of the IT job
                market and inspire excellence in the tech workforce.
              </p>
            </div>
          </div>

          <div className="fixed bottom-5 right-5">
            <button className="bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600">
              💬
            </button>
          </div>
        </div>
        <div className="font-sans px-4 py-12 md:px-24 bg-white text-gray-800">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-orange-700 mb-6">
            Join Our Community
          </h2>

          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
            At Cyberspace-Inc, we believe in the power of community. Whether
            you're an experienced IT professional or an employer seeking top 
            talent, we invite you to become a part of our vibrant and inclusive
            community. Here's why you should join us:
          </p>

          <div className="space-y-6 text-gray-700 max-w-4xl mx-auto">
            <div>
              <strong>Networking Opportunities:</strong> Connect with
              like-minded professionals, industry experts, and potential
              employers through our platform. Expand your network, exchange
              ideas, and build valuable relationships that can enhance your
              career prospects.
            </div>

            <div>
              <strong>Access to Exclusive Resources:</strong> Gain access to
              exclusive resources, tools, and content designed to support your
              career growth and development. From job search tips and resume
              writing guides to industry insights and professional development
              opportunities, we provide the resources you need to succeed.
            </div>

            <div>
              <strong>Job Board:</strong> Explore our comprehensive job board
              featuring a wide range of IT roles and opportunities from leading
              companies and industries. Whether you're looking for full-time
              positions, contract opportunities, or freelance gigs, you'll find
              exciting career prospects that match your skills and interests.
            </div>

            <div>
              <strong>Career Support:</strong> Receive personalized career
              support and guidance from our team of experts. Whether you're
              navigating the job market, preparing for interviews, or
              negotiating offers, we're here to support you every step of the
              way and help you achieve your career goals.
            </div>
          </div>

          <div className="fixed bottom-5 right-5">
            <button className="bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600">
              💬
            </button>
          </div>
        </div>
        <div className="relative bg-gradient-to-r from-[#0f2027] to-[#2c5364] py-20 px-4 text-white">
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:  `url(${subs})`,
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
      </div>
    </>
  );
}

export default About;
