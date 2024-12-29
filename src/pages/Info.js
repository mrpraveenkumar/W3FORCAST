import React from 'react';

const Info = () => {
    return (
        <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full mix-blend-screen filter blur-xl animate-pulse"
                        style={{
                            backgroundColor: 'rgba(59, 130, 246, 0.15)',
                            width: Math.random() * 200 + 50 + 'px',
                            height: Math.random() * 200 + 50 + 'px',
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                            animationDelay: Math.random() * 2 + 's',
                            animationDuration: Math.random() * 3 + 2 + 's',
                        }}
                    />
                ))}
            </div>

            <div className="relative max-w-6xl mx-auto p-8 space-y-10">
                <header className="text-center py-10">
                    <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                        About the Weather Website
                    </h1>
                    <p className="text-xl">
                        Your go-to platform for accurate and real-time weather information! 🌤️
                    </p>
                </header>

                {/* Interactive Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1: Overview */}
                    <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:backdrop-blur-sm">
                        <h2 className="text-2xl font-semibold mb-4">🌟 Overview</h2>
                        <p>
                            This website provides comprehensive weather information, including real-time data, 5-day forecasts, and detailed insights into temperature, humidity, wind speed, and rainfall.
                            Our user-friendly interface makes it easy for anyone to navigate and find the weather information they need.
                        </p>
                    </div>

                    {/* Card 2: Current Weather */}
                    <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:backdrop-blur-sm">
                        <h2 className="text-2xl font-semibold mb-4">🌦️ Current Weather</h2>
                        <p>
                            Get instant updates on the current weather conditions for any city worldwide, ensuring you never get caught in the rain again! 🌧️
                        </p>
                        <p>
                            Our current weather feature is updated every 5 minutes, providing you with the latest information.
                        </p>
                    </div>

                    {/* Card 3: 5-Day Forecast */}
                    <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:backdrop-blur-sm">
                        <h2 className="text-2xl font-semibold mb-4">📅 5-Day Forecast</h2>
                        <p>
                            Plan your week ahead with our 5-day weather forecast, featuring daily temperatures, conditions, and rain predictions.
                        </p>
                    </div>

                    {/* Card 4: Interactive Charts */}
                    <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:backdrop-blur-sm">
                        <h2 className="text-2xl font-semibold mb-4">📈 Interactive Charts</h2>
                        <p>
                            Visualize weather data with stunning interactive charts that represent temperature, humidity, and rainfall over time.
                        </p>
                    </div>

                    {/* Card 5: User-Friendly Search */}
                    <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:backdrop-blur-sm">
                        <h2 className="text-2xl font-semibold mb-4">🔍 User-Friendly Search</h2>
                        <p>
                            Easily search for any city to get the latest weather updates, ensuring that finding your local forecast is just a click away!
                        </p>
                    </div>

                    {/* Card 6: Customizable Settings */}
                    <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:backdrop-blur-sm">
                        <h2 className="text-2xl font-semibold mb-4">⚙️ Customizable Settings</h2>
                        <p>
                            Tailor your weather experience by adjusting settings like temperature units (Celsius or Fahrenheit) and update intervals to suit your needs.
                        </p>
                    </div>

                    {/* Card 7: Real-Time Updates */}
                    <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:backdrop-blur-sm">
                        <h2 className="text-2xl font-semibold mb-4">⏰ Real-Time Updates</h2>
                        <p>
                            Receive real-time updates every 5 minutes to ensure that you’re always in the know about changing weather conditions.
                        </p>
                    </div>

                    {/* Card 8: Data Privacy */}
                    <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:backdrop-blur-sm">
                        <h2 className="text-2xl font-semibold mb-4">🔒 Data Privacy</h2>
                        <p>
                            Your privacy matters! We prioritize user data protection and do not store any personal information.
                        </p>
                    </div>

                    {/* Realtime Weather News */}
                    <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:backdrop-blur-sm">
                        <h2 className="text-2xl font-semibold mb-4">📰Realtime World wide Weather News </h2>
                        <p>
                            Stay updated with the latest weather news from around the world. Our news section provides real-time updates on weather events, forecasts, and more.
                        </p>
                    </div>

                    {/* Card 10: Future Enhancements */}
                    <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:backdrop-blur-sm">
                        <h2 className="text-2xl font-semibold mb-4">🚀 Future Enhancements</h2>
                        <p>
                            We are constantly improving! Stay tuned for new features like severe weather alerts and more detailed historical data.
                        </p>
                    </div>

                    {/* Card 11: FAQs */}
                    <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:backdrop-blur-sm">
                        <h2 className="text-2xl font-semibold mb-4">❓ Frequently Asked Questions (FAQs)</h2>
                        <p className="mb-2"><strong>Q1:</strong> How accurate is the weather data?</p>
                        <p>A: We source data from reputable weather services to ensure high accuracy. However, actual conditions may vary.</p>
                        <p className="mb-2"><strong>Q2:</strong> Can I get notifications for severe weather?</p>
                        <p>A: We are currently developing a notification feature for severe weather alerts that will be available soon!</p>
                        <p className="mb-2"><strong>Q3:</strong> Is there a mobile app available?</p>
                        <p>A: At this time, our website is mobile-friendly, but we are exploring options for a dedicated mobile app.</p>
                    </div>

                    {/* Card 12: User Feedback */}
                    <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:backdrop-blur-sm">
                        <h2 className="text-2xl font-semibold mb-4">🗨️ User Feedback</h2>
                        <p>
                            We value your feedback! Let us know how we can improve your experience. Your suggestions help us enhance our features.
                        </p>
                        <p>
                            Feel free to reach out through our contact form or join our community discussions to share your thoughts!
                        </p>
                    </div>
                </div>

                {/* Conclusion Section */}
                <section className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-lg shadow-lg text-center mt-8">
                    <h2 className="text-3xl font-semibold mb-4">Thank You for Visiting! 🙌</h2>
                    <p>
                        We hope you enjoy using the Weather Dashboard. Stay safe and always plan ahead! 🌈
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Info;
