import { useState, useEffect } from 'react';
import {
    LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, Area, AreaChart
} from 'recharts';
import { Cloud, Thermometer, Wind, Droplets, Search } from 'lucide-react';

export default function WeatherDashboard() {
    const [city, setCity] = useState('Salem');
    const [forecastData, setForecastData] = useState([]);
    const [currentWeather, setCurrentWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const OPEN_WEATHER_API_KEY = '2b3379be1eceaf66aa7757269eb74685';

    const fetchWeatherData = async (selectedCity) => {
        try {
            setLoading(true);
            // Current weather
            const currentResponse = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
            );
            const currentData = await currentResponse.json();
            setCurrentWeather(currentData);

            // 5-day forecast
            const forecastResponse = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
            );
            const forecastData = await forecastResponse.json();

            // Process forecast data
            const processedData = forecastData.list.map(item => ({
                time: new Date(item.dt * 1000).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit'
                }),
                date: new Date(item.dt * 1000).toLocaleDateString(),
                temp: Math.round(item.main.temp),
                humidity: item.main.humidity,
                windSpeed: Math.round(item.wind.speed),
                rainfall: item.rain ? item.rain['3h'] : 0,
                weatherIcon: item.weather[0].icon,
                description: item.weather[0].description
            }));

            setForecastData(processedData);
            setError(null);
        } catch (err) {
            setError('Failed to fetch weather data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeatherData(city);
        const interval = setInterval(() => fetchWeatherData(city), 300000); // Update every 5 minutes
        return () => clearInterval(interval);
    }, [city]);

    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = e.target.elements.city.value.trim();
        if (searchValue) setCity(searchValue);
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="bg-slate-800/90 backdrop-blur-lg p-4 rounded-lg border border-blue-500/20 shadow-xl">
                    <p className="text-blue-400 font-semibold">{data.time}</p>
                    <p className="text-white">Temperature: {data.temp}°C</p>
                    <p className="text-white">Humidity: {data.humidity}%</p>
                    <p className="text-white">Wind Speed: {data.windSpeed} m/s</p>
                    {data.rainfall > 0 && (
                        <p className="text-white">Rainfall: {data.rainfall} mm</p>
                    )}
                    <p className="text-white capitalize">{data.description}</p>
                </div>
            );
        }
        return null;
    };

    if (loading) return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );

    if (error) return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center text-red-500">
            {error}
        </div>
    );

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

            <div className="relative max-w-6xl mx-auto p-4 sm:p-8 space-y-8">
                <form onSubmit={handleSearch} className="flex items-center space-x-4">
                    <input
                        type="text"
                        name="city"
                        placeholder="Enter city name"
                        className="bg-slate-800/50 text-white p-3 rounded-lg focus:outline-none w-full md:w-1/3"
                    />
                    <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg flex items-center">
                        <Search className="mr-2" />
                        Search
                    </button>
                </form>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                    <div className="col-span-1 md:col-span-4">
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                            Weather Dashboard - {city}
                        </h1>
                        <p className="text-blue-400">Real-time weather updates</p>
                    </div>

                    {currentWeather && (
                        <>
                            <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-blue-500/20">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-400">Temperature</p>
                                        <h3 className="text-2xl font-bold">
                                            {Math.round(currentWeather.main.temp)}°C
                                        </h3>
                                    </div>
                                    <Thermometer className="text-blue-400" size={24} />
                                </div>
                            </div>
                            <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-blue-500/20">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-400">Humidity</p>
                                        <h3 className="text-2xl font-bold">
                                            {currentWeather.main.humidity}%
                                        </h3>
                                    </div>
                                    <Droplets className="text-blue-400" size={24} />
                                </div>
                            </div>
                            <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-blue-500/20">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-400">Wind Speed</p>
                                        <h3 className="text-2xl font-bold">
                                            {Math.round(currentWeather.wind.speed)} m/s
                                        </h3>
                                    </div>
                                    <Wind className="text-blue-400" size={24} />
                                </div>
                            </div>
                            <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-blue-500/20">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-400">Conditions</p>
                                        <h3 className="text-2xl font-bold capitalize">
                                            {currentWeather.weather[0].description}
                                        </h3>
                                    </div>
                                    <Cloud className="text-blue-400" size={24} />
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Temperature Chart */}
                <div className="bg-slate-800/30 backdrop-blur-md p-6 rounded-2xl border border-blue-500/20">
                    <h3 className="text-xl font-semibold mb-6">Temperature Forecast</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={forecastData}>
                                <defs>
                                    <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                <XAxis dataKey="time" stroke="#94a3b8" tick={{ fontSize: 12 }} />
                                <YAxis stroke="#94a3b8" tick={{ fontSize: 12 }} />
                                <Tooltip content={<CustomTooltip />} />
                                <Area type="monotone" dataKey="temp" stroke="#3b82f6" fill="url(#tempGradient)" strokeWidth={2} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Humidity and Wind Speed Chart */}
                <div className="bg-slate-800/30 backdrop-blur-md p-6 rounded-2xl border border-blue-500/20">
                    <h3 className="text-xl font-semibold mb-6">Humidity & Wind Speed</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={forecastData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                <XAxis dataKey="time" stroke="#94a3b8" tick={{ fontSize: 12 }} />
                                <YAxis stroke="#94a3b8" tick={{ fontSize: 12 }} />
                                <Tooltip content={<CustomTooltip />} />
                                <Line type="monotone" dataKey="humidity" stroke="#8b5cf6" strokeWidth={2} dot={false} />
                                <Line type="monotone" dataKey="windSpeed" stroke="#10b981" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Rainfall Chart */}
                <div className="bg-slate-800/30 backdrop-blur-md p-6 rounded-2xl border border-blue-500/20">
                    <h3 className="text-xl font-semibold mb-6">Rainfall Forecast</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={forecastData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                <XAxis dataKey="time" stroke="#94a3b8" tick={{ fontSize: 12 }} />
                                <YAxis stroke="#94a3b8" tick={{ fontSize: 12 }} />
                                <Tooltip content={<CustomTooltip />} />
                                <Bar dataKey="rainfall" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}