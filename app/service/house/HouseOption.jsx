"use client";

import Link from "next/link";
import React, { useState } from "react";
import PropertyTypes from "./PropertyTypes";

export const HouseOption = () => {
  const [selectedType, setSelectedType] = useState(null);
  const cards = [
    {
      img: "https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=800",
      title: "Rental Flats",
      desc: "Modern and aesthetic designs crafted to perfection.",
    },
    {
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
      title: "Buy Flats",
      desc: "High-performance websites built with latest technology.",
    },

    {
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800",
      title: "Sell Flats ",
      desc: "Custom mobile apps for Android & iOS platforms.",
    },
  ];
  
  if (selectedType) {
    return (
      <PropertyTypes
        selectedType={selectedType}
        onBack={() => setSelectedType(null)}
      />
    );
  }

  return (
    <>
      <section className="w-full py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                onClick={() => setSelectedType(card.title)}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
