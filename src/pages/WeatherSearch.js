import React, { useState } from 'react';
import { Search, Wind, Droplets, Thermometer, AlertCircle } from 'lucide-react';

const WeatherSearch = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const API_KEY = '2b3379be1eceaf66aa7757269eb74685'; // Replace with your actual OpenWeather API key

    const getWeatherIcon = (weatherCode) => {
        // Map weather codes to emoji as placeholder icons
        const iconMap = {
            '01': '☀️',
            '02': '⛅',
            '03': '☁️',
            '04': '☁️',
            '09': '🌧️',
            '10': '🌦️',
            '11': '⛈️',
            '13': '❄️',
            '50': '🌫️'
        };
        const code = weatherCode.substring(0, 2);
        return iconMap[code] || '☀️';
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        setError('');
        setWeatherData(null);
        setLoading(true);

        if (!city) {
            setError('Please enter a city or state.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );

            if (!response.ok) {
                throw new Error('City not found');
            }

            const data = await response.json();
            setWeatherData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16 px-4">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
                    Weather Forecast
                </h1>

                <form onSubmit={handleSearch} className="relative mb-12">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for a city..."
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="w-full px-6 py-4 rounded-2xl bg-gray-800/50 backdrop-blur-lg text-white border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 pl-12"
                        />
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-4 w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        {loading ? (
                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                        ) : (
                            'Search Weather'
                        )}
                    </button>
                </form>

                {error && (
                    <div className="mb-6 p-4 rounded-md bg-red-500/10 border border-red-500/50 flex items-start">
                        <AlertCircle className="h-6 w-6 text-red-500" />
                        <div className="ml-3">
                            <p className="text-red-600 font-bold">Error:</p>
                            <p>{error}</p>
                        </div>
                    </div>
                )}

                {weatherData && (
                    <div className="bg-gray-800/30 backdrop-blur-lg p-8 rounded-3xl border border-gray-700/50 transform transition-all duration-500 hover:scale-102 hover:bg-gray-800/40">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-3xl font-bold">{weatherData.name}</h2>
                            <span className="text-6xl">
                                {getWeatherIcon(weatherData.weather[0].icon)}
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Thermometer className="text-blue-400" />
                                    <div>
                                        <p className="text-gray-400 text-sm">Temperature</p>
                                        <p className="text-2xl font-bold">{Math.round(weatherData.main.temp)}°C</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Droplets className="text-blue-400" />
                                    <div>
                                        <p className="text-gray-400 text-sm">Humidity</p>
                                        <p className="text-2xl font-bold">{weatherData.main.humidity}%</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Wind className="text-blue-400" />
                                    <div>
                                        <p className="text-gray-400 text-sm">Wind Speed</p>
                                        <p className="text-2xl font-bold">{weatherData.wind.speed} m/s</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="text-blue-400 w-6 h-6 flex items-center justify-center">🌡️</div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Feels Like</p>
                                        <p className="text-2xl font-bold">{Math.round(weatherData.main.feels_like)}°C</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-700/50">
                            <p className="text-lg capitalize text-center text-gray-300">
                                {weatherData.weather[0].description}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeatherSearch;