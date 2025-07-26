"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { StripeBgGuides } from "@/components/ui/stripe-bg-guides"
import { Shield, MessageCircle, Calendar, Monitor, Layers, Download, ChevronRight, Menu, X } from "lucide-react"

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
                <span className={`font-semibold transition-all duration-300 ${
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
                className={`hidden md:flex bg-slate-900 hover:bg-slate-800 text-white font-medium transition-all duration-300 tracking-tight ${
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
                    className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 py-2 font-medium w-full text-sm tracking-tight"
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
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-6 leading-tight tracking-tight">
            AI that helps you date
            <span className="text-blue-600 block">smarter, instantly</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed tracking-tight">
            Analyze profiles, understand conversations, and get personalized date suggestions with our intelligent dating overlay tool.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="default" className="bg-blue-600 hover:bg-blue-700 text-sm px-6 py-3 font-medium tracking-tight">
              <Download className="mr-2 h-4 w-4" />
              Download Now
            </Button>
            <Button
              variant="outline"
              size="default"
              className="text-sm px-6 py-3 border-blue-200 hover:bg-blue-50 bg-white text-slate-900 font-medium tracking-tight"
            >
              Learn More
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative overflow-hidden py-32 px-6 bg-white">
        <StripeBgGuides contained />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4 leading-tight tracking-tight">Features</h2>
            <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed tracking-tight">
              Everything you need to make informed decisions and meaningful connections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-6 hover:bg-blue-50/50 rounded-2xl transition-all duration-300 border border-transparent hover:border-blue-100/50"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-100 group-hover:scale-105 transition-all duration-300">
                  <feature.icon className="h-5 w-5 text-slate-700 transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed tracking-tight">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="relative overflow-hidden py-32 px-6 bg-blue-50/30">
        <StripeBgGuides contained />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4 leading-tight tracking-tight">Trust & Safety</h2>
            <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed tracking-tight">
              Built with privacy and security at its core
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="h-4 w-4 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">End-to-End Encryption</h3>
                    <p className="text-sm text-slate-600 leading-relaxed tracking-tight">All your data is encrypted locally and never leaves your device</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Monitor className="h-4 w-4 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Offline Processing</h3>
                    <p className="text-sm text-slate-600 leading-relaxed tracking-tight">AI analysis happens locally without internet connection</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Layers className="h-4 w-4 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Zero Data Collection</h3>
                    <p className="text-sm text-slate-600 leading-relaxed tracking-tight">We don't store, track, or collect any personal information</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-sm">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl font-medium text-slate-900 tracking-tight mb-1">256-bit</div>
                  <div className="text-slate-600 text-sm tracking-tight">Encryption</div>
                </div>
                <div>
                  <div className="text-2xl font-medium text-slate-900 tracking-tight mb-1">0%</div>
                  <div className="text-slate-600 text-sm tracking-tight">Data Shared</div>
                </div>
                <div>
                  <div className="text-2xl font-medium text-slate-900 tracking-tight mb-1">100%</div>
                  <div className="text-slate-600 text-sm tracking-tight">Private</div>
                </div>
                <div>
                  <div className="text-2xl font-medium text-slate-900 tracking-tight mb-1">24/7</div>
                  <div className="text-slate-600 text-sm tracking-tight">Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="download" className="relative overflow-hidden py-32 px-6 bg-white">
        <StripeBgGuides contained />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6 leading-tight tracking-tight">
              Download Trust Dating
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed tracking-tight mb-10">
              Start making smarter, safer connections today. Available for Mac and Windows.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 font-medium tracking-tight rounded-xl text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Download className="mr-2 h-5 w-5" />
              Download for Mac
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-blue-200 hover:border-blue-300 text-slate-900 px-8 py-3 font-medium tracking-tight rounded-xl text-base hover:bg-blue-50 transition-all duration-300">
              <Download className="mr-2 h-5 w-5" />
              Download for Windows
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-lg font-medium text-slate-900 mb-1 tracking-tight">Free Forever</div>
              <p className="text-sm text-slate-600 tracking-tight">No subscription or hidden fees</p>
            </div>
            <div className="p-4">
              <div className="text-lg font-medium text-slate-900 mb-1 tracking-tight">Instant Setup</div>
              <p className="text-sm text-slate-600 tracking-tight">Ready to use in under 60 seconds</p>
            </div>
            <div className="p-4">
              <div className="text-lg font-medium text-slate-900 mb-1 tracking-tight">No Account</div>
              <p className="text-sm text-slate-600 tracking-tight">Works without registration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 bg-blue-50/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="md:col-span-2">
              <div className="font-medium text-lg text-slate-900 mb-2 tracking-tight">Trust Dating</div>
              <p className="text-sm text-slate-600 leading-relaxed tracking-tight max-w-xs mb-3">
                AI-powered dating overlay that helps you make smarter, safer connections while maintaining complete privacy.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-base text-slate-900 mb-2 tracking-tight">Product</h3>
              <ul className="space-y-1.5">
                <li><a href="#features" className="text-sm text-slate-600 hover:text-slate-900 transition-colors tracking-tight">Features</a></li>
                <li><a href="#download" className="text-sm text-slate-600 hover:text-slate-900 transition-colors tracking-tight">Download</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors tracking-tight">Documentation</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors tracking-tight">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-base text-slate-900 mb-2 tracking-tight">Support</h3>
              <ul className="space-y-1.5">
                <li><a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors tracking-tight">Help Center</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors tracking-tight">Contact Us</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors tracking-tight">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors tracking-tight">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-200/50 pt-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-600 tracking-tight">
              © 2025 Trust Dating. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 tracking-tight mt-2 md:mt-0">
              Made with privacy in mind
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
