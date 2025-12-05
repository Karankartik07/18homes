"use client";
import React from "react";

function MissionVisson() {
  return (
    <div>
      <section className="w-full bg-[#1B1333] py-20 relative">
        <div className="max-w-[1500px] mx-auto px-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — ONE FULL LARGE IMAGE */}
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1764169114/about-img-1_1_enlelh.png"
              alt="DJ"
              className="w-full h-full rounded-[40px] object-cover"
            />
          </div>

          {/* RIGHT — TEXT BLOCK */}
          <div className="flex flex-col gap-5">
            {/* Mission */}
            <div className="border-3 border-[#FFFFFF] rounded-2xl p-10 text-white">
              <h2 className="text-[24px] font-semibold mb-4">Our Mission</h2>
              <p className="text-[17px]  text-white/80">
                At DJ Harmony Beats, we’re here to make your event unforgettable
                with great music and a fun, stress-free experience. Whether it’s
                a wedding, party, or corporate event, we work closely with you
                to understand what you want and deliver a playlist that keeps
                everyone dancing. Our goal is simple: to bring good vibes, great
                tunes, and a personalized touch to every occasion.
              </p>
            </div>

            {/* Vision */}
            <div className="border-3 border-[#FFFFFF] rounded-2xl p-10 text-white">
              <h2 className="text-[24px] font-semibold mb-4">Our Vision</h2>
              <p className="text-[17px]  text-white/80">
                Our vision is to become the go-to DJ service provider for anyone
                looking to create an unforgettable experience through music. We
                aim to be known for our personal touch, reliability, and ability
                to read the crowd, making every event feel unique and tailored
                to the people who are there. We strive to grow alongside our
                clients, building lasting relationships and making music a key
                part of their most important moments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MissionVisson;
