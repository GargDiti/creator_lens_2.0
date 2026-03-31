import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-transparent px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-lg font-bold">C</span>
            </div>
            <span className="text-lg font-semibold text-gray-800">CreatorLens</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">Dashboard</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">Creators</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">Reports</a>
          </div>

          {/* Right Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">Help</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">About Us</a>
            <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">Sign In</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('/background.png')",
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center px-8">
          <div className="max-w-3xl">
            {/* Hero Heading */}
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Detect Fake Influencers Instantly
            </h1>

            {/* Hero Description */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl">
              <span className="font-semibold">CreatorLens</span> is an analytics platform that helps brands and creators detect fake followers, measure real engagement, and discover trustworthy influencers.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">
                Get Started
              </button>
              <button className="px-8 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium rounded-lg transition">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Platform Features
          </h2>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-purple-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Fake Follower Detection
              </h3>
              <p className="text-sm text-gray-600">
                Identify suspicious or inactive followers using AI-powered analytics.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-purple-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Engagement Analytics
              </h3>
              <p className="text-sm text-gray-600">
                Measure real engagement rates including likes, comments, and audience interests.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-purple-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Influencer Authenticity Score
              </h3>
              <p className="text-sm text-gray-600">
                Calculate trust score that helps brands evaluate creators' reliability across platforms.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-purple-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Creator Comparison
              </h3>
              <p className="text-sm text-gray-600">
                Compare multiple creators to discover the most effective influencer partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
