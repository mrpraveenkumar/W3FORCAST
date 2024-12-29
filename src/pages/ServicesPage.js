import React from 'react';
import { Cloud, Calendar, Cpu, Thermometer, Wind, Sun, Layers, Droplet, Newspaper } from 'lucide-react';

const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-black text-white py-16">
            {/* Page Header */}
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Our Services</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Bringing you next-generation weather insights with AI-powered predictions and real-time updates.
                </p>
            </div>

            {/* Services Section */}
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    {
                        icon: Cloud,
                        title: 'Real-Time Weather Forecasting',
                        description: 'Get live, hyper-local weather forecasts updated every minute to keep you informed.',
                    },
                    {
                        icon: Calendar,
                        title: 'Multi-Day Predictions',
                        description: 'Access accurate 2-day, 5-day, and extended forecasts based on predictive modeling.',
                    },
                    {
                        icon: Cpu,
                        title: 'AI-Based Insights',
                        description: 'Experience next-gen AI-powered analysis to predict upcoming weather patterns.',
                    },
                    {
                        icon: Newspaper,
                        title: 'Weather News Updates',
                        description: 'Stay up-to-date with the latest weather news and alerts from around the world.',
                    },
                    {
                        icon: Thermometer,
                        title: 'Climate Change Insights',
                        description: 'Analyze long-term trends to understand climate changes affecting your region.',
                    },
                    {
                        icon: Wind,
                        title: 'Air Quality Monitoring',
                        description: 'Stay informed about air quality levels and pollution indexes in your area.',
                    },
                    {
                        icon: Sun,
                        title: 'Extreme Weather Predictions',
                        description: 'Get early warnings on extreme weather events, including storms, floods, and heatwaves.',
                    },
                    {
                        icon: Layers,
                        title: 'Weather Data API',
                        description: 'Integrate weather data into your apps with our easy-to-use, real-time API.',
                    },
                    {
                        icon: Droplet,
                        title: 'Agricultural Weather Forecasts',
                        description: 'Customized forecasts to support farmers with insights on rainfall, frost, and humidity.',
                    },
                ].map((service, index) => (
                    <div key={index} className="p-0.5 rounded-2xl border border-gray-700">
                        <div className="bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 text-center transform transition-all duration-500 hover:scale-105">
                            <service.icon className="w-12 h-12 text-blue-500 mx-auto mb-4 animate-pulse" />
                            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                            <p className="text-gray-300">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Technology Section */}
            <div className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-4xl font-bold mb-6">Powered by Advanced Technology</h2>
                <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-10">
                    Our forecasting services use state-of-the-art data analysis and machine learning models to provide accurate and timely weather insights. Experience the future of weather intelligence with technology you can trust.
                </p>
            </div>
        </div>
    );
};

export default ServicesPage;
