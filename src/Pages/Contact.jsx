import React from 'react'
import Layout from '../Layout/Layout'
import Shopimg from '../Assets/Images/ShopImage.jpg'

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
            src={Shopimg}
            alt="Office"
            className="w-full h-60 object-cover rounded"
          />
        </div>

        {/* Address & Phone Info */}

        <div className="grid md:grid-cols-2 gap-8 mb-6">
        
          {/* Address */}
          <div className="border p-4 rounded shadow">
            
            <h3 className="font-semibold mb-2">Address & Phone</h3>
            <p>
              <strong>Store Address:</strong> 
               <p className='pl-20'>Office No:113, ELHAM MOHAMED AMIN MIRZA,</p>
               <p className='pl-20'>22B st, ABU HAIL DUBAI, U.A.E</p>
            </p>
            <p>
              <strong>Phone:</strong>
               <p className='pl-16'>+91-7011805001</p>
            </p>
            
          </div>
          

            {/* Map */}
        <div className="mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.4368142349085!2d55.3170987751661!3d25.272084277662934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434ba433d3e1%3A0x791c2dfb45ae055f!2s22B%20St%20-%20Dubai%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sin!4v1750517178870!5m2!1sen!2sin"
            width="100%"
            height="350"
            className="rounded shadow"
            allowFullScreen
            loading="lazy"
            title="Google Map"
          ></iframe>
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
