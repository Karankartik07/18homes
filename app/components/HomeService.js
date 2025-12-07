"use client";
import Image from "next/image";

export default function HomeServices() {
  const services = [
  {
    title: "1 BHK फ्लैट किराये पर",
    desc: "प्राइम लोकेशन में सुरक्षित और वेरिफाइड 1 BHK फ्लैट्स। सस्ती कीमत, मॉडर्न इंटीरियर और आरामदायक रहने की सुविधा के साथ तुरंत शिफ्ट होने का विकल्प।",
    img: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1764928068/3d-rendering-luxury-modern-bedroom-suite-hotel-with-tv-cabinet_105762-2280_ozfq80.avif",
  },
  {
    title: "2 BHK फैमिली अपार्टमेंट",
    desc: "परिवारों के लिए बेहतरीन 2 BHK विकल्प, जिसमें बड़े कमरे, पर्याप्त रोशनी और 24/7 सुरक्षा उपलब्ध है। स्कूल, मार्केट और मेट्रो के पास शानदार लोकेशन।",
    img: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1764928068/3d-rendering-luxury-modern-bedroom-suite-hotel-with-tv-cabinet_105762-2280_ozfq80.avif",
  },
  {
    title: "3 BHK लक्ज़री फ्लैट",
    desc: "बड़े परिवारों के लिए प्रीमियम 3 BHK अपार्टमेंट, जिसमें हाई-क्लास इंटीरियर, विशाल स्पेस और मॉडर्न सुविधाएं मौजूद हैं। एक बेहतर और आरामदायक लाइफस्टाइल के लिए परफेक्ट।",
    img: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1764928067/cozy-living-room-with-coral-sofa_23-2152001401_mtbfyd.avif",
  },
  {
    title: "फ्लैट खरीदने की सुविधा",
    desc: "Verified प्रॉपर्टी, transparent deals और आसान documentation के साथ दिल्ली-NCR में आपकी पसंद का फ्लैट खरीदने की सेवा। पहले देखें, फिर भरोसा करें।",
    img: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1764928067/3d-rendering-modern-dining-room-living-room-with-luxury-decor-green-sofa_105762-2140_eu0udp.avif",
  },
  {
    title: "PG / रूम ऑन रेंट",
    desc: "स्टूडेंट्स और बैचलर्स के लिए furnished PG और rooms। Free WiFi, housekeeping और pocket-friendly किराए के साथ तुरंत रहने की सुविधा उपलब्ध।",
    img: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1764928068/3d-rendering-modern-dining-room-living-room-with-luxury-decor-yellow-lamp_105762-2232_iu2qqe.avif",
  },
  {
    title: "बिना ब्रोकरेज किराया सेवा",
    desc: "Verified मालिकों से सीधे जुड़ें और बिना किसी extra charges के अपना फ्लैट किराये पर लें। Fast booking, easy paperwork और 100% assistance।",
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
        <h2 className="text-[42px] font-extrabold text-black">हमारी सेवाएँ</h2>
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
