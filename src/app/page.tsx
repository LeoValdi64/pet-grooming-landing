"use client";

import { useState } from "react";

const services = [
  { icon: "🛁", name: "Bath & Brush", desc: "Deep clean and brush out for a fresh, fluffy coat", price: "$35" },
  { icon: "✂️", name: "Full Groom", desc: "Complete haircut, bath, nail trim, and ear cleaning", price: "$65" },
  { icon: "💅", name: "Nail Trim", desc: "Safe and gentle nail clipping and filing", price: "$15" },
  { icon: "🦷", name: "Teeth Cleaning", desc: "Fresh breath and healthy gums for your pet", price: "$25" },
  { icon: "💆", name: "Spa Treatment", desc: "Luxury treatment with massage and aromatherapy", price: "$85" },
  { icon: "🐕", name: "Puppy Package", desc: "Gentle introduction to grooming for young pets", price: "$45" },
];

const trustBadges = [
  { icon: "🏆", title: "Certified Groomers", desc: "All staff professionally trained and certified" },
  { icon: "🏠", title: "Cage-Free", desc: "Open play environment for stress-free grooming" },
  { icon: "🌿", title: "Natural Products", desc: "Eco-friendly, hypoallergenic shampoos and treatments" },
  { icon: "⭐", title: "10+ Years", desc: "Trusted by thousands of pet parents since 2015" },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "$45",
    features: ["Bath & dry", "Brush out", "Nail trim", "Ear cleaning"],
    popular: false,
  },
  {
    name: "Premium",
    price: "$75",
    features: ["Everything in Basic", "Full haircut", "Teeth brushing", "Paw pad trim", "Bandana"],
    popular: true,
  },
  {
    name: "Luxury",
    price: "$120",
    features: ["Everything in Premium", "Spa treatment", "Deep conditioning", "Aromatherapy", "Blueberry facial"],
    popular: false,
  },
];

const testimonials = [
  { pet: "Max", owner: "Sarah M.", text: "Max has never looked better! The groomers are so gentle and patient with him. Highly recommend!", rating: 5 },
  { pet: "Bella", owner: "John D.", text: "Bella used to hate grooming, but she actually enjoys coming here. The cage-free environment makes all the difference.", rating: 5 },
  { pet: "Charlie", owner: "Emma K.", text: "Professional, caring, and my Charlie always comes home smelling amazing. Best grooming service in town!", rating: 5 },
];

export default function Home() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 20c-2 0-4 1-4 3s2 3 4 3 4-1 4-3-2-3-4-3zm-8 8c-1.5 0-3 .75-3 2.25s1.5 2.25 3 2.25 3-.75 3-2.25S23.5 28 22 28zm16 0c-1.5 0-3 .75-3 2.25s1.5 2.25 3 2.25 3-.75 3-2.25S39.5 28 38 28zm-13 6c-1.5 0-3 .75-3 2.25s1.5 2.25 3 2.25 3-.75 3-2.25S26.5 34 25 34zm10 0c-1.5 0-3 .75-3 2.25s1.5 2.25 3 2.25 3-.75 3-2.25S36.5 34 35 34z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32">
          <div className="text-center">
            <span className="text-6xl mb-4 block">🐾</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Pet Deserves the <span className="text-yellow-300">Best Care</span>
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Professional grooming services with love, care, and attention to every furry detail
            </p>
            <a
              href="#booking"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Appointment 🗓️
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-yellow-50 to-transparent" />
      </section>

      {/* Services Section */}
      <section className="bg-yellow-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From basic baths to luxury spa treatments, we offer everything your pet needs to look and feel their best
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className={`bg-white rounded-2xl p-6 shadow-md transition-all duration-300 ${
                  hoveredService === index ? "shadow-xl transform -translate-y-1" : ""
                }`}
              >
                <span className="text-4xl block mb-4">{service.icon}</span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <p className="text-2xl font-bold text-teal-600">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center">
                <span className="text-5xl block mb-4">{badge.icon}</span>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{badge.title}</h3>
                <p className="text-gray-600">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gradient-to-br from-teal-50 to-yellow-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Simple Pricing</h2>
          <p className="text-gray-600 text-center mb-12">Choose the perfect package for your furry friend</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-teal-600 text-white transform md:-translate-y-4 shadow-2xl"
                    : "bg-white shadow-lg"
                }`}
              >
                {plan.popular && (
                  <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4 inline-block">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-800"}`}>
                  {plan.name}
                </h3>
                <p className={`text-4xl font-bold mb-6 ${plan.popular ? "text-yellow-300" : "text-teal-600"}`}>
                  {plan.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span>✓</span>
                      <span className={plan.popular ? "text-teal-100" : "text-gray-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  className={`block text-center py-3 px-6 rounded-full font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-white text-teal-600 hover:bg-yellow-100"
                      : "bg-teal-600 text-white hover:bg-teal-700"
                  }`}
                >
                  Choose {plan.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Before & After</h2>
          <p className="text-gray-600 text-center mb-12">See the amazing transformations</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-teal-100 to-yellow-100 rounded-xl flex items-center justify-center"
              >
                <span className="text-6xl opacity-50">🐾</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-yellow-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Happy Pet Parents</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🐕</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.pet}</p>
                    <p className="text-sm text-gray-500">Parent: {testimonial.owner}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking" className="bg-gradient-to-r from-orange-500 to-orange-600 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Pamper Your Pet?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Book your appointment today and give your furry friend the care they deserve
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+15557295683"
              className="flex items-center gap-3 bg-white text-orange-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-orange-100 transition-all duration-300"
            >
              <span className="text-2xl">📞</span>
              (555) PAW-LOVE
            </a>
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Schedule Online 📅
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">🐾 Pawfect Grooming</h3>
              <p className="text-gray-400 mb-4">
                Professional pet grooming services with love and care. Your pet&apos;s happiness is our priority.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-2xl hover:text-teal-400 transition-colors">📘</a>
                <a href="#" className="text-2xl hover:text-teal-400 transition-colors">📸</a>
                <a href="#" className="text-2xl hover:text-teal-400 transition-colors">🐦</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Hours</h4>
              <ul className="text-gray-400 space-y-2">
                <li>Mon-Fri: 8am - 7pm</li>
                <li>Saturday: 9am - 6pm</li>
                <li>Sunday: 10am - 4pm</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="text-gray-400 space-y-2">
                <li>📍 123 Pet Lane, Petville</li>
                <li>📞 (555) PAW-LOVE</li>
                <li>✉️ woof@pawfect.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© 2026 Pawfect Grooming. All rights reserved. Made with 🐾</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
