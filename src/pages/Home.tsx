import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-green-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-6">ई-वेस्ट हटाओ, हरियाली बढ़ाओ</h1>
          <p className="text-xl mb-8 max-w-2xl">Join us in our mission to responsibly recycle electronic waste and create a sustainable future for generations to come.</p>
          <div className="flex space-x-4">
            <Link 
              to="/collection-points"
              className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold flex items-center"
            >
              <MapPin className="mr-2" /> Find a Drop-off Point
            </Link>
            <Link 
              to="/collection-points"
              className="bg-white text-green-800 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold flex items-center"
            >
              <Calendar className="mr-2" /> Schedule a Pick-Up
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Impact of E-Waste Recycling</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-green-50">
              <div className="text-4xl font-bold text-green-600 mb-2">50M+</div>
              <p className="text-gray-600">Tons of e-waste generated annually</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-green-50">
              <div className="text-4xl font-bold text-green-600 mb-2">17.4%</div>
              <p className="text-gray-600">Global recycling rate</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-green-50">
              <div className="text-4xl font-bold text-green-600 mb-2">80%</div>
              <p className="text-gray-600">Can be recycled properly</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Drop-Off / Pick-Up</h3>
              <p className="text-gray-600">Choose a convenient collection point or schedule a pick-up</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe Handling & Sorting</h3>
              <p className="text-gray-600">We carefully sort and handle your e-waste</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Recycling</h3>
              <p className="text-gray-600">Your e-waste is recycled following environmental standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8">Join our mission to create a cleaner, greener future.</p>
          <Link 
            to="/get-involved"
            className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50"
          >
            Get Involved <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;