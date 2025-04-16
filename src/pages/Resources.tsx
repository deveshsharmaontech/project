

function Resources() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-green-700 mb-10 text-center">Resources</h1>

      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        Empower yourself with knowledge. From how-to guides to educational tools, GreenTech Recycle offers a variety of resources to help you live a more sustainable life and support a greener planet.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Recycling Guides */}
        <div className="bg-green-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Recycling Guides</h2>
          <p className="text-gray-700 mb-4">
            Learn how to properly recycle plastics, electronics, paper, and more. Our step-by-step guides help you make informed decisions and avoid contamination.
          </p>
          <a href="/downloads/recycling-guide.pdf" className="text-green-700 font-semibold hover:underline">
            Download PDF Guide
          </a>
        </div>

        {/* Local Recycling Centers */}
        <div className="bg-green-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Find a Recycling Center</h2>
          <p className="text-gray-700 mb-4">
            Use our interactive map or directory to find the nearest recycling drop-off locations in your area.
          </p>
          <a href="/recycling-centers" className="text-green-700 font-semibold hover:underline">
            View Map
          </a>
        </div>

        {/* Educational Materials */}
        <div className="bg-green-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Educational Materials</h2>
          <p className="text-gray-700 mb-4">
            Great for teachers, parents, and community leaders! Access printable lesson plans, activity sheets, and presentations about sustainability and recycling.
          </p>
          <a href="/downloads/education-pack.zip" className="text-green-700 font-semibold hover:underline">
            Download Education Pack
          </a>
        </div>

        {/* Eco-Friendly Living Tips */}
        <div className="bg-green-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Eco-Friendly Living</h2>
          <p className="text-gray-700 mb-4">
            Small changes make a big impact. Discover daily habits, product swaps, and lifestyle choices that reduce your carbon footprint.
          </p>
          <a href="/blog/eco-tips" className="text-green-700 font-semibold hover:underline">
            Read Tips on Our Blog
          </a>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600">
          Looking for something specific? <a href="/contact" className="text-green-700 font-semibold hover:underline">Contact us</a> and we'll help you find the right resource.
        </p>
      </div>
    </div>
  );
}

export default Resources;