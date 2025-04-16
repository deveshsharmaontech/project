

function GetInvolved() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-green-700 mb-10 text-center">Get Involved</h1>

      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        At GreenTech Recycle, we believe everyone has a role to play in creating a sustainable future. Whether you have time, resources, or skills to share, there's a place for you in our mission. Explore the ways you can get involved below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Volunteer Section */}
        <div className="bg-green-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Volunteer</h2>
          <p className="text-gray-700 mb-4">
            Be the heart of our operations. Help us collect, sort, and educate communities about recycling. We offer regular clean-up events, recycling drives, and workshops.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Sign Up to Volunteer
          </button>
        </div>

        {/* Donate Section */}
        <div className="bg-green-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Donate</h2>
          <p className="text-gray-700 mb-4">
            Your contributions fund our recycling programs, educational campaigns, and sustainable innovation projects. Every dollar makes an impact.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Make a Donation
          </button>
        </div>

        {/* Partner Section */}
        <div className="bg-green-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Partner with Us</h2>
          <p className="text-gray-700 mb-4">
            Are you a business or organization looking to make a greener impact? Collaborate with us on sustainability initiatives, recycling programs, and corporate volunteering.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Become a Partner
          </button>
        </div>

        {/* Spread the Word Section */}
        <div className="bg-green-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Spread the Word</h2>
          <p className="text-gray-700 mb-4">
            Awareness is powerful. Share our mission on social media, host a local event, or simply tell a friend. Every voice counts.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Share Our Mission
          </button>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600">
          Questions? <a href="/contact" className="text-green-700 font-semibold hover:underline">Contact us</a> to learn more about how you can help.
        </p>
      </div>
    </div>
  );
}

export default GetInvolved;
