"use client";
import Image from "next/image";

export default function HomeServices() {
  const services = [
    {
      title: "Harmony Wedding Dj",
      desc: "The citation ceremony at RVS was graced by our chief guest, Dr.Amna Mirza, an eminent academician, author, entrepreneur and curator of ideas. She motivated the students with her wise words and wished them a bright future.",
      img: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1764928068/3d-rendering-luxury-modern-bedroom-suite-hotel-with-tv-cabinet_105762-2280_ozfq80.avif",
    },
    {
      title: "Birthday Parties",
      desc: "The citation ceremony at RVS was graced by our chief guest, Dr.Amna Mirza, an eminent academician, author, entrepreneur and curator of ideas. She motivated the students with her wise words and wished them a bright future.",
      img: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1764928068/3d-rendering-luxury-modern-bedroom-suite-hotel-with-tv-cabinet_105762-2280_ozfq80.avif",
    },
    {
      title: "Festivals Cultural Events",
      desc: "The citation ceremony at RVS was graced by our chief guest, Dr.Amna Mirza, an eminent academician, author, entrepreneur and curator of ideas. She motivated the students with her wise words and wished them a bright future.",
      img: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1764928067/cozy-living-room-with-coral-sofa_23-2152001401_mtbfyd.avif",
    },
    {
      title: "Corporate Events",
      desc: "The citation ceremony at RVS was graced by our chief guest, Dr.Amna Mirza, an eminent academician, author, entrepreneur and curator of ideas. She motivated the students with her wise words and wished them a bright future.",
      img: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1764928067/3d-rendering-modern-dining-room-living-room-with-luxury-decor-green-sofa_105762-2140_eu0udp.avif",
    },
    {
      title: "Harmony Wedding Dj",
      desc: "The citation ceremony at RVS was graced by our chief guest, Dr.Amna Mirza, an eminent academician, author, entrepreneur and curator of ideas. She motivated the students with her wise words and wished them a bright future.",
      img: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1764928068/3d-rendering-modern-dining-room-living-room-with-luxury-decor-yellow-lamp_105762-2232_iu2qqe.avif",
    },
    {
      title: "Birthday Parties",
      desc: "The citation ceremony at RVS was graced by our chief guest, Dr.Amna Mirza, an eminent academician, author, entrepreneur and curator of ideas. She motivated the students with her wise words and wished them a bright future.",
      img: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1764928067/comfortable-living-room-with-gray-sofa_305343-17365_zlfzp5.avif",
    },
  ];
  const customLeft = {
    2: "left-[40%]",  // 3rd card
    3: "left-[60%]"   // 4th card
  };
  return (
    <section className="w-full  bg-[#F7EFF2] py-16">

      <div className="text-center mb-16">
        <h3 className="text-[32px] italic text-black">Service</h3>
        <h2 className="text-[42px] font-extrabold text-black">Our Services</h2>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-15">

        {services.map((service, index) => (
          <div
            key={index}
            className={`
              relative
              ${index % 2 === 0 ? "md:mt-18" : "md:mt-0"}
            `}
          >

            {/* IMAGE */}
            <div className="w-full h-[300px] md:h-[330px] relative rounded-md overflow-hidden">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>


            <div
              className={`
    absolute 
   
    ${customLeft[index]
                  ? customLeft[index]
                  : index % 2 !== 0
                    ? "lg:left-60"
                    : "lg:left-[60%]"
                }
    ${index % 2 !== 0 ? "md:-bottom-10" : "md:-bottom-24"}
    md:-translate-x-1/2
    left-1/2 -translate-x-1/2  
    bottom-[-60px]              
    bg-white w-[90%] md:w-[80%]
    rounded-md p-6
    transition-all duration-300
    hover:-translate-y-2
  `}
            >
              <h3 className="text-[20px] font-semibold mb-2 text-black">
                {service.title}
              </h3>
              <p className="text-[16px] text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>


          </div>
        ))}

      </div>

      <div className="h-[150px]"></div>
      <a href="/" className="px-7 flex justify-center items-center w-[150px] mx-auto py-3 rounded-full bg-[#28E7F7] text-black text-[16px] font-semibold hover:opacity-90 transition">
                    View More
                </a>
      
    </section>
  );
}
