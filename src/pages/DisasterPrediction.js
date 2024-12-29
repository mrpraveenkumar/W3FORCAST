import React, { useState } from 'react';
import { Search, AlertCircle, Wind, Droplets, Sun, ThermometerSun, MapPin, Shield } from 'lucide-react';

// Card Component
const Card = ({ children, className }) => {
    return (
        <div className={`bg-gray-800 rounded-lg shadow-lg border border-gray-700 ${className}`}>
            {children}
        </div>
    );
};

// Card Header Component
const CardHeader = ({ children }) => (
    <div className="border-b p-4">{children}</div>
);

// Card Title Component
const CardTitle = ({ children }) => (
    <h2 className="text-lg font-bold">{children}</h2>
);

// Card Content Component
const CardContent = ({ children }) => (
    <div className="p-4">{children}</div>
);

const DisasterPrediction = () => {
    const [location, setLocation] = useState('');
    const [alerts, setAlerts] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('alerts');

    const API_KEY = '2b3379be1eceaf66aa7757269eb74685';

    const handleSearch = async (e) => {
        e.preventDefault();
        setError('');
        setAlerts(null);
        setWeatherData(null);
        setLoading(true);

        if (!location) {
            setError('Please enter a location.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
            );

            if (!response.ok) {
                throw new Error('Location not found');
            }

            const data = await response.json();
            setWeatherData(data);

            const alertsResponse = await fetch(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,hourly,daily&appid=${API_KEY}`
            );

            const alertsData = await alertsResponse.json();
            setAlerts(alertsData.alerts || []);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const renderWeatherMetrics = () => {
        if (!weatherData) return null;

        const metrics = [
            {
                icon: <ThermometerSun className="h-6 w-6" />,
                label: 'Temperature',
                value: `${Math.round(weatherData.main.temp)}°C`,
                detail: `Feels like ${Math.round(weatherData.main.feels_like)}°C`
            },
            {
                icon: <Droplets className="h-6 w-6" />,
                label: 'Humidity',
                value: `${weatherData.main.humidity}%`,
                detail: 'Relative humidity'
            },
            {
                icon: <Wind className="h-6 w-6" />,
                label: 'Wind Speed',
                value: `${Math.round(weatherData.wind.speed * 3.6)} km/h`,
                detail: `Direction: ${weatherData.wind.deg}°`
            },
            {
                icon: <Sun className="h-6 w-6" />,
                label: 'Visibility',
                value: `${(weatherData.visibility / 1000).toFixed(1)} km`,
                detail: 'Clear view distance'
            }
        ];

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {metrics.map((metric, index) => (
                    <Card key={index} className="backdrop-blur-lg border-gray-700/50">
                        <CardContent className="p-6">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                                    {metric.icon}
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">{metric.label}</p>
                                    <p className="text-2xl font-bold">{metric.value}</p>
                                    <p className="text-xs text-gray-500">{metric.detail}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        );
    };

    const TabButton = ({ label, icon, isActive, onClick }) => (
        <button
            onClick={onClick}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${isActive
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800/30 hover:bg-gray-800/50 text-gray-300'
                }`}
        >
            {icon}
            <span>{label}</span>
        </button>
    );

    return (
        <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-blue-900 to-gray-900 text-white py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200">
                        Disaster Prediction System
                    </h1>
                    <div className="hidden md:flex items-center space-x-2 text-sm text-blue-400">
                        <Shield className="h-5 w-5" />
                        <span>Real-time Monitoring Active</span>
                    </div>
                </div>

                <form onSubmit={handleSearch} className="relative mb-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Enter city name or coordinates..."
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full px-6 py-4 rounded-2xl bg-gray-800/30 backdrop-blur-lg text-white border border-gray-700/50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 pl-12"
                        />
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-4 w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        {loading ? (
                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                        ) : (
                            <>
                                <MapPin className="h-5 w-5" />
                                <span>Analyze Location</span>
                            </>
                        )}
                    </button>
                </form>

                {error && (
                    <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/50 flex items-start">
                        <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                        <div className="ml-3">
                            <p className="text-red-400 font-bold">Error Detected</p>
                            <p className="text-gray-300">{error}</p>
                        </div>
                    </div>
                )}

                {(weatherData || alerts) && (
                    <>
                        <div className="flex space-x-4 mb-6">
                            <TabButton
                                label="Weather Metrics"
                                icon={<ThermometerSun className="h-5 w-5" />}
                                isActive={activeTab === 'weather'}
                                onClick={() => setActiveTab('weather')}
                            />
                            <TabButton
                                label="Active Alerts"
                                icon={<AlertCircle className="h-5 w-5" />}
                                isActive={activeTab === 'alerts'}
                                onClick={() => setActiveTab('alerts')}
                            />
                        </div>

                        {activeTab === 'weather' && renderWeatherMetrics()}

                        {activeTab === 'alerts' && (
                            <Card className="backdrop-blur-lg border-gray-700/50">
                                <CardHeader>
                                    <CardTitle className="text-2xl">
                                        Weather Alerts for {location}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {alerts && alerts.length > 0 ? (
                                        <div className="space-y-4">
                                            {alerts.map((alert, index) => (
                                                <div
                                                    key={index}
                                                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/50"
                                                >
                                                    <h3 className="text-lg font-semibold">{alert.event}</h3>
                                                    <p>{alert.description}</p>
                                                    <p className="text-xs text-gray-500">
                                                        {new Date(alert.start * 1000).toLocaleString()} - {new Date(alert.end * 1000).toLocaleString()}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p>No active alerts for this location.</p>
                                    )}
                                </CardContent>
                            </Card>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default DisasterPrediction;
