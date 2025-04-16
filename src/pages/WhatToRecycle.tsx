import React from 'react';
import { Smartphone, Laptop, Battery, Cable, Monitor, Check, X } from 'lucide-react';

const WhatToRecycle = () => {
  const categories = [
    {
      name: 'Mobile Phones',
      icon: Smartphone,
      description: 'Smartphones, feature phones, and accessories',
      examples: ['iPhones', 'Android phones', 'Old mobile phones', 'Phone chargers']
    },
    {
      name: 'Laptops & PCs',
      icon: Laptop,
      description: 'Computers, laptops, and their components',
      examples: ['Laptops', 'Desktop computers', 'Tablets', 'Computer peripherals']
    },
    {
      name: 'Batteries',
      icon: Battery,
      description: 'All types of batteries and power banks',
      examples: ['Lithium-ion batteries', 'Alkaline batteries', 'Power banks', 'UPS batteries']
    },
    {
      name: 'Cables & Chargers',
      icon: Cable,
      description: 'All types of electronic cables and charging devices',
      examples: ['USB cables', 'Power adapters', 'Extension cords', 'HDMI cables']
    },
    {
      name: 'TVs & Monitors',
      icon: Monitor,
      description: 'Display devices and entertainment systems',
      examples: ['LCD/LED TVs', 'Computer monitors', 'Digital photo frames', 'TV boxes']
    }
  ];

  const guidelines = {
    dos: [
      'Remove batteries from devices',
      'Wipe personal data from devices',
      'Package items securely',
      'Separate different types of e-waste',
      'Keep accessories with main devices'
    ],
    donts: [
      'Break or dismantle devices',
      'Mix with regular waste',
      'Expose to rain or moisture',
      'Leave data on devices',
      'Throw in regular trash bins'
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8">What You Can Recycle</h1>

      {/* Categories Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {categories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <category.icon className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-xl font-semibold">{category.name}</h2>
            </div>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <ul className="space-y-2">
              {category.examples.map((example, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  {example}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Guidelines Section */}
      <div className="bg-green-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-green-800 mb-6">Recycling Guidelines</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Do's */}
          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
              <Check className="w-6 h-6 mr-2" />
              Do's
            </h3>
            <ul className="space-y-3">
              {guidelines.dos.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Don'ts */}
          <div>
            <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center">
              <X className="w-6 h-6 mr-2" />
              Don'ts
            </h3>
            <ul className="space-y-3">
              {guidelines.donts.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <X className="w-5 h-5 text-red-500 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatToRecycle;