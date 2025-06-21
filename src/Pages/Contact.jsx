import React from 'react'
import Layout from '../Layout/Layout'

function Contact() {
  return (
    <Layout>
    <div className="flex flex-col min-h-screen font-sans">
      {/* Header */}
      <header className="bg-gray-100 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="https://via.placeholder.com/40" alt="Logo" className="h-10 w-10" />
          <h1 className="text-xl font-bold text-red-600">Fawtech Computers</h1>
        </div>
        <div className="flex space-x-4 items-center">
          <button className="text-gray-600 hover:text-red-600">Call Us +91-7011805001</button>
          {/* <button className="text-gray-600 hover:text-red-600">Shopping PAN India</button> */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center mb-4">Contact Us</h2>

        {/* Cover Image */}
        <div className="w-full mb-6">
          <img
            src="https://images.unsplash.com/photo-1508780709619-7897d6d17037"
            alt="Office"
            className="w-full h-60 object-cover rounded"
          />
        </div>

        {/* Address & Phone Info */}

        <div className="grid md:grid-cols-2 gap-8 mb-6">
          {/* Map */}
        <div className="mb-8">
          <iframe
            src="https://www.google.com/maps?q=Nehru%20Place%20New%20Delhi&output=embed"
            width="100%"
            height="300"
            className="rounded shadow"
            allowFullScreen
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

          {/* Address */}
          <div className="border p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Address & Phone</h3>
            <p>
              <strong>Store Address:</strong> 
              113, ELHAM MOHAMED AMIN MIRZA, ABU HAIL DUBAI, U.A.E
            </p>
            <p>
              <strong>Phone:</strong> +91-7011805001
            </p>
          </div>
          
          {/* Hours */}
          {/* <div className="border p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Hours</h3>
            <ul className="space-y-1">
              <li><strong>Monday:</strong> 11:00 a.m. - 7:00 p.m.</li>
              <li><strong>Tuesday:</strong> 11:00 a.m. - 7:00 p.m.</li>
              <li><strong>Wednesday:</strong> 11:00 a.m. - 7:00 p.m.</li>
              <li><strong>Thursday:</strong> 11:00 a.m. - 7:00 p.m.</li>
              <li><strong>Friday:</strong> 11:00 a.m. - 7:00 p.m.</li>
              <li><strong>Saturday:</strong> 11:00 a.m. - 7:00 p.m.</li>
              <li><strong>Sunday:</strong> Closed</li>
            </ul>
          </div> */}
        </div>

      </main>

      {/* Footer */}
      
    </div>
    </Layout>
  )
}

export default Contact
