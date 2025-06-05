import React from "react";

export function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">CONTACT US</h1>
      <div className="bg-white shadow-xl rounded-lg w-full max-w-4xl flex flex-col md:flex-row">
        {/* Form Section */}
        <div className="p-6 flex-1">
          <form className="flex flex-col space-y-4">
            <label className="block">
              <span className="text-gray-700">Name</span>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-pink-300"
                placeholder="Your Name"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Email</span>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-pink-300"
                placeholder="Your Email"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Your Message</span>
              <textarea
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-pink-300"
                placeholder="Your Message"
                rows={5}
              ></textarea>
            </label>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-md shadow hover:bg-pink-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="flex-1 relative">
          <iframe
            title="Pulchowk Map"
            src="https://www.google.com/maps/embed/v1/place?q=Pulchowk+Lalitpur+Nepal&key=YOUR_GOOGLE_MAPS_API_KEY"
            className="w-full h-full border-none rounded-r-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
