import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/about-logo.png"; // Replace with your logo file

function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-6">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <img src={logo} alt="Logo" className="h-20 w-auto mb-4" />
          <h1 className="text-4xl font-semibold text-center text-gray-800 dark:text-white">
            About Us
          </h1>
        </div>

        {/* Description Section */}
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-8 w-full md:w-3/4 lg:w-1/2">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Welcome to our movie browsing platform! Our goal is to provide a
            seamless and intuitive way for movie enthusiasts to explore,
            discover, and dive deeper into their favorite films. Whether you're
            looking for the latest releases or classic hits, we've got you
            covered.
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col items-center mb-6 w-full md:w-3/4 lg:w-1/2">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Stay Updated!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            Subscribe to our newsletter for the latest updates, news, and movie
            releases.
          </p>
          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <Link
            to="#"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500"
          >
            Facebook
          </Link>
          <Link
            to="#"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500"
          >
            Twitter
          </Link>
          <Link
            to="#"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500"
          >
            Instagram
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
