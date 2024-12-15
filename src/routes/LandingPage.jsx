import React, { useState } from "react";
import Calculator from "../components/Calculator";  // Importing the Calculator component

const LandingPage = () => {
  // State to control mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State to control the visibility of the calculator
  const [isCalculatorVisible, setIsCalculatorVisible] = useState(false);

  // State to control the visibility of the signup modal
  const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);

  // Toggles the visibility of the mobile menu
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Toggles the visibility of the calculator
  const toggleCalculatorVisibility = () => setIsCalculatorVisible(!isCalculatorVisible);

  // Closes the calculator modal
  const closeCalculator = () => setIsCalculatorVisible(false);

  // Opens the signup modal
  const openSignUpModal = () => setIsSignUpModalVisible(true);

  // Closes the signup modal
  const closeSignUpModal = () => setIsSignUpModalVisible(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 via-purple-300 to-blue-300">
      {/* Navbar */}
      <nav className="bg-white shadow-md rounded-b-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-extrabold text-purple-700">LiSTiFY</div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-purple-700 text-3xl">
              {isMobileMenuOpen ? "X" : "☰"}  {/* Toggle between open and close */}
            </button>
          </div>

          {/* Navbar Links - Desktop */}
          <div className="hidden md:flex space-x-6">
            <a href="#Home" className="text-purple-700 font-medium hover:text-pink-500">Home</a>
            <a href="#MyList" className="text-purple-700 font-medium hover:text-pink-500">MyList</a>
            
            {/* Button to toggle Calculator visibility */}
            <button 
              onClick={toggleCalculatorVisibility} 
              className="text-purple-700 font-medium hover:text-pink-500"
            >
              Calculator
            </button>

            <a href="#about" className="text-purple-700 font-medium hover:text-pink-500">About</a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Shown when 'isMobileMenuOpen' is true */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-4">
          <a href="#Home" className="block text-purple-700 font-medium hover:text-pink-500">Home</a>
          <a href="#MyList" className="block text-purple-700 font-medium hover:text-pink-500">MyList</a>
          <button 
            onClick={toggleCalculatorVisibility} 
            className="block text-purple-700 font-medium hover:text-pink-500"
          >
            Calculator
          </button>
          <a href="#about" className="block text-purple-700 font-medium hover:text-pink-500">About</a>
        </div>
      )}

      {/* Hero Section */}
      <header className="text-center py-20">
        <h1 className="text-5xl font-extrabold text-purple-900">
          Welcome to <span className="text-pink-600">LiSTiFY!</span>
        </h1>
        <p className="mt-4 text-lg text-purple-800">Your partner for organizing shopping lists and more!</p>
        
        {/* 'Get Started' button triggers the signup modal */}
        <button 
          onClick={openSignUpModal} 
          className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-pink-500 hover:shadow-xl"
        >
          Get Started
        </button>
      </header>

      {/* Sign Up Modal */}
      {isSignUpModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-extrabold text-purple-800 mb-8">Sign Up</h2>
            <form>
              <div className="form-group mb-4">
                <label htmlFor="signup-email" className="text-purple-700">Email:</label>
                <input type="email" id="signup-email" placeholder="Enter your email" className="border p-2 rounded w-full" />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="signup-password" className="text-purple-700">Password:</label>
                <input type="password" id="signup-password" placeholder="Enter your password" className="border p-2 rounded w-full" />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="confirm-password" className="text-purple-700">Confirm Password:</label>
                <input type="password" id="confirm-password" placeholder="Confirm your password" className="border p-2 rounded w-full" />
              </div>
              <button type="submit" className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-pink-500 hover:shadow-xl">
                Sign Up
              </button>
            </form>
            <div className="mt-6 text-center">
              <button 
                onClick={closeSignUpModal} 
                className="text-purple-700 hover:text-pink-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Conditionally render the Calculator */}
      {isCalculatorVisible && <Calculator onClose={closeCalculator} />}

      {/* Features Section */}
      <section id="Home" className="py-16 bg-white rounded-t-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-purple-800 mb-8">Why Choose LiSTiFY?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-pink-200 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-900 mb-2">Calculate Your Budget Instantly</h3>
              <p>Plan your spending effortlessly and stay stress-free!</p>
            </div>
            <div className="p-6 bg-purple-200 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-900 mb-2">Share Easily</h3>
              <p>Share your lists with family and friends instantly.</p>
            </div>
            <div className="p-6 bg-blue-200 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-900 mb-2">Stay Organized</h3>
              <p>Keep track of everything you need in one place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Section */}
      <section id="fun" className="py-16 bg-gradient-to-r from-purple-300 to-blue-300">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-8">Make Shopping Fun!</h2>
          <p className="text-lg text-white">With LiSTiFY, shopping feels less like a chore and more like an adventure.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2024 LiSTiFY. Making your shopping joyful!</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
