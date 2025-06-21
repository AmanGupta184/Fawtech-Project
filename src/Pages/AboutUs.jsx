import React from 'react'
import Layout from '../Layout/Layout'

function AboutUs() {
  return (
    <Layout>
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-3xl font-bold text-center mt-10 mb-8">About Fawtech</h2>
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">Founded in 2023, Fawtech Electronics Trading L.L.C is a Dubai-based electronics company specializing in gaming products, IT peripherals, graphics cards, memory cards, tablets, and wearable devices.</p>
            <p className="mb-4">Strategically located in Dubai, surrounded by international banks and hotels, Fawtech leverages its position in DAFZA and JAFZA for efficient global distribution. Our worldwide customer base reflects our commitment to delivering feature-rich, professional products at competitive prices.</p>
            <p>We aim to provide the "most out of the products for the best prices," ensuring innovation, performance, and sustainability in every solution we offer.</p>
          </div>
        </div>
    </Layout>
  )
}

export default AboutUs
