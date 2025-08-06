"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Shield, MessageCircle, Calendar, Monitor, Layers, Download, ChevronRight, Menu, X } from "lucide-react"

// Simple grid guide component
const GridGuides = ({ preserveBackground = false }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
    <div className="h-full max-w-7xl mx-auto px-6 relative">
      {/* White left margin - extends to left edge of viewport */}
      <div className="absolute inset-y-0 right-full w-[100vw] bg-white"></div>
      {/* White right margin - extends to right edge of viewport */}
      <div className="absolute inset-y-0 left-full w-[100vw] bg-white"></div>
      {/* Content area */}
      <div className={`h-full relative ${preserveBackground ? 'bg-transparent' : 'bg-white'}`}>
        {/* Left guide line */}
        <div className="absolute inset-y-0 -left-6 w-px bg-gray-200/80"></div>
        {/* Right guide line */}
        <div className="absolute inset-y-0 -right-6 w-px bg-gray-200/80"></div>
      </div>
    </div>
  </div>
)

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const features = [
    {
      icon: MessageCircle,
      title: "Chat Analysis",
      description: "Extract interests from chat conversations using advanced NLP technology.",
    },
    {
      icon: Calendar,
      title: "Activity Suggestions",
      description: "Get personalized recommendations for dates and activities based on shared interests.",
    },
    {
      icon: Monitor,
      title: "Cross-Platform",
      description: "Seamlessly works on both Mac and Windows operating systems.",
    },
    {
      icon: Layers,
      title: "Overlay Mode",
      description: "Floating overlay interface toggled by convenient keyboard shortcuts.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}>
        <div className={`transition-all duration-500 ${
          isScrolled ? 'max-w-2xl' : 'max-w-6xl'
        } mx-auto px-6`}>
          <div className={`transition-all duration-500 ${
            isScrolled 
              ? "bg-white/95 backdrop-blur-md shadow-lg border border-gray-200/60 rounded-full px-6 py-2" 
              : "bg-transparent px-0 py-2"
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className={`font-medium transition-all duration-300 ${
                  isScrolled ? 'text-base' : 'text-lg'
                } text-slate-900 tracking-tight`}>
                  Trust Dating
                </span>
              </div>
              
              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className={`text-slate-700 hover:text-slate-900 transition-colors font-medium tracking-tight ${
                  isScrolled ? 'text-sm' : 'text-sm'
                }`}>
                  Features
                </a>
                <a href="#download" className={`text-slate-700 hover:text-slate-900 transition-colors font-medium tracking-tight ${
                  isScrolled ? 'text-sm' : 'text-sm'
                }`}>
                  Download
                </a>
              </div>
              
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`p-2 ${isScrolled ? 'h-8 w-8' : 'h-10 w-10'}`}
                >
                  {isMobileMenuOpen ? (
                    <X className={`${isScrolled ? 'h-4 w-4' : 'h-5 w-5'}`} />
                  ) : (
                    <Menu className={`${isScrolled ? 'h-4 w-4' : 'h-5 w-5'}`} />
                  )}
                </Button>
              </div>
              
              {/* CTA Button */}
              <Button 
                size="sm" 
                className={`hidden md:flex bg-slate-900 hover:bg-slate-800 text-white font-medium transition-all duration-300 tracking-tight shadow-md hover:shadow-lg ${
                  isScrolled 
                    ? 'rounded-full px-4 py-1.5 text-xs h-7' 
                    : 'rounded-lg px-5 py-2 text-sm h-9'
                }`}
              >
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-2">
              <div className="bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/50 rounded-2xl px-6 py-4">
                <div className="flex flex-col space-y-4">
                  <a 
                    href="#features" 
                    className="text-slate-700 hover:text-slate-900 transition-colors font-medium text-sm tracking-tight"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Features
                  </a>
                  <a 
                    href="#download" 
                    className="text-slate-700 hover:text-slate-900 transition-colors font-medium text-sm tracking-tight"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Download
                  </a>
                  <Button 
                    size="sm" 
                    className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 py-2.5 font-medium w-full text-sm tracking-tight shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: 'url(/bg.png)'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white/70 to-blue-100/60"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 mb-8 leading-tight tracking-tighter">
            AI that helps you date
            <span className="text-blue-600 block">safely, instantly</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed tracking-tight">
            Analyze profiles, understand conversations, and get personalized date suggestions with our intelligent dating overlay tool.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-base px-6 py-3 font-medium tracking-tight rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_16px_rgba(59,130,246,0.15)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_24px_rgba(59,130,246,0.25)] transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-blue-200 border border-blue-500/20">
              <Download className="mr-2 h-5 w-5" />
              Download Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-6 py-3 border-2 border-blue-100 hover:bg-blue-50/70 hover:border-blue-200 bg-white text-slate-900 font-medium tracking-tight rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_20px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-blue-100"
            >
              Learn More
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-6 bg-gray-50/30">
        <GridGuides preserveBackground={true} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4 leading-tight tracking-tight">Features</h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed tracking-tight">
              Everything you need to make informed decisions and meaningful connections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-6 hover:bg-white/60 rounded-2xl transition-all duration-300 border border-transparent hover:border-gray-200/50 hover:shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-100 group-hover:scale-105 transition-all duration-300">
                  <feature.icon className="h-5 w-5 text-slate-700 transition-colors" />
                </div>
                <h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed tracking-tight">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="relative py-20 px-6 bg-white">
        <GridGuides />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4 leading-tight tracking-tight">Trust & Safety</h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed tracking-tight">
              Built with privacy and security at its core
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-5 w-5 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">End-to-End Encryption</h3>
                    <p className="text-sm text-slate-600 leading-relaxed tracking-tight">All your data is encrypted locally and never leaves your device</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Monitor className="h-5 w-5 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Offline Processing</h3>
                    <p className="text-sm text-slate-600 leading-relaxed tracking-tight">AI analysis happens locally without internet connection</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Layers className="h-5 w-5 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Zero Data Collection</h3>
                    <p className="text-sm text-slate-600 leading-relaxed tracking-tight">We don't store, track, or collect any personal information</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50/50 p-10 rounded-3xl border border-gray-100">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-3xl font-medium text-slate-900 tracking-tight mb-2">256-bit</div>
                  <div className="text-slate-600 text-sm tracking-tight">Encryption</div>
                </div>
                <div>
                  <div className="text-3xl font-medium text-slate-900 tracking-tight mb-2">0%</div>
                  <div className="text-slate-600 text-sm tracking-tight">Data Shared</div>
                </div>
                <div>
                  <div className="text-3xl font-medium text-slate-900 tracking-tight mb-2">100%</div>
                  <div className="text-slate-600 text-sm tracking-tight">Private</div>
                </div>
                <div>
                  <div className="text-3xl font-medium text-slate-900 tracking-tight mb-2">24/7</div>
                  <div className="text-slate-600 text-sm tracking-tight">Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="download" className="relative py-24 px-6 bg-gradient-to-br from-blue-50/60 via-blue-50/40 to-slate-50/60">
        <GridGuides preserveBackground={true} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6 leading-tight tracking-tight">Ready to transform your dating experience?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed tracking-tight mb-8">
              Join thousands who are already making smarter, safer connections with our AI-powered dating assistant.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 font-medium tracking-tight rounded-2xl text-base shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_16px_rgba(0,0,0,0.15)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_12px_24px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-blue-200 border border-slate-700/20">
              <Download className="mr-2 h-5 w-5" />
              Download for Mac
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-6 py-3 border-2 border-slate-150 hover:bg-white/80 hover:border-blue-200 bg-white/60 text-slate-900 font-medium tracking-tight rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_20px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-blue-100"
            >
              Download for Windows
            </Button>
          </div>
          
          <p className="text-sm text-slate-500 tracking-tight">
            Free download • No subscription required • Privacy focused
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-6 pb-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Footer Links */}
          <div className="grid md:grid-cols-3 gap-8 mb-6 max-w-4xl mx-auto">
            
            

            
          </div>

          {/* Large Company Name Section */}
          <div className="text-center mb-6 relative">
            <h2 className="text-8xl md:text-12xl lg:text-[12.1rem] font-bold text-gray-100 leading-none tracking-tight select-none -mb-4 relative">
              trust dating
            </h2>
            {/* Gradient fade mask at bottom - positioned at original location */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"></div>
            
            {/* Copyright - Left aligned like reference image with better spacing */}
            <div className="flex justify-between items-center text-xs text-slate-400 tracking-tight relative z-10 mt-8 px-12">
              <div>
                <p>© 2025 Trust Dating. All rights reserved.</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
