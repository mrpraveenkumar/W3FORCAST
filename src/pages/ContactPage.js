// 4e87fc6a-57b0-4dc7-aba8-cc3aa7bb4ab6
import { useState } from 'react';
import { Sparkles, Send, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [feedback, setFeedback] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...formData,
                access_key: 'ba45bf55-aed7-4d34-b1ac-719e0e5e0970',
            }),
        });

        const result = await response.json();
        if (result.success) {
            setFeedback('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setFeedback('Failed to send message. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-blue-700 via-black to-purple-900 text-white relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z\' fill=\'rgba(255,255,255,0.07)\'%3E%3C/path%3E%3C/svg%3E')] opacity-20" />

            <div className="absolute inset-0 backdrop-blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
                <div className="flex items-center justify-center mb-12">
                    <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Contact Us
                    </h1>
                    <Sparkles className="ml-4 text-blue-400" />
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        {/* Contact Information */}
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <MapPin className="text-blue-400" />
                                    <div>
                                        <h3 className="font-semibold">Our Location</h3>
                                        <p className="text-gray-400">Maharana Pratap  Engineering College, Mandhana, kanpur</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Phone className="text-blue-400" />
                                    <div>
                                        <h3 className="font-semibold">Phone</h3>
                                        <p className="text-gray-400">(+91) 7460962164 </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Mail className="text-blue-400" />
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <p className="text-gray-400">praveenkumar1202398@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                            <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
                            <div className="flex space-x-6">
                                <a href="https://facebook.com" className="hover:text-blue-400 transition-colors">
                                    <Facebook />
                                </a>
                                <a href="https://twitter.com/" className="hover:text-blue-400 transition-colors">
                                    <Twitter />
                                </a>
                                <a href="https://instagram.com" className="hover:text-blue-400 transition-colors">
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium flex items-center justify-center space-x-2 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                            >
                                <span>Send Message</span>
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                        {feedback && (
                            <div className="mt-4 p-4 rounded-lg bg-white/5 text-center">
                                <p className="text-blue-400">{feedback}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}