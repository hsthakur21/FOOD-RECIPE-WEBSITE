import React from "react";
import View from "../dishplay/View";

const Contact = () => {
  return (
    <View>
      {/* Contact Section */}
      <div className="bg-gradient-to-r from-[#D8B5FF] to-[#1EAE98] min-h-screen flex flex-col items-center justify-center p-8">
        <div className="max-w-3xl bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
          {/* Contact Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h1>

          {/* Phone Number */}
          <p className="text-lg text-gray-700 mb-4">
            <strong>Phone:</strong> <a href="tel:9548868770">9548868770</a>
          </p>

          {/* Email Address */}
          <p className="text-lg text-gray-700 mb-4">
            <strong>Email:</strong>{" "}
            <a href="mailto:himanshussthakur2002@gmail.com">
              himanshussthakur2002@gmail.com
            </a>
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/himanshu-thakur-8754a418a"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white p-2 rounded-lg shadow hover:bg-blue-600 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/mr__thakurshab?igsh=NzNiNXRld3p6Zjlp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white p-2 rounded-lg shadow hover:bg-pink-600 transition"
            >
              Instagram
            </a>
          </div>

          {/* Message Section */}
          <p className="mt-8 text-lg text-gray-600">
            I’d love to hear from you! Whether you have a question or just want
            to connect, feel free to reach out.
          </p>
        </div>
      </div>
    </View>
  );
};

export default Contact;
