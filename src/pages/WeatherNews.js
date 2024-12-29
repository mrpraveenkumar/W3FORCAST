// src/pages/WeatherNews.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherNews = () => {
    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiKey = '09ceaad626c0413eb67ae02c97f5b753'; // Replace with your NewsAPI key
    const newsApiUrl = 'https://newsapi.org/v2/everything';

    const fetchArticles = async (query) => {
        setLoading(true);
        setError(null); // Reset error before a new request
        try {
            const response = await axios.get(newsApiUrl, {
                params: {
                    q: query || 'weather', // Default search term is "weather"
                    apiKey: apiKey,
                    language: 'en',
                    sortBy: 'publishedAt' // Sort results by publication date
                },
            });
            setArticles(response.data.articles); // Store articles in state
        } catch (error) {
            console.error('Error fetching articles:', error);
            setError('Could not fetch articles. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles('weather'); // Fetch initial articles on component mount
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchArticles(searchTerm || 'weather'); // Search by input or default "weather"
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
            <div className="max-w-3xl w-full space-y-6 bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg relative">
                <h1 className="text-4xl font-bold text-center mb-6">Weather News</h1>
                
                {/* Search Form */}
                <form onSubmit={handleSearch} className="flex space-x-3 mb-6">
                    <input
                        type="text"
                        placeholder="Search for weather news..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1 p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 rounded bg-blue-500 hover:bg-blue-600 transition duration-200"
                    >
                        Search
                    </button>
                </form>

                {/* Loading State */}
                {loading && <p className="text-center text-blue-400">Loading articles...</p>}

                {/* Error State */}
                {error && <p className="text-center text-red-500">{error}</p>}

                {/* Articles Display */}
                {!loading && !error && (
                    <div className="space-y-4">
                        {articles.length === 0 ? (
                            <p className="text-center text-gray-400">No weather news found.</p>
                        ) : (
                            articles.map((article, index) => (
                                <div
                                    key={index}
                                    className="p-4 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 transition duration-200"
                                >
                                    <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                                    <p className="text-gray-300 mb-4">{article.description}</p>
                                    <p className="text-gray-400 text-sm">
                                        Published on: {new Date(article.publishedAt).toLocaleString()}
                                    </p>
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:underline"
                                    >
                                        Read more
                                    </a>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeatherNews;