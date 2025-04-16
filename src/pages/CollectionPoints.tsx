import React from 'react';
import { MapPin } from 'lucide-react';

const CollectionPoints = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Recycling Collection Points</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <MapPin className="w-6 h-6 text-green-600 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800">Find Your Nearest Collection Point</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Locate convenient recycling collection points in your area. Our network of collection points makes it easy for you to responsibly dispose of recyclable materials.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Central Community Center",
                address: "123 Main Street",
                hours: "Mon-Sat: 8AM-6PM",
                materials: ["Paper", "Plastic", "Glass", "Metal"]
              },
              {
                name: "Riverside Recycling Hub",
                address: "456 River Road",
                hours: "Mon-Sun: 24/7",
                materials: ["Electronics", "Batteries", "Light Bulbs"]
              }
            ].map((point, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-xl font-semibold text-green-700 mb-2">{point.name}</h3>
                <p className="text-gray-600 mb-1">{point.address}</p>
                <p className="text-gray-600 mb-2">{point.hours}</p>
                <div className="flex flex-wrap gap-2">
                  {point.materials.map((material, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Want to Register as a Collection Point?</h2>
          <p className="text-gray-700 mb-4">
            If you're interested in becoming an official recycling collection point, we'd love to hear from you. Join our network and help make recycling more accessible to everyone.
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Register Your Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionPoints;