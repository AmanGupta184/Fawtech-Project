import React from 'react'

function HomeContent() {
  return (
    <>
    <section id="home" className="bg-gray-50 dark:bg-gray-950 pt-10 pb-10 text-gray-800 dark:text-gray-100 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Welcome to Fawtech Electronics Trading</h2>
          <p className="text-lg font-semibold mb-6 text-gray-800 dark:text-gray-100">Your premium destination for cutting-edge electronics and IT peripherals.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg dark:shadow-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Our Vision</h3>
              <p className="text-gray-800 font-semibold dark:text-gray-100">To become a premium destination for Computer & IT Peripherals shopping, representing international brands and empowering a smarter, more connected world through innovative, reliable, and sustainable electronic solutions.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg dark:shadow-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Our Mission</h3>
              <p className="text-gray-800 font-semibold dark:text-gray-100">To create a world-class shopping destination, offering high-quality electronic products that combine innovation, performance, and sustainability, enhancing the way people live, work, and connect.</p>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default HomeContent
