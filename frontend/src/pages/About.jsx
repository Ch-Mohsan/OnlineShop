import React from 'react';
import { FaTruck, FaHeadset, FaShieldAlt, FaExchangeAlt } from 'react-icons/fa';

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted destination for quality fashion and exceptional shopping experience
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/src/assets/frontend_images/about_img.png" 
                alt="Our Story" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                Founded in 2024, we started with a simple mission: to provide high-quality fashion products 
                that make our customers feel confident and stylish. What began as a small online store has 
                grown into a trusted destination for fashion enthusiasts worldwide.
              </p>
              <p className="text-gray-600">
                Our commitment to quality, customer satisfaction, and sustainable practices has helped us 
                build a loyal community of customers who share our passion for fashion and excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-gray-800 text-4xl mb-4 flex justify-center">
                <FaTruck />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick and reliable shipping to your doorstep
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-gray-800 text-4xl mb-4 flex justify-center">
                <FaHeadset />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Always here to help you with any questions
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-gray-800 text-4xl mb-4 flex justify-center">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Shopping</h3>
              <p className="text-gray-600">
                Safe and protected payment methods
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-gray-800 text-4xl mb-4 flex justify-center">
                <FaExchangeAlt />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Returns</h3>
              <p className="text-gray-600">
                Hassle-free return and exchange policy
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/src/assets/frontend_images/team1.png" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">John Doe</h3>
                <p className="text-gray-600 mb-2">Founder & CEO</p>
                <p className="text-gray-500 text-sm">
                  Passionate about fashion and customer satisfaction
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/src/assets/frontend_images/team2.png" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Jane Smith</h3>
                <p className="text-gray-600 mb-2">Creative Director</p>
                <p className="text-gray-500 text-sm">
                  Bringing innovative designs to life
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/src/assets/frontend_images/team3.png" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mike Johnson</h3>
                <p className="text-gray-600 mb-2">Customer Service Lead</p>
                <p className="text-gray-500 text-sm">
                  Ensuring the best shopping experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gray-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            To provide our customers with high-quality fashion products while delivering exceptional 
            service and maintaining sustainable business practices. We strive to make fashion 
            accessible to everyone while ensuring the highest standards of quality and customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;