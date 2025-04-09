import React from 'react'
import Write from '../assets/Jobs/write.jpg'

function Jobseekers() {
  return (
    <>
     <div className="bg-white min-h-screen px-6 py-12 mt-17">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-orange-600">Cyberspace-inc Job board</h1>
        <div className="w-20 h-1 bg-orange-400 mx-auto mt-2"></div>
      </div>

      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16">
        <img
          src={Write}
          alt="Writing"
          className="rounded-md shadow-lg"
        />
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-xl font-semibold mb-3 text-center">Hello</h2>
          <p className="text-gray-700">
            Welcome to the Cyberspace-Inc Job Board, your gateway to exciting career opportunities in the thriving field of information technology. Whether you're a seasoned IT professional or a recent graduate eager to kick-start your career, our job board offers a diverse range of roles and opportunities to explore. With a commitment to connecting talented individuals with leading employers, we strive to make your job search experience seamless, efficient, and rewarding.
          </p>
        </div>
      </div>

      {/* Job Position Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-orange-600">Web developer</h2>
        <div className="w-16 h-1 bg-orange-400 mx-auto mt-2"></div>
      </div>

      {/* Job Details and Form */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Left Side: Job Details */}
        <div>
          <p className="font-medium">Employer: Greekology</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Job details</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Location: Drayton Valley, ABT7A 1C4</li>
            <li>Salary: 30.00 hourly / 40 hours per Week</li>
            <li>Terms of employment: Permanent employment, Full time</li>
            <li>Start date: Starts as soon as possible</li>
            <li>Benefits: Health benefits, Other benefits</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Overview</h3>
          <p>Language: English</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Education</h3>
          <p>
            College, CEGEP or other non-university certificate or diploma from a program of 1 year to 2 years<br />
            or equivalent experience
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Experience</h3>
          <p>1 year to less than 2 years</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Responsibilities</h3>
          <p className="font-medium">Tasks</p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Consult with clients to develop and document Website requirements</li>
            <li>Maintain existing computer programs by making modifications as required</li>
            <li>Create and optimize content for Website using graphics, animation, and other software</li>
            <li>Assist in the development of logical and physical specifications</li>
            <li>Lead and coordinate teams to develop Website content, capacity and interactivity</li>
            <li>Plan, design, write, modify, integrate and test Website-related code</li>
          </ul>
        </div>

        {/* Right Column: Application Form */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Apply Now</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <div className="text-sm text-orange-500 cursor-pointer">📎 Attach Resume</div>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md w-full mt-4"
            >
              SUBMIT APPLICATION
            </button>
          </form>

          <p className="text-xs text-gray-400 mt-4 text-center">
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Jobseekers;