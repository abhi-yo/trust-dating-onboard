"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Shield,
  MessageCircle,
  Calendar,
  Monitor,
  Layers,
  Download,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

// Simple grid guide component
const GridGuides = ({ preserveBackground = false }) => (
  <div
    className="absolute inset-0 pointer-events-none overflow-hidden"
    aria-hidden="true"
  >
    <div className="h-full max-w-7xl mx-auto px-6 relative">
      {/* White left margin - extends to left edge of viewport */}
      <div className="absolute inset-y-0 right-full w-[100vw] bg-white"></div>
      {/* White right margin - extends to right edge of viewport */}
      <div className="absolute inset-y-0 left-full w-[100vw] bg-white"></div>
      {/* Content area */}
      <div
        className={`h-full relative ${
          preserveBackground ? "bg-transparent" : "bg-white"
        }`}
      >
        {/* Left guide line */}
        <div className="absolute inset-y-0 -left-6 w-px bg-gray-200/80"></div>
        {/* Right guide line */}
        <div className="absolute inset-y-0 -right-6 w-px bg-gray-200/80"></div>
      </div>
    </div>
  </div>
);

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: MessageCircle,
      title: "Chat Analysis",
      description:
        "Extract interests from chat conversations using advanced NLP technology.",
    },
    {
      icon: Calendar,
      title: "Activity Suggestions",
      description:
        "Get personalized recommendations for dates and activities based on shared interests.",
    },
    {
      icon: Monitor,
      title: "Cross-Platform",
      description:
        "Seamlessly works on both Mac and Windows operating systems.",
    },
    {
      icon: Layers,
      title: "Overlay Mode",
      description:
        "Floating overlay interface toggled by convenient keyboard shortcuts.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3" : "py-6"
        }`}
      >
        <div
          className={`transition-all duration-500 ${
            isScrolled ? "max-w-2xl" : "max-w-6xl"
          } mx-auto px-6`}
        >
          <div
            className={`transition-all duration-500 ${
              isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg border border-gray-200/60 rounded-full px-6 py-2"
                : "bg-transparent px-0 py-2"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span
                  className={`font-medium transition-all duration-300 ${
                    isScrolled ? "text-base" : "text-lg"
                  } text-slate-900 tracking-tight`}
                >
                  Trust Dating
                </span>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#features"
                  className={`text-slate-700 hover:text-slate-900 transition-colors font-medium tracking-tight ${
                    isScrolled ? "text-sm" : "text-sm"
                  }`}
                >
                  Features
                </a>
                <a
                  href="#download"
                  className={`text-slate-700 hover:text-slate-900 transition-colors font-medium tracking-tight ${
                    isScrolled ? "text-sm" : "text-sm"
                  }`}
                >
                  Download
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`p-2 ${isScrolled ? "h-8 w-8" : "h-10 w-10"}`}
                >
                  {isMobileMenuOpen ? (
                    <X className={`${isScrolled ? "h-4 w-4" : "h-5 w-5"}`} />
                  ) : (
                    <Menu className={`${isScrolled ? "h-4 w-4" : "h-5 w-5"}`} />
                  )}
                </Button>
              </div>

              {/* CTA Button */}
              <Button
                size="sm"
                className={`hidden md:flex bg-slate-900 hover:bg-slate-800 text-white font-medium transition-all duration-300 tracking-tight shadow-md hover:shadow-lg ${
                  isScrolled
                    ? "rounded-full px-4 py-1.5 text-xs h-7"
                    : "rounded-lg px-5 py-2 text-sm h-9"
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
      <section className="min-h-screen flex items-center justify-center px-6 bg-cover bg-center bg-no-repeat relative">
        {/* Desktop Background */}
        <div
          className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/bg.png)" }}
        ></div>
        {/* Mobile Background */}
        <div
          className="absolute inset-0 block md:hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/mobile-hero.jpg)" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white/70 to-blue-100/60"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10 px-4 sm:px-0">
          {/* Y Combinator Badge */}
          <div className="inline-flex items-center gap-2 bg-white/85 backdrop-blur-sm border border-slate-200/70 rounded-full pl-3 pr-4 py-1 mb-6 sm:mb-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_12px_-2px_rgba(0,0,0,0.06)] scale-90 sm:scale-100">
            <span className="text-slate-600 text-xs sm:text-sm font-medium tracking-tight">
              Not Backed by
            </span>
            <img
              src="/Y_Combinator_logo.svg.png"
              alt="Y Combinator"
              className="h-4 w-4 sm:h-5 sm:w-5 object-contain shadow-[0_0_0_1px_rgba(0,0,0,0.04)]"
              loading="lazy"
              width={18}
              height={18}
            />
            <span className="text-slate-700 text-xs sm:text-sm font-medium tracking-tight">
              Combinator
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 mb-6 sm:mb-8 leading-tight tracking-tighter px-2 sm:px-0">
            AI that helps you date
            <span className="text-blue-600 block mt-1 sm:mt-0">
              safely, instantly
            </span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto leading-relaxed tracking-tight px-4 sm:px-0">
            Analyze profiles, understand conversations, and get personalized
            date suggestions with our intelligent dating overlay tool.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center px-4 sm:px-0">
            <Button
              size="lg"
              className="relative group overflow-hidden text-sm px-6 py-2.5 sm:text-base sm:px-8 sm:py-3.5 font-medium tracking-tight rounded-lg sm:rounded-2xl bg-gradient-to-t from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-[0_2px_8px_-2px_rgba(37,99,235,0.3),0_4px_16px_-4px_rgba(37,99,235,0.25)] sm:shadow-[0_4px_12px_-2px_rgba(37,99,235,0.45),0_8px_24px_-4px_rgba(37,99,235,0.35)] hover:shadow-[0_4px_12px_-2px_rgba(37,99,235,0.4),0_8px_20px_-4px_rgba(37,99,235,0.3)] sm:hover:shadow-[0_6px_16px_-2px_rgba(37,99,235,0.5),0_12px_32px_-4px_rgba(37,99,235,0.4)] transition-all duration-300 focus:ring-2 focus:ring-blue-300/50 border border-blue-500/30 before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(to_top,rgba(255,255,255,0.15),rgba(255,255,255,0.05))] before:pointer-events-none active:scale-[0.97]"
            >
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 opacity-90 transition-transform group-hover:-translate-y-0.5" />
              <span className="relative z-10">Download Now</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group text-sm px-6 py-2.5 sm:text-base sm:px-8 sm:py-3.5 font-medium tracking-tight rounded-lg sm:rounded-2xl bg-white/60 sm:bg-white/70 backdrop-blur-sm text-slate-700 sm:text-slate-800 border border-slate-200/60 sm:border-slate-200/70 hover:bg-white/80 sm:hover:bg-white/90 hover:border-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_3px_rgba(0,0,0,0.03),0_4px_10px_-4px_rgba(0,0,0,0.06)] sm:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_4px_rgba(0,0,0,0.04),0_6px_14px_-4px_rgba(0,0,0,0.08)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_2px_5px_rgba(0,0,0,0.04),0_6px_12px_-4px_rgba(0,0,0,0.08)] sm:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_3px_6px_rgba(0,0,0,0.05),0_8px_18px_-4px_rgba(0,0,0,0.12)] transition-all duration-300 focus:ring-2 focus:ring-blue-200/60 active:scale-[0.97]"
            >
              <span>Learn More</span>
              <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="relative py-12 sm:py-20 px-4 sm:px-6 bg-gray-50/30"
      >
        <GridGuides preserveBackground={true} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-slate-900 mb-3 sm:mb-4 leading-tight tracking-tight">
              Features
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed tracking-tight px-4 sm:px-0">
              Everything you need to make informed decisions and meaningful
              connections.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-4 sm:p-6 hover:bg-white/60 rounded-xl sm:rounded-2xl transition-all duration-300 border border-transparent hover:border-gray-200/50 hover:shadow-sm"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:bg-blue-100 group-hover:scale-105 transition-all duration-300">
                  <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-slate-700 transition-colors" />
                </div>
                <h3 className="text-sm sm:text-base font-medium text-slate-900 mb-1.5 sm:mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed tracking-tight">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <GridGuides />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-slate-900 mb-3 sm:mb-4 leading-tight tracking-tight">
              Trust & Safety
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed tracking-tight px-4 sm:px-0">
              Built with privacy and security at its core
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="space-y-5 sm:space-y-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-slate-900 mb-1.5 sm:mb-2 tracking-tight">
                      End-to-End Encryption
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed tracking-tight">
                      All your data is encrypted locally and never leaves your
                      device
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <Monitor className="h-4 w-4 sm:h-5 sm:w-5 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-slate-900 mb-1.5 sm:mb-2 tracking-tight">
                      Offline Processing
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed tracking-tight">
                      AI analysis happens locally without internet connection
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <Layers className="h-4 w-4 sm:h-5 sm:w-5 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-slate-900 mb-1.5 sm:mb-2 tracking-tight">
                      Zero Data Collection
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed tracking-tight">
                      We don't store, track, or collect any personal information
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50/50 p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-gray-100 mt-6 md:mt-0">
              <div className="grid grid-cols-2 gap-4 sm:gap-8 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight mb-1 sm:mb-2">
                    256-bit
                  </div>
                  <div className="text-slate-600 text-xs sm:text-sm tracking-tight">
                    Encryption
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight mb-1 sm:mb-2">
                    0%
                  </div>
                  <div className="text-slate-600 text-xs sm:text-sm tracking-tight">
                    Data Shared
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight mb-1 sm:mb-2">
                    100%
                  </div>
                  <div className="text-slate-600 text-xs sm:text-sm tracking-tight">
                    Private
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight mb-1 sm:mb-2">
                    24/7
                  </div>
                  <div className="text-slate-600 text-xs sm:text-sm tracking-tight">
                    Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="download"
        className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-50/60 via-blue-50/40 to-slate-50/60"
      >
        <GridGuides preserveBackground={true} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium text-slate-900 mb-4 sm:mb-6 leading-tight tracking-tight px-4 sm:px-0">
              Ready to transform your dating experience?
            </h2>
            <p className="text-sm sm:text-lg text-slate-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed tracking-tight mb-6 sm:mb-8 px-4 sm:px-0">
              Join thousands who are already making smarter, safer connections
              with our AI-powered dating assistant.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center mb-6 sm:mb-8 px-4 sm:px-0">
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white text-sm px-5 py-2.5 sm:text-base sm:px-6 sm:py-3 font-medium tracking-tight rounded-lg sm:rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.1)] sm:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_16px_rgba(0,0,0,0.15)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_6px_16px_rgba(0,0,0,0.15)] sm:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_12px_24px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-blue-200 border border-slate-700/20"
            >
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Download for Mac
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-sm px-5 py-2.5 sm:text-base sm:px-6 sm:py-3 border border-slate-200 sm:border-2 sm:border-slate-150 hover:bg-white/80 hover:border-blue-200 bg-white/50 sm:bg-white/60 text-slate-900 font-medium tracking-tight rounded-lg sm:rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_2px_8px_rgba(0,0,0,0.03)] sm:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_12px_rgba(0,0,0,0.06)] sm:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_20px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-blue-100"
            >
              Download for Windows
            </Button>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 tracking-tight">
            Free download • No subscription required • Privacy focused
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-6 pb-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Footer Links */}
          <div className="grid md:grid-cols-3 gap-8 mb-6 max-w-4xl mx-auto"></div>

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
                <a href="#" className="hover:text-slate-600 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-slate-600 transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
