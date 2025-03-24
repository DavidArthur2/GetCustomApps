import React from 'react';
import { Menu, X, Send, MapPin, ChevronRight, Mail } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const services = [
    {
      title: "Innovative Android Solutions",
      description: "With over a year of experience as an Android developer, I specialize in creating engaging apps using Kotlin and Java. My expertise extends to crafting solutions for custom Android devices, ensuring tailored functionality and user experiences that align perfectly with client needs.",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Automation & IoT Integration",
      description: "I have experience in automation and IoT integration, working with PLC programming (Siemens), Arduino, and hardware-software communication (RS232, TCP/IP, Bluetooth). While my experience varies across these areas, I have a solid understanding of key techniques and focus on seamless integration and efficient control across systems.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Full-Stack Development with a Strong Backend Focus",
      description: "With robust experience in backend development using Python and NodeJS, I have collaborated on full-stack projects that integrate databases like PostgreSQL, MySQL, Oracle, and Firebase, with some exposure to MongoDB. Most frontend sides were in Android but my academic studies have equipped me with foundational skills in HTML, CSS, and Angular to support web development.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Artificial Intelligence Enthusiasm",
      description: "Driven by a passion for AI, I have independently and academically explored Radial Basis Function (RBF) networks and Convolutional Neural Networks (CNN). While my hands-on expertise is still developing, I am enthusiastic about integrating AI into projects and have a firm grasp of its fundamentals.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Smart Solutions for Modern Environments",
      description: "I provide smart solutions for automating environments such as warehouses and office spaces. This includes the implementation of energy-efficient systems, like automated lighting and heating, with comprehensive dashboards for monitoring and control to enhance operational efficiency.",
      image: "https://images.unsplash.com/photo-1558346547-4439467bd1d5?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Windows Desktop Development & Cybernetics Research",
      description: "With some experience in Windows desktop development using VB.NET, I am diving into the world of cybernetics for my licensing exam. My research focuses on password security and resistance to cracking, paving the way for more secure digital environments.",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-2xl">
              David Arthur
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-purple-400 transition-colors">About Me</a>
              <a href="#services" className="hover:text-purple-400 transition-colors">How can I help</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
              <a href="#blog" className="hover:text-purple-400 transition-colors">Blog</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-purple-400"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 hover:bg-purple-900/50 rounded-md">Home</a>
              <a href="#about" className="block px-3 py-2 hover:bg-purple-900/50 rounded-md">About Me</a>
              <a href="#services" className="block px-3 py-2 hover:bg-purple-900/50 rounded-md">How can I help</a>
              <a href="#contact" className="block px-3 py-2 hover:bg-purple-900/50 rounded-md">Contact</a>
              <a href="#blog" className="block px-3 py-2 hover:bg-purple-900/50 rounded-md">Blog</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Custom Software & Hardware Solutions
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Transforming ideas into reality with expert coding and automation.
              </p>
              <a href="#contact" className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium transition-colors">
                Contact Me
                <ChevronRight className="ml-2" size={20} />
              </a>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800"
                alt="Coding workspace"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl -z-10 blur-xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Custom Software Solutions for your needs</h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-300 mb-8">
              Hello and welcome to my digital space! I'm David Arthur, a 23-year-old Computer Science student from Romania, 
              on the verge of graduating from university. Here, I'm excited to offer and discuss personalized software and 
              hardware solutions, crafted uniquely to meet your needs.
            </p>
            <a href="#services" className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium transition-colors">
              Find out more
              <ChevronRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">How can I help</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact me</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email*</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2" size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <p className="flex items-center text-gray-400">
                <MapPin className="mr-2" size={20} />
                Târgu Mureș, Romania
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Subscribe</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:border-purple-500"
                />
                <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-r-lg">
                  <Mail size={20} />
                </button>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Copyright © 2025 - All Rights Reserved.<br />
                Powered by me
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;