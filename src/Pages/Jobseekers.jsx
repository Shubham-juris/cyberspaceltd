import React from "react";
import Write from "../assets/Jobs/write.jpg";

const jobs = [
  {
    employer: "Walsh Ken Immigration",
    location: "Edmonton, AB T5J 3N4",
    salary: "28.00 hourly / 40 hours per Week",
    terms: "Permanent employment, Full time",
    startDate: "Starts as soon as possible",
    benefits: "Health, Dental",
    education: "Diploma or certificate (1 to 2 years) or equivalent experience",
    experience: "1 year to less than 2 years",
    tasks: [
      "Organize documentation and internal communications",
      "Manage scheduling and correspondence for immigration files",
      "Prepare and file client applications electronically",
      "Maintain confidential records",
    ],
  },
  {
    employer: "Office Based Jobs",
    location: "Calgary, AB T2P 3H7",
    salary: "27.00 hourly / 40 hours per Week",
    terms: "Permanent employment, Full time",
    startDate: "Immediately",
    benefits: "Vision, Dental",
    education: "Certificate or diploma (1 to 2 years)",
    experience: "1 year minimum",
    tasks: [
      "Coordinate office activities and operations",
      "Prepare reports and meeting notes",
      "Order office supplies and manage inventory",
      "Answer phones and direct calls",
    ],
  },
  {
    employer: "Shabri Gardens Bistro",
    location: "Edmonton, AB T6E 2E8",
    salary: "18.50 hourly / 40 hours per Week",
    terms: "Permanent employment, Full time",
    startDate: "As soon as possible",
    benefits: "Meal discounts",
    education: "High school or equivalent",
    experience: "1 to 2 years",
    tasks: [
      "Take food and beverage orders",
      "Serve customers in a fast-paced environment",
      "Maintain cleanliness of work areas",
      "Assist with kitchen tasks as needed",
    ],
  },
  {
    employer: "Cyberspace Inc.",
    location: "Calgary, AB T3N 1L5",
    salary: "32.00 hourly / 40 hours per Week",
    terms: "Permanent employment, Full time",
    startDate: "Immediately",
    benefits: "Health, Vision",
    education: "IT diploma or equivalent",
    experience: "1-2 years",
    tasks: [
      "Maintain and update company website",
      "Develop new features using JavaScript and React",
      "Fix bugs and optimize performance",
      "Collaborate with design and marketing teams",
    ],
  },
  {
    employer: "Tangy Twisters",
    location: "Edmonton, AB T5K 1N6",
    salary: "20.00 hourly / 35 hours per Week",
    terms: "Permanent employment, Part time",
    startDate: "Flexible",
    benefits: "Discount meals",
    education: "Some secondary school",
    experience: "6 months to 1 year",
    tasks: [
      "Prepare fruit-based desserts and smoothies",
      "Ensure cleanliness and safety in food handling",
      "Take customer orders and handle POS",
      "Stock supplies and rotate inventory",
    ],
  },
  {
    employer: "Easy Tax Bookkeeping",
    location: "Calgary, AB T2A 0A1",
    salary: "29.00 hourly / 40 hours per Week",
    terms: "Permanent employment, Full time",
    startDate: "Next month",
    benefits: "Health, RRSP match",
    education: "Accounting diploma",
    experience: "1 year",
    tasks: [
      "Prepare financial statements and reports",
      "File business and personal taxes",
      "Reconcile bank statements",
      "Use accounting software like QuickBooks",
    ],
  },
  {
    employer: "AMR Enterprises",
    location: "Edmonton, AB T6B 2X4",
    salary: "25.00 hourly / 40 hours per Week",
    terms: "Permanent employment, Full time",
    startDate: "Next week",
    benefits: "Dental, Vision",
    education: "College diploma",
    experience: "1-2 years",
    tasks: [
      "Handle administrative work for logistics",
      "Create shipment labels and documents",
      "Liaise with transport companies",
      "Track packages and deliveries",
    ],
  },
  {
    employer: "Office Based Jobs",
    location: "Edmonton, AB T5H 3V9",
    salary: "26.00 hourly / 40 hours per Week",
    terms: "Permanent employment, Full time",
    startDate: "Immediately",
    benefits: "Health benefits",
    education: "Certificate program",
    experience: "1 year",
    tasks: [
      "Answer and forward phone calls",
      "Greet clients and visitors",
      "Manage email inquiries",
      "Support HR team with documentation",
    ],
  },
  {
    employer: "Cyberspace Inc.",
    location: "Edmonton, AB T6G 2R3",
    salary: "35.00 hourly / 40 hours per Week",
    terms: "Full time, Permanent",
    startDate: "Start immediately",
    benefits: "Health, Stock options",
    education: "Degree or diploma in IT",
    experience: "2 years",
    tasks: [
      "Develop and maintain enterprise applications",
      "Conduct QA testing",
      "Collaborate with backend developers",
      "Perform security audits",
    ],
  },
  {
    employer: "Easy Tax Bookkeeping",
    location: "Edmonton, AB T5G 1X7",
    salary: "30.00 hourly / 40 hours per Week",
    terms: "Permanent employment, Full time",
    startDate: "As soon as available",
    benefits: "Dental, Extended health",
    education: "Bookkeeping certification",
    experience: "1-2 years",
    tasks: [
      "Manage daily bookkeeping for clients",
      "Enter data and reconcile ledgers",
      "Assist in payroll preparation",
      "Liaise with clients on tax matters",
    ],
  },
];

const Jobseekers = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-12 mt-16">
  
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-orange-600">
          Cyberspace-inc Job board
        </h1>
        <div className="w-20 h-1 bg-orange-400 mx-auto mt-2"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16">
        <img src={Write} alt="Writing" className="rounded-md shadow-lg" />
        <div className="max-w-lg text-center md:text-left">
          <p className="text-gray-700">
            Welcome to the Cyberspace-Inc Job Board, your gateway to exciting
            career opportunities in the thriving field of information
            technology. Whether you're a seasoned IT professional or a recent
            graduate eager to kick-start your career, our job board offers a
            diverse range of roles and opportunities to explore. With a
            commitment to connecting talented individuals with leading
            employers, we strive to make your job search experience seamless,
            efficient, and rewarding.
          </p>
        </div>
      </div>

      <div className="space-y-20">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto border-b pb-10"
          >
           
            <div>
              <p className="font-medium">Employer: {job.employer}</p>

              <h3 className="text-xl font-semibold mt-6 mb-2">Job details</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Location: {job.location}</li>
                <li>Salary: {job.salary}</li>
                <li>Terms of employment: {job.terms}</li>
                <li>Start date: {job.startDate}</li>
                <li>Benefits: {job.benefits}</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2">Overview</h3>
              <p>Language: English</p>

              <h3 className="text-xl font-semibold mt-6 mb-2">Education</h3>
              <p>{job.education}</p>

              <h3 className="text-xl font-semibold mt-6 mb-2">Experience</h3>
              <p>{job.experience}</p>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                Responsibilities
              </h3>
              <p className="font-medium">Tasks</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {job.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>

           
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
                <div className="text-sm text-orange-500 cursor-pointer">
                  📎 Attach Resume
                </div>

                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md w-full mt-4"
                >
                  SUBMIT APPLICATION
                </button>
              </form>

              <p className="text-xs text-gray-400 mt-4 text-center">
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobseekers;
