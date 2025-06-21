import React from 'react'

function HomeContent() {
  return (
    <>
    <section id="home" className="pt-10 pb-20 bg-gray-100 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Fawtech Electronics Trading</h2>
          <p className="text-lg mb-6">Your premium destination for cutting-edge electronics and IT peripherals.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p>To become a premium destination for Computer & IT Peripherals shopping, representing international brands and empowering a smarter, more connected world through innovative, reliable, and sustainable electronic solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p>To create a world-class shopping destination, offering high-quality electronic products that combine innovation, performance, and sustainability, enhancing the way people live, work, and connect.</p>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default HomeContent
