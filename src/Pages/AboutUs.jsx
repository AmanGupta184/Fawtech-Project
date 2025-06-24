import Layout from '../Layout/Layout';
import React from 'react';
import Image from '../Assets/Images/Image1.jpg'

const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'CEO',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Bob Smith',
    role: ' CTO',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Charlie Lee',
    role: 'Lead Engineer',
    image: 'https://via.placeholder.com/150',
  },
];

function AboutUs() {
  return (
    <Layout>
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      {/* Header */}
      <header className="text-center mb-12">
      {/* About Fawtech */}
        <h2 className="text-3xl font-bold text-center mt-10 mb-8 text-gray-800 dark:text-gray-600">About Fawtech</h2>
          <p className="mb-4 text-gray-800 dark:text-gray-600">
            Founded in 2023, Fawtech Electronics Trading L.L.C is a Dubai-based electronics company specializing in gaming products, IT peripherals, graphics cards, memory cards, tablets, and wearable devices.
          </p>
          <p className="mb-4 text-gray-800 dark:text-gray-600">
            Strategically located in Dubai, surrounded by international banks and hotels, Fawtech leverages its position in DAFZA and JAFZA for efficient global distribution. Our worldwide customer base reflects our commitment to delivering feature-rich, professional products at competitive prices.
          </p>
          <p className="text-gray-800 dark:text-gray-600">
            We aim to provide the "most out of the products for the best prices," ensuring innovation, performance, and sustainability in every solution we offer.
          </p>
      </header>

      {/* About Section */}
      <section className="grid md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At ElectroTech, we are committed to providing cutting-edge electronic products that combine technology, quality, and affordability.
          </p>
          <p className="text-gray-700">
            Our goal is to innovate continuously and serve our customers with excellence.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={Image}
            alt="Electronics Lab"
            className="w-full h-44 rounded-lg shadow-lg"
          />
        </div>
      </section>


      {/* Team Members */}
      <section className="max-w-6xl mx-auto mb-12 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-800">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white p-4 md:p-6 rounded-lg shadow hover:shadow-xl transition duration-300 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Product Portfolio */}
      <section className="max-w-4xl mx-auto mb-12 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Our Product Portfolio</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-800 text-sm md:text-base">
          <li>
            <strong>Gaming Consoles:</strong> We offer a range of gaming consoles from top manufacturers, including PlayStation, Xbox, and Nintendo. Whether you're a casual gamer or a hardcore enthusiast, we've got the perfect console for you.
          </li>
          <li>
            <strong>Dyson Products:</strong> Our selection includes Dyson vacuums, air purifiers, and more. Known for innovative design and performance, these products make your life easier and more enjoyable.
          </li>
          <li>
            <strong>Graphic Cards:</strong> For gamers and professionals, our graphic cards from NVIDIA and AMD deliver outstanding visuals and performance.
          </li>
          <li>
            <strong>Apple Accessories:</strong> We carry a variety of Apple accessories, including cases, chargers, and more, designed to complement your Apple devices.
          </li>
          <li>
            <strong>JBL Speakers:</strong> Experience premium sound with our JBL speakers, suitable for music lovers and gamers alike.
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="bg-white-600 text-black py-8 px-4 md:py-12 md:px-8 text-center shadow-lg rounded-lg max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to Know More?</h2>
        <p className="mb-6">Contact us today and discover how we can help you upgrade your electronics experience.</p>
        <a
          href="/contact"
          className="bg-white text-black-600 font-semibold py-2 px-4 md:py-3 md:px-6 rounded hover:bg-gray-300 transition duration-300"
        >
          Contact Us
        </a>
      </section>
    </div>
    </Layout>
  );
}

export default AboutUs;