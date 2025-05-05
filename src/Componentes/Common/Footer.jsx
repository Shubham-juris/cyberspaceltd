import React from 'react'

function Footer() {
  return (
    <>
   <footer className="bg-black text-white py-6 px-4">
  <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-4">
    <p className="text-sm">
      &copy; 2024 ITJobBoard — All Rights Reserved
    </p>
    <div className="text-sm space-y-1">
      <p><strong>Cyberspace-Inc</strong></p>
      <p>Address: 2115 27 Ave BAY 1, Suite 201, Calgary, AB, Alberta, Canada</p>
      <p>Phone: 1-403-971-7174</p>
      <p>Email: <a href="mailto:info@cyberace.ca" className="underline">info@cyberace.ca</a></p>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer