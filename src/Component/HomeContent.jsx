import React from 'react'

function HomeContent() {
  return (
    <section 
      id="home" 
      className=" flex items-center justify-center py-16 px-4 transition-colors duration-300
        bg-gradient-to-b from-gray-50 to-gray-50 dark:from-gray-900 dark:to-gray-900"
    >
      <div className="container mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 
            text-gray-900 dark:text-white bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Welcome to Fawtech Electronics Trading
          </h2>
          <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
            Your premium destination for cutting-edge electronics and IT peripherals.
          </p>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="group relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg 
            dark:shadow-gray-700 transform transition-all duration-500 hover:scale-105 
            hover:shadow-2xl dark:hover:shadow-gray-600 overflow-hidden">
            {/* Card Background Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 
              dark:from-blue-900 dark:to-purple-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <h3 className="relative text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Vision
            </h3>
            <p className="relative text-gray-700 dark:text-gray-200 text-lg">
              To become a premium destination for Computer & IT Peripherals shopping, representing 
              international brands and empowering a smarter, more connected world through innovative, 
              reliable, and sustainable electronic solutions.
            </p>
          </div>

          <div className="group relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg 
            dark:shadow-gray-700 transform transition-all duration-500 hover:scale-105 
            hover:shadow-2xl dark:hover:shadow-gray-600 overflow-hidden">
            {/* Card Background Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 
              dark:from-blue-900 dark:to-purple-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <h3 className="relative text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Mission
            </h3>
            <p className="relative text-gray-700 dark:text-gray-200 text-lg">
              To create a world-class shopping destination, offering high-quality electronic products 
              that combine innovation, performance, and sustainability, enhancing the way people live, 
              work, and connect.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeContent