import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-green-700">Contact Us</h1>
      <p className="mb-6 text-gray-700">We'd love to hear from you. Fill out the form below and we'll get in touch!</p>
      <form className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border rounded-lg px-4 py-2 shadow-sm"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border rounded-lg px-4 py-2 shadow-sm"
          required
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="border rounded-lg px-4 py-2 shadow-sm"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white rounded-lg px-6 py-2 hover:bg-green-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;