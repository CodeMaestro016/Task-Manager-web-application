import React from "react";

function HomePage() {
  const navigateToLogin = () => {
    console.log("Navigate to login page");
    // This would typically be: navigate("/login");
  };

  const navigateToRegister = () => {
    console.log("Navigate to register page");
    // This would typically be: navigate("/register");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 lg:p-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <span className="text-white font-bold text-xl">TaskMaster</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={navigateToLogin}
            className="px-6 py-3 text-white border-2 border-white border-opacity-30 rounded-xl hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold"
          >
            Sign In
          </button>
          <button 
            onClick={navigateToRegister}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">✨ New: AI-Powered Task Management</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
            Organize Your
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tasks Like a Pro
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Take control of your productivity with our intelligent task management system. 
            Prioritize, organize, and achieve your goals effortlessly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button 
              onClick={navigateToLogin}
              className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 font-bold text-lg"
            >
              🚀 Start Managing Tasks
            </button>
            <button className="w-full sm:w-auto px-12 py-5 bg-white bg-opacity-10 backdrop-blur-lg border-2 border-white border-opacity-30 text-white rounded-2xl hover:bg-opacity-20 transition-all duration-300 font-bold text-lg">
              📺 Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-300">Tasks Completed</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">
            Why Choose TaskMaster?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-3xl p-8 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300">Experience blazing-fast performance with our optimized task management system.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-3xl p-8 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Smart Prioritization</h3>
              <p className="text-gray-300">AI-powered algorithms help you focus on what matters most for maximum productivity.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-3xl p-8 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Advanced Analytics</h3>
              <p className="text-gray-300">Get detailed insights into your productivity patterns and optimize your workflow.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-3xl p-8 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Secure & Private</h3>
              <p className="text-gray-300">Your data is encrypted and secure with enterprise-grade security measures.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-3xl p-8 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cross-Platform</h3>
              <p className="text-gray-300">Access your tasks anywhere, anytime on desktop, mobile, and tablet devices.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-3xl p-8 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Team Collaboration</h3>
              <p className="text-gray-300">Work seamlessly with your team using real-time collaboration features.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Productivity?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of professionals who've revolutionized their task management
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={navigateToLogin}
              className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 font-bold text-lg"
            >
              🎯 Get Started Now
            </button>
            <button 
              onClick={navigateToRegister}
              className="w-full sm:w-auto px-12 py-5 bg-white bg-opacity-10 backdrop-blur-lg border-2 border-white border-opacity-30 text-white rounded-2xl hover:bg-opacity-20 transition-all duration-300 font-bold text-lg"
            >
              📝 Create Account
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white border-opacity-20 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-white font-bold text-xl">TaskMaster</span>
            </div>
            
            <div className="flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Terms</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Support</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white border-opacity-10 text-center">
            <p className="text-gray-400">© 2025 TaskMaster. All rights reserved. Built with ❤️ for productivity.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;