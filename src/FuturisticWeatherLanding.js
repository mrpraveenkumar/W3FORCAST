import React, { useEffect, useState } from 'react';
import { ChevronRight, Sun, CloudRain, Calendar, HelpCircle, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import screenshot1 from './images/Screenshot 2024-11-03 135839.png';
import screenshot2 from './images/Screenshot 2024-11-03 135911.png';
import screenshot3 from './images/Screenshot 2024-11-03 140339.png';
import screenshot4 from './images/Screenshot 2024-11-03 140417.png';
import screenshot5 from './images/Screenshot 2024-11-03 140523.png';

const FuturisticWeatherLanding = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      // Your interval logic here
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Sample screenshots data
  const screenshots = [
    { id: 1, src: screenshot1, alt: 'Weather Screenshot 1' },
    { id: 2, src: screenshot2, alt: 'Weather Screenshot 2' },
    { id: 3, src: screenshot3, alt: 'Weather Screenshot 3' },
    { id: 4, src: screenshot4, alt: 'Weather Screenshot 4' },
    { id: 5, src: screenshot5, alt: 'Weather Screenshot 5' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section with Gradient Background */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10" />

        {/* Hero Content */}
        <div className="container mx-auto px-6 py-24">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Weather Insights Powered by AI<span className="text-blue-500">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl">
              Get accurate forecasts, from 2-day to 5-day outlooks, and upcoming weather predictions powered by machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/weather-search" // Navigate to WeatherSearch
                className="px-8 py-4 bg-blue-500 rounded-full hover:bg-blue-600 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Check Weather
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                to="/about" // Navigate to the About page
                className="px-8 py-4 border border-white rounded-full hover:bg-white hover:text-black transition-all flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        </div>

        {/* Services Section */}
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Sun, title: "2-Day Forecast", description: "Accurate weather predictions for the next two days." },
              { icon: CloudRain, title: "5-Day Forecast", description: "Plan ahead with our reliable 5-day weather forecast." },
              { icon: Calendar, title: "ML Predictions", description: "Weather insights powered by machine learning." }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 text-center transform transition-all duration-1000"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <service.icon className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Weather Section */}
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold mb-8 text-center">Current Weather</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["New York", "London", "Tokyo"].map((city, index) => (
              <div
                key={index}
                className="bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 text-center transform transition-all duration-1000"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <MapPin className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{city}</h3>
                <p className="text-gray-300">18°C, Partly Cloudy</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold mb-8 text-center">Why Choose WeatherAI</h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Our cutting-edge technology leverages AI and big data to provide you with accurate, real-time weather forecasts that help you plan your day, week, and beyond.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              { question: "How accurate are the forecasts?", answer: "We use advanced AI models to ensure high accuracy for short-term forecasts." },
              { question: "What regions do you cover?", answer: "Our services cover over 150 countries worldwide." },
              { question: "How is machine learning used in forecasts?", answer: "ML helps analyze historical and real-time data to predict future patterns." }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <HelpCircle className="mr-2 w-5 h-5 text-blue-500" /> {faq.question}
                </h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Weather Screenshot Section */}
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold mb-8 text-center">Website Sample</h2>
          <div className="overflow-hidden relative">
            <div className="flex animate-scroll">
              {screenshots.map((screenshot) => (
                <div key={screenshot.id} className="flex-shrink-0 w-80 bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-lg p-4">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full h-auto rounded-md object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
          white-space: nowrap;
        }
      `}</style>

      </div>
    </div>
  );
};

export default FuturisticWeatherLanding;
