import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe2 } from 'lucide-react';
import FuturisticWeatherLanding from './FuturisticWeatherLanding';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WeatherSearch from './pages/WeatherSearch';
import DisasterPrediction from './pages/DisasterPrediction';
import Footer from './components/Footer';
import FiveDayForecast from './pages/FiveDayForecast';
import ContactPage from './pages/ContactPage';
import ChartPage from './pages/ChartPage';
import Info from './pages/Info';
import WeatherNews from './pages/WeatherNews';
import TenDayForecast from './pages/TenDayForecast';

// Navigation Component
const Navigation = ({ isMenuOpen, setIsMenuOpen, scrolled }) => {
    const location = useLocation();

    const NavLink = ({ to, children }) => {
        const isActive = location.pathname === to;

        return (
            <Link
                to={to}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 text-sm transition-all duration-300
                    ${isActive ? 'text-sky-300' : 'text-gray-300 hover:text-sky-300'}
                    ${isActive ? 'bg-sky-500/10' : 'hover:bg-sky-500/5'}
                    rounded-lg`}
            >
                {children}
            </Link>
        );
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/70 backdrop-blur-lg shadow-lg' : 'bg-black/50 backdrop-blur-md'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="relative w-10 h-10">
                            <div className="absolute inset-0 bg-blue-500 rounded-lg animate-pulse" />
                            <Globe2 className="absolute inset-0 w-6 h-6 m-2 text-white transform group-hover:rotate-180 transition-transform duration-500" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
                            Weather App
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/info">Info</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/weather-search">Current Weather</NavLink>
                        <NavLink to="/5-day-forecast">5-Day Forecast</NavLink>
                        <NavLink to="/TenDayForecast">10-Day Forecast</NavLink>
                        <NavLink to="/disaster-prediction">Disaster Prediction</NavLink>
                        <NavLink to="/chart">Charts</NavLink>
                        <NavLink to="/weather-news">Weather News</NavLink>
                        <NavLink to="/contact">Contact Us</NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`lg:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-xl
                    transition-all duration-300 border-t border-gray-800/50
                    ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="px-4 py-4 space-y-2">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/info">Info</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/weather-search">Current Weather</NavLink>
                        <NavLink to="/5-day-forecast">5-Day Forecast</NavLink>
                        <NavLink to="/TenDayForecast">10-Day Forecast</NavLink>
                        <NavLink to="/disaster-prediction">Disaster Prediction</NavLink>
                        <NavLink to="/chart">Charts</NavLink>
                        <NavLink to="/weather-news">Weather News</NavLink>
                        <NavLink to="/contact">Contact Us</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isMenuOpen && !e.target.closest('nav')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    return (
        <Router>
            <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-blue-900/20 to-black text-white">
                <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrolled={scrolled} />

                {/* Main Content */}
                <div className="pt-16">
                    <Routes>
                        <Route path="/" element={<FuturisticWeatherLanding />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/info" element={<Info />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/weather-search" element={<WeatherSearch />} />
                        <Route path="/5-day-forecast" element={<FiveDayForecast />} />
                        <Route path="/TenDayForecast" element={<TenDayForecast />} />
                        <Route path="/disaster-prediction" element={<DisasterPrediction />} />
                        <Route path="/chart" element={<ChartPage />} />
                        <Route path="/weather-news" element={<WeatherNews />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </div>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
