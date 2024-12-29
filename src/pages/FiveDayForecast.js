import React, { useState } from 'react';
import { Search, Wind, Droplets, Thermometer, AlertCircle } from 'lucide-react';

const FiveDayForecast = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const API_KEY = '2b3379be1eceaf66aa7757269eb74685'; 

    const getWeatherIcon = (weatherCode) => {
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
            setError('Please enter a city.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
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

    // Function to format date to dd/mm/yy and time with day period
    const formatDateTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero indexed
        const year = String(date.getFullYear()).slice(-2); // Last two digits of the year
        const hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');

        // Determine the time of day
        let period = '';
        if (hours >= 5 && hours < 12) {
            period = 'Morning';
        } else if (hours >= 12 && hours < 17) {
            period = 'Afternoon';
        } else if (hours >= 17 && hours < 21) {
            period = 'Evening';
        } else {
            period = 'Night';
        }

        return `${day}/${month}/${year} ${hours}:${minutes} (${period})`;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
                    5-Day Weather Forecast
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
                            'Search Forecast'
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
                    <div className="flex flex-wrap justify-center gap-6">
                        {weatherData.list.map((forecast, index) => (
                            <div
                                key={index}
                                className="flex bg-gray-800/30 backdrop-blur-lg p-4 rounded-3xl border border-gray-700/50 transform transition-all duration-500 hover:scale-102 hover:bg-gray-800/40 w-full sm:w-80"
                            >
                                <div className="flex-none w-16 h-16 text-center text-4xl">
                                    {getWeatherIcon(forecast.weather[0].icon)}
                                </div>
                                <div className="flex-1 ml-4">
                                    <h2 className="text-xl font-bold">
                                        {formatDateTime(forecast.dt)}
                                    </h2>
                                    <div className="flex items-center justify-between">
                                        <Thermometer className="text-blue-400" />
                                        <p className="text-lg font-bold">{Math.round(forecast.main.temp)}°C</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Droplets className="text-blue-400" />
                                        <p className="text-lg font-bold">{forecast.main.humidity}%</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Wind className="text-blue-400" />
                                        <p className="text-lg font-bold">{forecast.wind.speed} m/s</p>
                                    </div>
                                    <p className="text-lg capitalize text-gray-300">{forecast.weather[0].description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FiveDayForecast;
