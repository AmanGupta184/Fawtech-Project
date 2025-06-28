import React from 'react'

function HomeContent() {
  return (
    <section
      id="home"
      className="flex items-center justify-center py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-950 to-gray-950 dark:from-blue-300 dark:to-purple-300">
            Welcome to Fawtech Electronics Trading
          </h2>
          <p className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your trusted source for cutting-edge electronics and IT peripherals, delivering innovation and quality.
          </p>
        </div>

        {/* Vision Card */}
        <div className="max-w-3xl mx-auto">
          <div className="group relative bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl dark:shadow-gray-700 transition-all duration-500 hover:scale-102 hover:shadow-2xl overflow-hidden">
            {/* Card Background Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            <h3 className="relative text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Vision
            </h3>
            <p className="relative text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              To lead as the premier destination for computer and IT peripherals, representing top international brands and driving a smarter, connected world through innovative and sustainable solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeContent