"use client";

import Image from "next/image";

export default function PerfectShoww() {
  return (
    <section className="relative w-full  md:h-[250px] overflow-hidden">

      {/* Background Image */}
      <Image
        src="https://res.cloudinary.com/dal5dlztv/image/upload/v1764153549/image_3_q2y0l7.png"
        alt="Perfect Music Show"
        fill
        // className="object-cover"
      />

    
      {/* <div className="absolute inset-0 bg-[#270045]/70"></div>

      
      <div className="relative w-full h-full flex items-center justify-between max-w-[1500px] mx-auto px-6 md:px-14">

        
        <div className="flex items-center gap-4">

       
          <div className="w-3 h-3 rounded-full bg-[#c628ff]"></div>

        
          <h2 className="text-white font-extrabold text-[34px] md:text-[48px] leading-tight tracking-wide">
            PERFECT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c628ff] to-[#ff3cd2]">
              MUSIC, COCKTAILS
            </span>
          </h2>
        </div>

        <button className="flex items-center gap-3 pr-6">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#ff2fbf]"></div>
          <span className="text-white font-semibold text-[16px] md:text-[20px]">
            BOOK A PRIVATE SHOW
          </span>
        </button>

      </div> */}
    </section>
  );
}
