"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
    const data = [
  {
    text: "18Homes की सेवा बिल्कुल व्यक्तिगत लगती है। यह समझती है कि मुझे कब और कैसी प्रॉपर्टी की ज़रूरत है। चाहे मैं परिवार के लिए घर ढूँढ़ रहा हूँ या रेंटल ऑप्शन—18Homes हमेशा सही सुझाव देती है।",
    name: "Jane Cooper",
    role: "किरायेदार",
    img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1757578556/Ellipse_8_1_fr81tw.png",
  },
  {
    text: "मेरे लिए सबसे अच्छा अनुभव यह रहा कि 18Homes बिना किसी ब्रोकरज के सही लोकेशन में घर दिखाती है। उनकी टीम बहुत प्रोफेशनल और मददगार है।",
    name: "Emma Doe",
    role: "होम बायर",
    img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1757578561/Ellipse_8_fyouzw.png",
  },
  {
    text: "मुझे कमर्शियल स्पेस चाहिए था और 18Homes ने मुझे एकदम परफेक्ट ऑप्शन दिलवाया। समय, बजट और लोकेशन—सब सही मिला।",
    name: "Alex Carter",
    role: "बिज़नेस ओनर",
    img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1757578556/Ellipse_8_1_fr81tw.png",
  },
  {
    text: "18Homes के साथ प्रॉपर्टी ढूँढ़ना बेहद आसान हो गया। वेबसाइट यूज़र–फ्रेंडली है और टीम हर स्टेप पर गाइड करती है। बहुत शानदार अनुभव!",
    name: "Sofia Lancer",
    role: "प्रॉपर्टी सीकर",
    img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1757578561/Ellipse_8_fyouzw.png",
  }
];


    return (
        <section
            className="w-full py-18 bg-gradient-to-b from-[#316c3f] via-[#0d0128] to-[#461d34]"
        >
            {/* Heading */}
            <div className="text-center mb-12 px-4">
                <h2 className="text-[40px] text-white font-semibold mb-4">
                  हमारे क्लाइंट क्या कहते हैं
                </h2>

                <div className="w-[140px] h-[3px] bg-gradient-to-r from-[#bc67ff] to-[#4da6ff] mx-auto mb-6"></div>

                <p className="text-[#8f8f9a] max-w-[500px] mx-auto text-[18px] leading-relaxed">
                   हमारी सरल और तेज़ प्रक्रिया यह सुनिश्चित करती है कि आपको घर खोजने में कम समय लगे और सही प्रॉपर्टी जल्दी मिले।
                </p>
            </div>

            {/* Testimonials Slider */}
            <div className="max-w-[1170px] mx-auto px-6">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        nextEl: ".swiper-next",
                        prevEl: ".swiper-prev",
                    }}
                    autoplay={{
                        delay: 2000, // slide every 2.5s
                        disableOnInteraction: false, // user scroll kare tab bhi autoplay chalega
                    }}
                    loop={true} // infinite loop
                    speed={900} // smooth animation speed
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        1024: { slidesPerView: 2 },
                    }}
                >

                    {data.map((t, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 h-[250px] flex flex-col justify-between text-white shadow-xl">

                                <p className="text-[17px] leading-relaxed text-[#8f8f9a]">
                                    {t.text}
                                </p>

                                <div className="flex items-center gap-4 mt-2">
                                    <Image
                                        src={t.img}
                                        width={65}
                                        height={65}
                                        alt={t.name}
                                        className="rounded-full"
                                    />

                                    <div>
                                        <h3 className="text-[20px] font-semibold flex items-center gap-2">
                                            {t.name}
                                            <span className="w-[40px] h-[2px] bg-gradient-to-r from-[#822aff] to-[#3ab4ff] inline-block"></span>
                                        </h3>
                                        <p className="text-[#8f8f9a] text-[15px]">{t.role}</p>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons */}
                <div className="flex justify-center gap-6 mt-10">
                    <button className="swiper-prev w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition text-white text-xl">
                        ❮
                    </button>
                    <button className="swiper-next w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition text-white text-xl">
                        ❯
                    </button>
                </div>
            </div>
        </section>
    );
}
