import React from "react";
import View from "../dishplay/View";

const About = () => {
  return (
    <>
      <View>
        {/* Gradient Background */}
        <div className="bg-gradient-to-r from-[#D8B5FF] to-[#1EAE98] min-h-screen flex flex-col items-center justify-center p-8">
          {/* Content Section */}
          <div className="max-w-4xl bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
            {/* Image Section */}
            <img
              src="https://img.freepik.com/free-photo/top-view-italian-food-background_23-2148536768.jpg"
              alt="Cooking Image"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />

            {/* Text Section */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Welcome to Delicious Recipes!
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              At Delicious Recipes, we bring you a curated collection of recipes
              from around the world. Whether you’re looking for a quick snack,
              a hearty meal, or a decadent dessert, we’ve got you covered. Our
              mission is to make cooking easy, enjoyable, and delicious for
              everyone.
            </p>
            <p className="text-lg text-gray-700">
              Explore our vast collection of recipes, watch cooking tutorials,
              and start your culinary journey today. Happy cooking!
            </p>
          </div>
        </div>
      </View>
    </>
  );
};

export default About;
