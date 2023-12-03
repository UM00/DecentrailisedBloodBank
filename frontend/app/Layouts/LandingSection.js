import React from 'react'

export default function LandingSection() {
  return (
    <>
      <div className="bg-gray-700 font-sans">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-red-500 pt-10">Welcome to our Blood Donation System</h1>
          <p className="text-lg text-white mb-8">
            Join us in saving lives. Your contribution matters!
          </p>
          <img
            src="https://source.unsplash.com/1600x900/?blood-donation" // Replace with your image URL
            alt="Blood Donation"
            className="rounded-lg shadow-lg w-full h-[500px] object-cover mb-8"
          />
        
        
        </div>
      </div>

      {/* New Section with Cards */}
      <div className="bg-gray-700 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-8">Why Donate Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white text-gray-800 rounded-lg p-6">
              <img
                src="https://source.unsplash.com/600x400/?medical,healthcare" // Replace with your image URL
                alt="Quality Service"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Quality Service</h3>
              <p className="text-gray-700">
                We provide high-quality service to ensure the safety and well-being of both donors and recipients.
              </p>
            </div>
            <div className="bg-white text-gray-800 rounded-lg p-6">
              <img
                src="https://source.unsplash.com/600x400/?community,volunteer" // Replace with your image URL
                alt="Community Impact"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Community Impact</h3>
              <p className="text-gray-700">
                Your contribution not only saves lives but also strengthens the sense of community and solidarity.
              </p>
            </div>
            <div className="bg-white text-gray-800 rounded-lg p-6">
              <img
                src="https://source.unsplash.com/600x400/?research,innovation" // Replace with your image URL
                alt="Innovation"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-700">
                We continually innovate to make the blood donation process more efficient and accessible for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
