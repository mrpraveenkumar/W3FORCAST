import React from 'react';
import { Shield, Zap, Globe } from 'lucide-react';

import Praveen from '../images/praveen.jpg'; 
import Jayesh from '../images/jayesh.jpg';
import Naman from '../images/naman.jpg'; 
import Paras from '../images/Paras.jpg'; // Updated import statement
// import Ujjwal from '../images/Screenshot 2024-11-05 205337.png';
// import arullaln from '../images/arullaan.jpg';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">

            {/* Hero Section */}
            <div className="relative py-24 px-6 text-center bg-gradient-to-r from-blue-600 to-purple-600">
                <h1 className="text-5xl md:text-7xl font-bold">Empowering Your Forecast</h1>
                <p className="text-xl md:text-2xl text-gray-300 mt-4 max-w-2xl mx-auto">
                    Shaping the future of weather forecasting with next-gen technology.
                </p>
            </div>

            {/* Our Mission Section */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                    Our mission is to make weather forecasting more accurate, reliable, and accessible through cutting-edge artificial intelligence and machine learning. WeatherAI is dedicated to helping you make informed decisions, no matter the conditions.
                </p>
            </section>

            {/* Technology Section */}
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-4xl font-bold text-center mb-10">Technology Behind the Forecasts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                            { icon: Globe, title: "Big Data", description: "Collecting data from satellites, sensors, and global weather stations." },
                            { icon: Zap, title: "AI-Powered Modeling", description: "Our AI models analyze patterns for high-accuracy predictions." },
                            { icon: Shield, title: "Military-Grade Security", description: "We prioritize user privacy and data security." }
                        ].map((tech, index) => (
                            <div
                                key={index}
                                className="p-0.5 rounded-2xl border border-gray-700 flex-1"
                            >
                                <div className="bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 transition-all duration-500 hover:scale-105 h-full flex flex-col items-center justify-center">
                                    <tech.icon className="w-12 h-12 text-blue-500 mb-4" />
                                    <h3 className="text-2xl font-bold mb-2 text-center">{tech.title}</h3>
                                    <p className="text-gray-300 text-center">{tech.description}</p>
                                </div>
                            </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-4xl font-bold mb-6">Why Choose WeatherAI?</h2>
                <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-10">
                    Experience hyper-local, AI-driven forecasts with real-time updates and unparalleled accuracy. Here’s why WeatherAI is different.
                </p>
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                    {[
                        { title: "Hyper-Local Forecasts", description: "Precision weather forecasts tailored to your exact location." },
                        { title: "Real-Time Updates", description: "Stay ahead with continuous updates, every second counts." },
                        { title: "Data Privacy First", description: "Your data remains private with our military-grade encryption." }
                    ].map((feature, index) => (
                        <div key={index} className="p-0.5 rounded-2xl border border-gray-700">
                            <div className="bg-gray-900 bg-opacity-50 backdrop-blur-lg p-6 rounded-2xl transition-all hover:scale-105">
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-300">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Meet the Team Section */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-4xl font-bold mb-6">Meet the Team</h2>
                <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-10">
                    Our team of AI engineers, meteorologists, and data scientists are dedicated to bringing you the most accurate forecasts.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[
                        { name: "Praveen Kumar",  image: Praveen },
                        { name: "Jayash Pandey",  image: Jayesh },
                        { name: "Naman Gupta",  image: Naman },
                        { name: "Paras Vishnoi",  image: Paras },
                        // { name: "Ujjwal Kaushik", title: "Back-end Developer", image: Ujjwal },

                    ].map((team, index) => (
                        <div key={index} className="p-0.5 rounded-2xl border border-gray-700">
                            <div className="bg-gray-900 bg-opacity-50 backdrop-blur-lg p-6 rounded-2xl">
                                <img src={team.image} alt={team.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                                <h3 className="text-xl font-bold mb-2">{team.name}</h3>
                                <p className="text-gray-300">{team.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 text-center bg-gradient-to-r from-blue-600 to-purple-600">
                <h2 className="text-4xl font-bold mb-6">Ready to Experience Future Forecasting?</h2>
                <p className="text-gray-200 max-w-3xl mx-auto text-lg mb-8">
                    Start using WeatherAI today and stay one step ahead of the weather with AI-powered insights.
                </p>
                <button className="px-8 py-4 bg-blue-500 rounded-full hover:bg-blue-600 transition-all transform hover:scale-105 text-white font-bold">
                    Get Started
                </button>
            </section>
        </div>
    );
};

export default AboutPage;
