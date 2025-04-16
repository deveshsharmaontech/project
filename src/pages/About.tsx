import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-600 mb-8">About Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            We are dedicated to promoting sustainable waste management practices and environmental 
            consciousness in our community. Through education, action, and collaboration, we work 
            to create a cleaner, greener future for generations to come.
          </p>
          <p className="text-gray-700">
            Our initiatives focus on reducing waste, increasing recycling rates, and fostering 
            environmental stewardship among residents, businesses, and organizations.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80"
            alt="Team working on recycling initiatives"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Impact</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">5000+</div>
            <p className="text-gray-700">Community Members Engaged</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">20 Tons</div>
            <p className="text-gray-700">Waste Recycled Monthly</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
            <p className="text-gray-700">Local Partners</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
            <p className="text-gray-700">
              Promoting practices that meet present needs without compromising future generations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <p className="text-gray-700">
              Empowering communities with knowledge about environmental conservation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Community</h3>
            <p className="text-gray-700">
              Building strong partnerships and fostering collective environmental responsibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;