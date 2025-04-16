import React from 'react';
import { Calendar } from 'lucide-react';

function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Community Recycling Drive",
      date: "March 15, 2024",
      time: "9:00 AM - 2:00 PM",
      location: "City Central Park",
      description: "Join us for our monthly community recycling drive. Bring your recyclables and learn about proper waste sorting."
    },
    {
      id: 2,
      title: "Environmental Workshop",
      date: "March 22, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Community Center",
      description: "Educational workshop on sustainable living and recycling practices for all ages."
    },
    {
      id: 3,
      title: "Beach Cleanup Day",
      date: "April 5, 2024",
      time: "8:00 AM - 12:00 PM",
      location: "Coastal Beach",
      description: "Help us keep our beaches clean! Bring gloves and join our community cleanup effort."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-600 mb-4 flex items-center justify-center gap-3">
          <Calendar className="h-8 w-8" />
          Upcoming Events
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join us in making our community cleaner and greener. Check out our upcoming events and be part of the change!
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date} at {event.time}</span>
                </p>
                <p className="font-medium">📍 {event.location}</p>
                <p className="mt-4 text-gray-700">{event.description}</p>
              </div>
              <button className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Don't see an event that fits your schedule?</p>
        <button className="bg-green-100 text-green-700 py-2 px-6 rounded-md hover:bg-green-200 transition-colors duration-300">
          Suggest an Event
        </button>
      </div>
    </div>
  );
}

export default Events;