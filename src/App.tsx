import React, { useState } from 'react';
import { Bot, MessageSquare, Database, ArrowRight, Sparkles } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center scale-in">
              <Bot className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Aidvanced Technology</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#solutions" className="text-gray-600 hover:text-blue-600 transition-colors">Solutions</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-blue-50 rounded-full fade-in">
            <p className="text-sm font-medium text-blue-600">AI AUTOMATION TECHNOLOGY</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight fade-in fade-in-delay-1">
            Transform Your Business with <br />
            <span className="text-blue-600">Intelligent Automation</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto fade-in fade-in-delay-2">
            Leverage AI-powered chat agents, automated lead generation, and seamless CRM integrations to streamline your business operations.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2 fade-in fade-in-delay-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg flex items-center gap-2"
            >
              Join Waitlist
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50" id="features">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 fade-in">Powerful Features for Modern Businesses</h2>
            <p className="text-xl text-gray-600 fade-in fade-in-delay-1">Everything you need to automate and scale your operations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover-lift fade-in fade-in-delay-1">
              <MessageSquare className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Chat Agents</h3>
              <p className="text-gray-600">Intelligent conversational agents that handle customer inquiries 24/7, improving response times and satisfaction.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover-lift fade-in fade-in-delay-2">
              <Sparkles className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lead Generation</h3>
              <p className="text-gray-600">Automated lead generation and qualification systems to keep your sales pipeline full.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover-lift fade-in fade-in-delay-3">
              <Database className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">CRM Integration</h3>
              <p className="text-gray-600">Seamless integration with popular CRM platforms for efficient customer relationship management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="bg-blue-600 rounded-3xl px-8 py-16 text-white fade-in">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">Join our waiting list to be among the first to experience the future of business automation.</p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white transition-all"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all hover:shadow-lg flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Bot className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Aidvanced Technology</span>
          </div>
          <p className="text-center text-gray-600">© 2024 Aidvanced Technology. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;