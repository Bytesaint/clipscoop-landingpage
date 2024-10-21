import React, { useState } from 'react';
import { Download, Lock, Zap, Globe, ChevronDown, ChevronUp, Twitter, Github, Shield } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('');

  const toggleTab = (tab: string) => {
    setActiveTab(activeTab === tab ? '' : tab);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-black bg-opacity-90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">ClipScoop</div>
          <div className="space-x-4">
            <a href="#home" className="hover:text-red-600 transition-colors">Home</a>
            <a href="#features" className="hover:text-red-600 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-red-600 transition-colors">How It Works</a>
            <a href="#faq" className="hover:text-red-600 transition-colors">FAQ</a>
            <a href="#download" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">Download Now</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">ClipScoop: Download Adult Videos Seamlessly</h1>
          <p className="text-xl mb-8">The most efficient and discreet way to download videos from your favorite adult sites.</p>
          <a href="https://drive.google.com/file/d/1pPcazAYKEUNX5PLF-_z4EPHG8qVJz7yK/view?usp=drive_link" className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-transform hover:scale-105">
            Download Now
          </a>
          <p className="mt-4 text-gray-400">For content enthusiasts who value privacy and speed.</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <Lock className="mx-auto mb-4 text-red-600" size={48} />
              <h3 className="text-xl font-semibold mb-2">Private & Discreet</h3>
              <p>No data tracking, ensuring your downloads remain private.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <Zap className="mx-auto mb-4 text-red-600" size={48} />
              <h3 className="text-xl font-semibold mb-2">High-Speed Downloads</h3>
              <p>Get your videos faster with no interruptions.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <Globe className="mx-auto mb-4 text-red-600" size={48} />
              <h3 className="text-xl font-semibold mb-2">Multi-Site Compatibility</h3>
              <p>Works seamlessly across various adult video platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Install ClipScoop</h3>
              <p>Click on the download button and install the extension</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse Your Favorite Sites</h3>
              <p>Visit your preferred adult content platforms</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Download with One Click</h3>
              <p>Click the ClipScoop icon to instantly save videos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security and Privacy Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Security & Privacy</h2>
          <p className="text-xl mb-8">Your privacy is our top priority</p>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center">
              <Lock className="mr-2 text-red-600" />
              <span>No personal data tracked</span>
            </div>
            <div className="flex items-center">
              <Shield className="mr-2 text-red-600" />
              <span>100% secure downloads</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <p className="text-lg italic mb-4">"ClipScoop made downloading videos fast and easy, and I love how private it is!"</p>
              <p className="font-semibold">— Early User</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto">
            {['Is ClipScoop safe to use?', 'Does ClipScoop work with all adult video sites?', 'Can I download multiple videos at once?'].map((question, index) => (
              <div key={index} className="mb-4">
                <button
                  className="flex justify-between items-center w-full p-4 bg-gray-800 rounded-lg focus:outline-none"
                  onClick={() => toggleTab(`faq-${index}`)}
                >
                  <span className="font-semibold">{question}</span>
                  {activeTab === `faq-${index}` ? <ChevronUp /> : <ChevronDown />}
                </button>
                {activeTab === `faq-${index}` && (
                  <div className="p-4 bg-gray-700 rounded-b-lg">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="text-gray-400 hover:text-white mr-4">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white mr-4">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Contact</a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;